import { createBrowserRouter } from 'react-router-dom'
import RootPage from '../Pages/RootPage/RootPage'
import DashboardScreen from '../Pages/DashboardScreen/DashboardScreen'
import LoginScreen from '../Pages/LoginScreen/LoginScreen'
import SignUpScreen from '../Pages/SignUpScreen/SignUpScreen'
import ViewDetailsScreen from '../Pages/ViewDetailsScreen/ViewDetailsScreen'



const route = createBrowserRouter([
    {
        path:'/',
        element: <RootPage/>,
        children:[
            {
                path:'/',
                element: <DashboardScreen/>
            },
            {
                path:'/login',
                element: <LoginScreen/>
            },
            {
                path:'/signup',
                element: <SignUpScreen/>
            },
            {
                path: '/details/:sid',
                loader:({params})=>fetch(`http://localhost:5022/user/${params.sid}`),
                element: <ViewDetailsScreen/>
            }
        ]
    }
])

export default route; 