import { useEffect, useState } from "react";
import OneRow from "../../Components/OneRow";
import useGetAllUser from "../../Hooks/useGetAllUser"
import AddUser from "../../Components/AddUser";

const DashboardScreen = () => {

  const [userArray, refetch] = useGetAllUser()
  const [datas, setDatas] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false)
  const [sText, setStext] = useState('')
  const [reverseSatus, setReverseStatus] = useState(true)

  useEffect(() => {
    setDatas(userArray);
  }, [userArray]);

  const handleClickSearch = () => {
    setSearchStatus(true)
    const filteredData = userArray.filter(
      (one) =>
        one.name.toLowerCase().includes(sText.toLowerCase())
    );
    setDatas(filteredData);
  };

  const handleClickReset = () => {
    setSearchStatus(false)
    setDatas(userArray);
    setStext("");
    console.log("object");
  }

  const handleReverse = () => {
    setReverseStatus(!reverseSatus)
    const temp = [...datas].reverse();
    setDatas(temp);
  }

  return (
    <>
      <div className=" mt-5 flex justify-between container mx-auto">
        <div className="flex space-x-2">
          <input onChange={e => setStext(e.target.value)} value={sText} type="search" placeholder="Search by name" className="input input-bordered w-full max-w-xs" />
          {searchStatus && <button onClick={handleClickReset} className="btn btn-error">Reset</button>}
          <button onClick={handleClickSearch} className="btn btn-primary">Search</button>
          {reverseSatus ?
            <button onClick={handleReverse} className="btn btn-secondary">Z-A</button>
            :
            <button onClick={handleReverse} className="btn btn-secondary">A-Z</button>
          }
        </div>

        <AddUser refetch={refetch} />


      </div>

      <div className=" bg-red-100 container mx-auto mt-5 rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className=" bg-red-800 font-bold text-white ">
              <tr>
                <th className="  border-l-2 text-center">Name</th>
                <th className="  border-l-2 border-l-red-500 text-center">Email</th>
                <th className="  border-l-2 border-l-red-500 text-center">Phone</th>
                <th className="  border-l-2 border-l-red-500 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                datas.length === 0 && <p className= " text-red-500 text-2xl text-center w-full">No User Found !</p>
              }
              {
                datas?.map(one => <OneRow refetch={refetch} key={one._id} data={one} />)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default DashboardScreen