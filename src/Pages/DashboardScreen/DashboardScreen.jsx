
const DashboardScreen = () => {
  return (
    <div className=" bg-red-100 container mx-auto mt-5 rounded-lg">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-red-800 font-bold text-white ">
            <tr>

              <th className=" text-center">Image</th>
              <th className="  border-l-2 border-l-red-500 text-center">Name</th>
              <th className="  border-l-2 border-l-red-500 text-center">Email</th>
              <th className="  border-l-2 border-l-red-500 text-center">Phone</th>
              <th className="  border-l-2 border-l-red-500 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            
            <tr>
            <td  className=" flex justify-center">
              <div className="avatar">
                <div className=" rounded-full object-center w-16 aspect-square">
                  <img src="https://i.pinimg.com/736x/55/2d/b9/552db9f573716a52524986d745d09522.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </td>
              <td className=" ">
                <div className="flex justify-center">
                  <p>Piyas Mahamude Alif</p>
                </div>
              </td>
              <td className="">
                <div className="flex justify-center">
                  <p>piyas@gmail.com</p>
                </div>
              </td>
              <td className=" text-center "> +8801321086103</td>
              <th className=" space-x-3  text-center">
                <button className="btn bg-purple-400 border-none text-white btn-sm">Details</button>
                <button className="btn bg-red-400 border-none text-white btn-sm">Delete</button>
                <button className="btn bg-blue-400 border-none text-white btn-sm">Edit</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}


        </table>
      </div>
    </div>
  )
}

export default DashboardScreen