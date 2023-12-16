import { useContext } from "react"
import { AuthContext } from "../Context/FirebaseContext"
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const { user, loader } = useContext(AuthContext);

    if (loader) {
     return <div className=" flex justify-center items-center h-screen w-full">
        <span className="loading loading-spinner loading-lg"></span>
     </div>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}/>
}

export default PrivateRoutes