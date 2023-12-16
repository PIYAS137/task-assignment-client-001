import OneRow from "../../Components/OneRow";
import useGetAllUser from "../../Hooks/useGetAllUser"

const DashboardScreen = () => {

  const [userArray, refetch] = useGetAllUser()


  return (
    <div className=" bg-red-100 container mx-auto mt-5 rounded-lg">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className=" bg-red-800 font-bold text-white ">
            <tr>
              <th className="  border-l-2 border-l-red-500 text-center">Name</th>
              <th className="  border-l-2 border-l-red-500 text-center">Email</th>
              <th className="  border-l-2 border-l-red-500 text-center">Phone</th>
              <th className="  border-l-2 border-l-red-500 text-center">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              userArray.map(one => <OneRow key={one._id} data={one} />)
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DashboardScreen