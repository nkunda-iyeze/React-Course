import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "react-query";
import  Axios  from "axios";
const Home = () => {
    const {
        data:catData,
        isLoading,
        isError,
        refetch} = useQuery([""], () => {
        return Axios.get("https://catfact.ninja/fact").then((result) => result.data);
    });
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