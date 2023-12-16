import { useEffect, useState } from "react";
import OneRow from "../../Components/OneRow";
import useGetAllUser from "../../Hooks/useGetAllUser"

const DashboardScreen = () => {

  const [userArray, refetch] = useGetAllUser()
  const [datas, setDatas] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false)
  const [sText, setStext] = useState('')
  const [reverseSatus, setReverseStatus] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

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
  }

  const handleReverse = () => {
    setReverseStatus(!reverseSatus)
    const temp = [...datas].reverse();
    setDatas(temp);
  }

  const handleSubmitUser = (e) => {
    e.preventDefault()
    const newUser = {
      name, email, phone
    }
    console.log(newUser);
  }


  return (
    <>

      <div className=" mt-5 flex justify-between container mx-auto">
        <div className="flex space-x-2">
          <input onChange={e => setStext(e.target.value)} type="search" placeholder="Search by name" className="input input-bordered w-full max-w-xs" />
          {searchStatus && <button onClick={handleClickReset} className="btn btn-error">Reset</button>}
          <button onClick={handleClickSearch} className="btn btn-primary">Search</button>
          {reverseSatus ?
            <button onClick={handleReverse} className="btn btn-secondary">Z-A</button>
            :
            <button onClick={handleReverse} className="btn btn-secondary">A-Z</button>
          }
        </div>
        <button onClick={() => document.getElementById('my_modal_1').showModal()} className=" border-none right-3 top-3 btn bg-purple-600 text-sm text-white"> + Add User</button>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div hidden>
          <form onSubmit={handleSubmitUser} method="dialog">
            <label className="block text-sm font-bold mt-2">Name</label>
            <input onChange={e => setName(e.target.value)} type="text" placeholder="Enter Name" className="input input-bordered w-full " />
            <label className="block text-sm font-bold mt-2">Email</label>
            <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter Email" className="input input-bordered w-full " />
            <label className="block text-sm font-bold mt-2">Phone</label>
            <input onChange={e => setPhone(e.target.value)} type="text" placeholder="Enter Phone" className="input input-bordered w-full " />
            <div className=" py-2 text-center">
              {/* <button className="btn btn-success text-white mr-2">Save</button> */}
              <button className="btn">Close</button>
            </div>
          </form>
        </div>


      </div>

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