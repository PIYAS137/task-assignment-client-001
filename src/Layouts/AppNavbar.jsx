import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Context/FirebaseContext"


const AppNavbar = () => {

    const { user, FirebaseSignOutUser } = useContext(AuthContext)

    const handleClickLogOut = () => {
        FirebaseSignOutUser()
            .then().catch()
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Dashboard</NavLink></li>
        <li><NavLink to={'/det'}>Details</NavLink></li>
    </>

    return (
        <nav className="bg-red-100">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Assignment</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <small className=" font-bold text-green-600">{user?.displayName}</small>
                    {
                        user && <button onClick={handleClickLogOut} className="btn btn-error text-white font-bold">Logout</button>
                    }
                </div>
            </div>
        </nav>
    )
}

export default AppNavbar