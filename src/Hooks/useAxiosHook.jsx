import axios from 'axios'


const myAxiosHook = axios.create({
    baseURL:'https://task-backend-001.vercel.app'
})

const useAxiosHook = () => {
  return myAxiosHook;
}

export default useAxiosHook