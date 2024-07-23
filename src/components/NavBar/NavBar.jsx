import logo from '../../assets/logo.svg'
import './NavBar.css'
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
    return(
        <div className="nav-container">
            <img src={logo} alt={"alt logo"}/>
            <div className={"language"}>
                <TbWorld fontSize={32}/>
                EN
                <IoIosArrowDown fontSize={18}/>
            </div>
        </div>
    )
}

export default NavBar;
