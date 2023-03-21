import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";
const ChangeProfile = () => {
    const {setUsername} = useContext(AppContext)
    const [newProfile, setNewprofile] = useState("");
    return (<div className="App">
        <input onChange={(event) => {
            setNewprofile(
                event.target.value
            );
        }} />
        <button onClick={() => {
            setUsername(newProfile);
            if (newProfile === "") {
                alert("Enter a valid name");
                // Reload the current page and force a reload from the server
                window.location.reload();
            }
        }}>Change profile</button>
    </div>);
};
export default ChangeProfile;