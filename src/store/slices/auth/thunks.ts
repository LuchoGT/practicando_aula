import { AppThunk } from "../../store";
import { checkingCredentials, login } from "./authSlice";

export const checkingAuthentication = (): AppThunk => async (dispatch) => {
    dispatch(checkingCredentials());
    // Aquí puedes hacer cualquier operación asíncrona, como una llamada a la API, por ejemplo
  
    dispatch(login)
};