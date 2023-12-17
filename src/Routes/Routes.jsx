import { createBrowserRouter } from 'react-router-dom'
import RootPage from '../Pages/RootPage/RootPage'
import DashboardScreen from '../Pages/DashboardScreen/DashboardScreen'
import LoginScreen from '../Pages/LoginScreen/LoginScreen'
import SignUpScreen from '../Pages/SignUpScreen/SignUpScreen'
import ViewDetailsScreen from '../Pages/ViewDetailsScreen/ViewDetailsScreen'
import UpdateScreen from '../Pages/UpdateScreen/UpdateScreen'
import PrivateRoutes from './PrivateRoutes'
import ErrorScreen from '../Pages/ErrorScreen/ErrorScreen'



const route = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement:<ErrorScreen/>,
        children: [
            {
                path: '/',
                element: <PrivateRoutes><DashboardScreen /></PrivateRoutes>
            },
            {
                path: '/login',
                element: <LoginScreen />
            },
            {
                path: '/signup',
                element: <SignUpScreen />
            },
            {
                path: '/update/:sid',
                loader: ({ params }) => fetch(`https://task-backend-001.vercel.app/user/${params.sid}`),
                element: <PrivateRoutes><UpdateScreen /></PrivateRoutes>
            },
            {
                path: '/details/:sid',
                loader: ({ params }) => fetch(`https://task-backend-001.vercel.app/user/${params.sid}`),
                element: <PrivateRoutes><ViewDetailsScreen /></PrivateRoutes>
            }
        ]
    }
])

export default route; 