import api from "@/api/api";
import { User, User2 } from "@/interfaces/auth/user";
import { checkingCredentials, login, logout } from "@/store/slices/auth/authSlice";
import { cleanErrorMessage, onCheckingCredentials, onLogin, onLogout } from "@/store/slices/auth/authSlice2";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux"

export const useAuthStore=()=>{
    const { status,user,errorMessage} = useSelector((state: RootState) => state.auth2);
    const dispatch = useDispatch();

    const startLogin = async({username,password}:User2)=>{
        // console.log({username,password});
        dispatch(onCheckingCredentials());
        try {
            const {data} = await api.post('/api/v1/auth',{username,password})
            // console.log({data});
            localStorage.setItem("token",data.token);
            localStorage.setItem("token-init-date", new Date().getTime() );
            // dispatch(login({username: data.username,uid:data.uid}));
            dispatch(onLogin({username:data.username,uid:data.uid}));
        
        } catch (error) {
            // console.log({error});
            dispatch(onLogout('Credenciales incorrectas'))
            setTimeout(() => {
                dispatch(cleanErrorMessage())
            }, 10);
            
        }
        
    }

    const startRegister = async({username,password}:User2)=>{
        dispatch(onCheckingCredentials());
        try {
            const {data} = await api.post("/api/v1/auth/register",{username,password})
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(onLogin({username:data.username, uid:data.uid}));

        } catch (error) {
            dispatch(onLogout(error.response.data?.msg));
            setTimeout(() => {
                dispatch(cleanErrorMessage())
            },10)
        }
    }

    const checkAuthToken = async()=>{
        const token = localStorage.getItem("token");
        if (!token) return dispatch(logout())

            try {
                const {data} = await api.get('/api/v1/auth/renew');
                localStorage.setItem("token",data.token);
                localStorage.setItem("token-init-date", new Date().getTime());
                dispatch(login({username: data.username,uid:data.uid}));
            } catch (error) {
                localStorage.clear();
                dispatch(logout())
            }
    }

    const startLogout=()=>{
        localStorage.clear();
        dispatch(onLogout())
    }

    return{
        status,
        user,
        errorMessage,
        startLogin,
        checkAuthToken,
        startRegister,
        startLogout,
    }
}