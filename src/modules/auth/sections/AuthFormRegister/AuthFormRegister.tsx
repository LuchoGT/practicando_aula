import { useForm } from "react-hook-form";
import { InputField } from "../../components/InputField/InputField"
import { User, User2 } from "@/interfaces/auth/user";
import { useDispatch } from "react-redux";
import { checkingCredentials, login } from "@/store/slices/auth/authSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CheckboxField } from "../../components/CheckboxField/CheckboxField";
import Swal from "sweetalert2";
import { useAuthStore } from "@/hooks/useAuthStore";

export const AuthFormRegister = () => {

  const {startRegister} = useAuthStore();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        setValue,
        watch
      } = useForm<User2>();
    
      const dispatch = useDispatch();
  const { requireUppercase, requireLowercase, requireNumber, requireMinLength } = watch();
  const passwordValue = watch('password'); 



    
      const onSubmit = (data:User2)=>{
        const {username,password} = data;
        // localStorage.setItem('aula-virtual',username);
        // dispatch(checkingCredentials());
        // dispatch(login(username));
        // console.log('register',{username,password});
        startRegister({username,password});
        reset();
      }

      useEffect(() => {
        // Verificar si el password cumple con los requisitos y marcar los checkboxes
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;
    
        if (passwordValue !== undefined) {
          setValue('requireUppercase', uppercaseRegex.test(passwordValue));
          setValue('requireLowercase', lowercaseRegex.test(passwordValue));
          setValue('requireNumber', numberRegex.test(passwordValue));
          setValue('requireMinLength', passwordValue.length >= 6);
        }
      }, [passwordValue, setValue]);
    
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <InputField
      type="text"
      label="Usuario"
      name="username"
      register={register}
      error={errors.username}
    />
    <InputField
      type="password"
      label="Password"
      name="password"
      register={register}
      error={errors.password}
      minLength={6}
      minLengthMessage="La contraseña debe tener al menos 6 caracteres"
    />
    <div>
      <CheckboxField
        register={register}
        label="Minimo 6 caracteres"
        name="requireMinLength"
        disabled
      />
      <CheckboxField
        register={register}
        label="Minimo 1 mayuscula"
        name="requireUppercase"
        disabled

      />
      <CheckboxField
        register={register}
        label="Minimo 1 minuscula"
        name="requireLowercase"
        disabled

      />
      <CheckboxField
        register={register}
        label="Minimo 1 numero"
        name="requireNumber"
        disabled

      />
    </div>
    <div className="form__buttons">
      <button type="submit" className="form__button" disabled={!requireUppercase || !requireLowercase || !requireNumber || !requireMinLength}>
        Iniciar sesión
      </button>
      <div>
        <Link to='/auth/login'>Ya tienes cuenta? Ingresa</Link>
      </div>
    </div>
  </form>
  )
}
