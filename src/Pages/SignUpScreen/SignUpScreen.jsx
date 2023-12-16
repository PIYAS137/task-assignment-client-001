import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/FirebaseContext"
import Swal from 'sweetalert2'
import useAxiosHook from '../../Hooks/useAxiosHook'

const arr = ["LinkedIn", "Friends", "Job Portal", "Others"]
const stateArr = [
  {
    state: 'Maharashtra',
    cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik']
  },
  {
    state: 'Karnataka',
    cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore']
  },
  {
    state: 'Tamil Nadu',
    cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli']
  }
]

const SignUpScreen = () => {

  const {
    FirebaseSignUpUser,
    FirebaseUpdateUser
  } = useContext(AuthContext)

  const myHook = useAxiosHook()
  const navigate = useNavigate()

  const [state, setState] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')
  const [phone, setPhone] = useState('')
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const [gender, setGender] = useState('');
  const [checkedValues, setCheckedValues] = useState([]);



  const handleChange = (e) => {
    const temp = stateArr.find(one => one.state == e.target.value);
    setState(temp.state)
    setCities(temp.cities);
  }

  const handleCheckboxChange = (e, value) => {
    if (e.target.checked) {
      setCheckedValues(prevValues => [...prevValues, value]);
    } else {
      setCheckedValues(prevValues => prevValues.filter(item => item !== value));
    }
  };

  const handleGenderChange = (e) => {
    setGender(e);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name, email, phone, state, city: selectedCity, gender, hereFrom: checkedValues
    }
    FirebaseSignUpUser(email, pass)
      .then(res => {
        if (res.user) {
          FirebaseUpdateUser(res.user, name, phone)
            .then(res => {
              myHook.post('/user', newUser)
                .then(res => {
                  if (res.data.insertedId) {
                    navigate('/')
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `Successfully Sign up user !`,
                      showConfirmButton: false,
                      timer: 2000
                    });
                  }
                })
            })
        }
      }).catch(err => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2000
        });
      })
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body max-w-2xl bg-red-200 mx-auto m-5 rounded-lg">
        <h1 className=" font-bold text-2xl text-center ">Signup User</h1>

        {/* ===================== Name Field==================== */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input onChange={e => setName(e.target.value)} required name="name" type="text" placeholder="enter your name" className="input input-bordered" required />
        </div>
        {/* ===================== Email Field==================== */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input onChange={e => setEmail(e.target.value)} required name="email" type="email" placeholder="enter your email" className="input input-bordered" required />
        </div>
        {/* ===================== Phone Field==================== */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Phone</span>
          </label>
          <input onChange={e => setPhone(e.target.value)} required name="phone" type="text" placeholder="enter your phone number" className="input input-bordered" required />
        </div>



        {/* ===============================Gender Field============================ */}
        <div className="flex">
          <label className="label">
            <span className="label-text font-bold">Gender : </span>
          </label>
          <div className="form-control ">
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Male</span>
              <input required onChange={() => handleGenderChange("male")} type="radio" name="radio-10" className="radio checked:bg-red-500" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text mr-2">Female</span>
              <input required onChange={() => handleGenderChange("female")} type="radio" name="radio-10" className="radio checked:bg-blue-500" />
            </label>
          </div>
        </div>

        {/* ===============================hear about============================ */}
        <div>
          <span className="label-text mr-2 font-bold">How did you hear about this?</span>
          <div className=" grid grid-cols-2 md:grid-cols-4">
            {
              arr.map((one, i) => {
                return (
                  <div key={i} className="form-control">
                    <label className="cursor-pointer label">
                      <input onChange={(e) => handleCheckboxChange(e, one)}
                        type="checkbox" className="checkbox checkbox-success mr-2" />
                      <span className="label-text float-left block w-full">{one}</span>
                    </label>
                  </div>
                )
              })
            }

          </div>
        </div>

        {/* ===============================Area============================ */}
        <div className=" w-full flex  justify-between">
          <select onChange={(e) => handleChange(e)} required className="select select-bordered w-full max-w-xs">
            <option >Enter Your State</option>
            {
              stateArr?.map((one, i) => {
                return (
                  <option value={one.state} className=" text-black" key={i}>{one.state}</option>
                )
              })
            }
          </select>
          <select onChange={e => setSelectedCity(e.target.value)} required className="select select-bordered w-full max-w-xs">
            <option >Enter Your City</option>
            {
              cities?.map((one, i) => {
                return (
                  <option value={one} className=" text-black" key={i}>{one}</option>
                )
              })
            }
          </select>
        </div>

        {/* ===================== Password Field==================== */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input onChange={e => setPass(e.target.value)} required name="password" type="password" placeholder="enter your password" className="input input-bordered" required />
        </div>

        <div className=" label">
          <p className="label-text-alt link link-hover">Don't have an Account? <Link className="font-bold" to={'/signup'}>Create account</Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpScreen