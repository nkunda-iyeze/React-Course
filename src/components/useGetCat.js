import { useQuery } from "react-query";
import  Axios  from "axios";
export const useGetCat = () => {
    const {
        data,
        isLoading,
        isError,
        refetch} = useQuery([""], () => {
        return Axios.get("https://catfact.ninja/fact").then((result) => result.data);
    });

    const refetchData = () => {
        alert("DATA REFETCHED");
        refetch();
    };
    return {data,isLoading,refetchData,isError}
}