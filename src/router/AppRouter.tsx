import { useAuthStore } from '@/hooks/useAuthStore';
import { ChekingAuth } from '@/modules/auth/components/ChekingAuth/ChekingAuth';
import { AuthRoutes } from '@/modules/auth/routes/AuthRoutes'
import { DashboardRoutes } from '@/modules/dashboard/routes/DashboardRoutes'
import { login, logout } from '@/store/slices/auth/authSlice';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  Navigate, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  // const dispatch = useDispatch();

  const  {checkAuthToken,status} = useAuthStore();

  // const {status} = useSelector((state: RootState) => state.auth2);

  useEffect(() => {
    // Simula la verificación de autenticación (sin backend real)
    // const user = localStorage.getItem('aula-virtual');
    // if (user) {
    //   dispatch(login(user));
    // } else {
    //   dispatch(logout());
    // }

    checkAuthToken();
  }, []);

  if ( status === 'checking' ) {
    return <ChekingAuth />
  }


  return (
    <Routes>

      {
        status === 'authenticated'
        ?
        <Route path='/*' element={<DashboardRoutes/>}/>
        :
        <Route path='/auth/*' element={<AuthRoutes/>}/>
      }

      <Route path='*' element={ <Navigate to='/auth/login' replace/>  } />
    </Routes>
  )
}
