import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../pages/DashboardPage/DashboardPage'
import { DashboardTemplate } from '../templates/DashboardTemplate'
import { ProfilePage } from '../pages/ProfilePage/ProfilePage'

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardTemplate/>}>
        <Route path='/' element={<DashboardPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Route>
      
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
