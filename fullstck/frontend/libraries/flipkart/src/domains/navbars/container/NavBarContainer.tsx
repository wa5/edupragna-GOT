import { connect } from "react-redux";
import Navbar1 from "../component/Navbar1";
interface IownProps{}


export const NavBarContainer:React.ComponentType<IownProps>=connect()(Navbar1)