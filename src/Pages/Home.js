import { useContext } from "react";
import { AppContext } from "../App";
import { useGetCat } from "../components/useGetCat";

const Home = () => {
    const { data: catData,
        isError,
        isLoading,
        refetchData:refetch
    } = useGetCat();
    const { userName } = useContext(AppContext);
    if (isError) {
        return (
            <h3>
                Sorry, there was an error
             
            </h3>
        )
    }
    if(isLoading){
        return (
            <h1>
                Is Loading .....
            </h1>
        );     
            }
    return (
        <div>
            <h1> This is the Home Page and your user name is {userName} </h1>
            
            <p> {catData?.fact} </p>
            <button onClick={refetch}> refetch</button>
        </div>
    );
}

export default Home;