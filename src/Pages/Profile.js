import ChangeProfile from "./ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";
export const Profile = () => {
    const { userName } = useContext(AppContext);
    return (
        <div>
            <h1>profile page userName: {userName}</h1>
            <ChangeProfile />
        </div>
    )
}
