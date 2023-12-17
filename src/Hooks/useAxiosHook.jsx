import axios from 'axios'


const myAxiosHook = axios.create({
    baseURL:'http://localhost:5022'
})

const useAxiosHook = () => {
  return myAxiosHook;
}

export default useAxiosHook