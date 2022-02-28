import { connect } from "react-redux";
import Slider1 from "../components/Slider1";

interface IownProps{
    img1:string,
    img2:string,
    img3:string
}

export const SliderContainer:React.ComponentType<IownProps>=connect()(Slider1)