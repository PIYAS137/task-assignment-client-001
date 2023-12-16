import { Link } from "react-router-dom"


const OneRow = ({ data }) => {


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
                <button className="btn bg-red-400 border-none text-white btn-sm">Delete</button>
            </th>
        </tr>
    )
}

export default OneRow