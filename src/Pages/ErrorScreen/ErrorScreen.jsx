import { Link } from "react-router-dom"


const ErrorScreen = () => {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center">
        <h1 className=" text-4xl text-red-400">Route Not Found !!!</h1>
        <Link to={'/'}><button className="btn btn-primary mt-5">Back to Homepage</button></Link>
    </div>
  )
}

export default ErrorScreen