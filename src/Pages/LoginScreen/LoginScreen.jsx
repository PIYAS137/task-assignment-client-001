import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/FirebaseContext"
import Swal from "sweetalert2";


const LoginScreen = () => {

  const { FirebaseLoginUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate()


  const hanldeSubmitUser = (e) => {
    e.preventDefault()
    FirebaseLoginUser(email, pass)
      .then(res => {
        if (res.user) {
          navigate('/')
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Successfully Login user !`,
            showConfirmButton: false,
            timer: 2000
          });
        }
      })
  }


  return (
    <div className=" flex h-screen items-center -mt-16">
      <form onSubmit={hanldeSubmitUser} className="card-body max-w-2xl bg-slate-300 mx-auto m-5 rounded-lg">
        <div className="form-control">
          <h1 className=" font-bold text-2xl text-center ">Login User</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={e => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={e => setPass(e.target.value)} value={pass} type="password" placeholder="password" className="input input-bordered" required />
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