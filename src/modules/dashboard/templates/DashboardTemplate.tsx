import { Outlet } from "react-router-dom"
import { DashboardHeader } from "../sections/DashboardHeader/DashboardHeader"

export const DashboardTemplate = () => {
  return (
    <>
        <DashboardHeader/>
        <Outlet/>
    </>
  )
}
