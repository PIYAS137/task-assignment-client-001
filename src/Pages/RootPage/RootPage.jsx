import { Outlet } from "react-router-dom"
import AppNavbar from "../../Layouts/AppNavbar"

const RootPage = () => {
  return (
    <div>
        <AppNavbar/>
        <Outlet/>
    </div>
  )
}

export default RootPage