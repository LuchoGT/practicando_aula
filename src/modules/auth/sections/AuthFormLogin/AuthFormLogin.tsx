import { useForm } from "react-hook-form";
import { InputField } from "../../components/InputField/InputField";
import { User, User2 } from "@/interfaces/auth/user";
import { useDispatch } from "react-redux";
import { checkingCredentials, login } from "@/store/slices/auth/authSlice";
import "./AuthFormLogin.scss";
import { Link } from "react-router-dom";
import { checkingAuthentication } from "@/store/slices/auth/thunks";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const AuthFormLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User2>();

  const {startLogin,errorMessage} = useAuthStore()

  const dispatch = useDispatch();

  const onSubmit = (data:User2)=>{
    const {username,password} = data;
    // localStorage.setItem('aula-virtual',username);
    // dispatch(checkingCredentials());
    // dispatch(login(username));
    // startLogin({username,password});
    // console.log('login',{username,password});
    startLogin({username,password});
    reset();
  }
  useEffect(() => {
    
    if (errorMessage !==undefined){
      Swal.fire("Error en la autenticacion",errorMessage,'error');
    }
    
  }, [errorMessage])
  

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="text"
        label="Usuario"
        name="username"
        register={register}
        error={errors.username}
        // pattern={{
        //   value:
        //     /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
        //   message: "Formato no válido",
        // }}
      />
      <InputField
        type="password"
        label="Password"
        name="password"
        register={register}
        error={errors.password}
        minLength={6}
        minLengthMessage="La contraseña debe tener al menos 8 caracteres"
        // minLengthMessage="Ups! La contraseña no es correcta, vuelve a intentarlo."
      />
      <div className="form__buttons">
        <button type="submit" className="form__button">
          Iniciar sesión
        </button>
        <div>
          <Link to='/auth/register'>Eres nuevo? Crea tu cuenta</Link>
        </div>
      </div>
    </form>
  );
};
