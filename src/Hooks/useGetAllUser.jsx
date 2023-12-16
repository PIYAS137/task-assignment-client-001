import { useQuery } from '@tanstack/react-query';
import useAxiosHook from './useAxiosHook';


const useGetAllUser = () => {

    const myHook = useAxiosHook();


  const {data:userArray=[],refetch} = useQuery({
    queryKey: ['getUser'],
    queryFn : async()=>{
        const res = await myHook.get('/user');
        return res.data;
    }
  })
  return [userArray,refetch]
}

export default useGetAllUser