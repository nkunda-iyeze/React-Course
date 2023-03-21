import { Link } from "react-router-dom";
import '../App.css';
const Navbar = () => {
    return (
        <div className="Link">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
       </div>
   ) 
}
export default Navbar;