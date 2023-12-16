import { Link } from "react-router-dom"


const LoginScreen = () => {
  return (
    <div className=" flex h-screen items-center -mt-16">
      <form className="card-body max-w-2xl bg-slate-300 mx-auto m-5 rounded-lg">
        <div className="form-control">
          <h1 className=" font-bold text-2xl text-center ">Login User</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p className="label-text-alt link link-hover">Don't have an Account? <Link className="font-bold" to={'/signup'}>Create account</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginScreen