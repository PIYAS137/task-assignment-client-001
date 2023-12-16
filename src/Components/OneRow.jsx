import { Link } from "react-router-dom"
import useAxiosHook from "../Hooks/useAxiosHook";
import Swal from "sweetalert2";


const OneRow = ({ data , refetch }) => {

    const myHook = useAxiosHook();


    const handleDelete = (sid) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                myHook.delete(`/user/${sid}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }


    return (
        <tr>
            <td className=" ">
                <div className="flex justify-center">
                    <p>{data.name}</p>
                </div>
            </td>
            <td className="">
                <div className="flex justify-center">
                    <p>{data.email}</p>
                </div>
            </td>
            <td className=" text-center "> {data.phone}</td>
            <th className=" space-x-3  text-center">
                <Link to={`/details/${data._id}`}><button className="btn bg-purple-400 border-none text-white btn-sm">Details</button></Link>
                <Link to={`/update/${data._id}`}><button className="btn bg-blue-400 border-none text-white btn-sm">Edit</button></Link>
                <button onClick={() => handleDelete(data._id)} className="btn bg-red-400 border-none text-white btn-sm">Delete</button>
            </th>
        </tr>
    )
}

export default OneRow