import { useContext } from "react";
import { AppContext } from "../App";
const Home = () => {
    const {userName} = useContext(AppContext);
    return (
        <div>
            <h1> This is the Home Page and your user name is {userName} </h1>
        </div>
    );
}

export default Home;