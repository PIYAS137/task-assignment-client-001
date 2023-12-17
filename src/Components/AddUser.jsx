import { useState } from "react"
import useAxiosHook from "../Hooks/useAxiosHook"
import Swal from "sweetalert2"


const AddUser = ({ refetch }) => {
    const [modalStatus, setModalStatus] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const myHook = useAxiosHook()

    const handleSubmitUser = (e) => {
        const newUser = {
            name, email, phone
        }
        myHook.post('/add', newUser)
            .then(res => {
                if (res.data.message === "AA") {
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Email Is Already Added! ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                    setModalStatus(false)   
                    setEmail('');
                    setName('');
                    setPhone('');
                }
            })
    }



    return (
        <div>
            <button onClick={() => setModalStatus(true)} className=" border-none right-3 top-3 btn bg-purple-600 text-sm text-white"> + Add User</button>
            <div className={`${modalStatus ? "block" : "hidden"} absolute left-0 top-0 w-full bg-[#000000cf] h-full z-50 flex justify-center items-center`}>
                <form className="w-[500px]" method="dialog">
                    <h1 className=" text-2xl font-bold text-center text-white">Add User</h1>
                    <label className="block text-sm font-bold mt-2">Name</label>
                    <input onChange={e => setName(e.target.value)} value={name} name="name" required type="text" placeholder="Enter Name" className="input input-bordered w-full " />
                    <label className="block text-sm font-bold mt-2">Email</label>
                    <input onChange={e => setEmail(e.target.value)} value={email} required name="email" type="email" placeholder="Enter Email" className="input input-bordered w-full " />
                    <label className="block text-sm font-bold mt-2">Phone</label>
                    <input onChange={e => setPhone(e.target.value)} value={phone} required name="number" type="number" placeholder="Enter Phone" className="input input-bordered w-full " />
                    <div className=" py-2 text-center">
                        <button onClick={handleSubmitUser} className="btn btn-success text-white mr-2">Save</button>
                        <button onClick={() => setModalStatus(false)} className="btn">Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser