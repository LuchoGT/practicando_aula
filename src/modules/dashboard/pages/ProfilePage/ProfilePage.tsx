import { User, User2 } from "@/interfaces/auth/user";
import { InputField } from "@/modules/auth/components/InputField/InputField";
import { useForm } from "react-hook-form";
import './ProfilePage.scss'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateUsername } from "@/store/slices/auth/authSlice";
export const ProfilePage = () => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit
  } = useForm<User2>();

  // const {username} = useSelector((state:RootState) => state.auth)
  // const password = localStorage.getItem('aula-virtual');
  const dispatch = useDispatch();

  // setValue('username', username);
  // setValue('password', password);

  const onSubmit = (data:User2) => {
    const {username} = data;
    // dispatch(updateUsername(username));
    // localStorage.setItem('aula-virtual', data.username); 
  }
  return (
    <main className="profile">
      <span>Mi perfil</span>
      {/* <section className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="file"
            label="Foto"
            name="photo"
            register={register}
            error={errors.photo}
          />
          <InputField
            type="text"
            label="Nombres"
            name="name"
            register={register}
            error={errors.name}
          />
          <InputField
            type="text"
            label="Apellidos"
            name="surname"
            register={register}
            error={errors.surname}
          />
          <InputField
            type="email"
            label="Correo"
            name="email"
            register={register}
            error={errors.email}
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            register={register}
            error={errors.password}
          />
          <InputField
            type="text"
            label="Usuario"
            name="username"
            register={register}
            error={errors.username}
          />
          <InputField
            type="text"
            label="Celular"
            name="phone"
            register={register}
            error={errors.phone}
          />
          <button type="submit">Guardar cambios</button>
        </form>
      </section> */}
    </main>
  );
};
