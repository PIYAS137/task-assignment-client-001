import { useLoaderData } from "react-router-dom"


const ViewDetailsScreen = () => {

  const loaderData = useLoaderData()


  return (
    <div className="-mt-16 h-screen w-full justify-center items-center flex">
      <div className="w-full  max-w-lg bg-red-300 p-5 rounded-lg ">
        <p><strong>Name :</strong> {loaderData?.name}</p>
        <p><strong>Email :</strong> {loaderData?.email}</p>
        <p><strong>Gender :</strong> {loaderData?.gender}</p>
        <p><strong>Phone :</strong> {loaderData?.phone}</p>
        <p><strong>State :</strong> {loaderData?.state}</p>
        <p><strong>City :</strong> {loaderData?.city}</p>
        <p><strong>Here From :</strong> </p>
        <ul className="ml-5">
          {loaderData?.hereFrom?.map((one, i) => {
            return (
              <li key={i}>{i + 1}. {one}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ViewDetailsScreen