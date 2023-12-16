import { useEffect, useState } from "react"
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import useAxiosHook from "../../Hooks/useAxiosHook"


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

const UpdateScreen = () => {
    const loaderData = useLoaderData()

    const myHook = useAxiosHook()
    const navigate = useNavigate()

    const [state, setState] = useState(loaderData?.state)
    const [name, setName] = useState(loaderData?.name)
    const [email, setEmail] = useState(loaderData?.email);
    const [phone, setPhone] = useState(loaderData?.phone)
    const [selectedCity, setSelectedCity] = useState(loaderData?.city)
    const [cities, setCities] = useState(stateArr.find(one => one.state === state)?.cities)
    const [gender, setGender] = useState(loaderData?.gender);
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

    useEffect(() => {
        if (loaderData?.hereFrom && loaderData.hereFrom.length > 0) {
            setCheckedValues(loaderData?.hereFrom);
        }
    }, [loaderData]);

    const handleGenderChange = (e) => {
        setGender(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name, email, phone, state, city: selectedCity, gender, hereFrom: checkedValues
        }
        myHook.put(`/user/${loaderData._id}`, newUser)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Successfully Updated User !`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    navigate('/')
                }
            })
    };



    return (
        <div>
            <form onSubmit={handleSubmit} className="card-body max-w-2xl bg-blue-200 mx-auto m-5 rounded-lg">
                <h1 className=" font-bold text-2xl text-center ">Edit User Info</h1>

                {/* ===================== Name Field==================== */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input onChange={e => setName(e.target.value)} defaultValue={name} required name="name" type="text" placeholder="enter your name" className="input input-bordered" required />
                </div>
                {/* ===================== Email Field==================== */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input onChange={e => setEmail(e.target.value)} defaultValue={email} required name="email" type="email" placeholder="enter your email" className="input input-bordered" required />
                </div>
                {/* ===================== Phone Field==================== */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Phone</span>
                    </label>
                    <input onChange={e => setPhone(e.target.value)} defaultValue={phone} required name="phone" type="text" placeholder="enter your phone number" className="input input-bordered" required />
                </div>



                {/* ===============================Gender Field============================ */}
                <div className="flex">
                    <label className="label">
                        <span className="label-text font-bold">Gender : </span>
                    </label>
                    <div className="form-control ">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Male</span>
                            <input required onChange={() => handleGenderChange("male")} checked={gender == "male" ? true : false} type="radio" name="radio-10" className="radio checked:bg-red-500" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-2">Female</span>
                            <input required onChange={() => handleGenderChange("female")} checked={gender == "female" ? true : false} type="radio" name="radio-10" className="radio checked:bg-blue-500" />
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
                                            <input checked={checkedValues.includes(one)} onChange={(e) => handleCheckboxChange(e, one)}
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
                    <select onChange={(e) => handleChange(e)} defaultValue={state} required className="select select-bordered w-full max-w-xs">
                        <option >Enter Your State</option>
                        {
                            stateArr?.map((one, i) => {
                                return (
                                    <option value={one.state} className=" text-black" key={i}>{one.state}</option>
                                )
                            })
                        }
                    </select>
                    <select onChange={e => setSelectedCity(e.target.value)} defaultValue={selectedCity} required className="select select-bordered w-full max-w-xs">
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

                <div className=" label">
                    <p className="label-text-alt link link-hover">Don't have an Account? <Link className="font-bold" to={'/signup'}>Create account</Link></p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update User</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateScreen