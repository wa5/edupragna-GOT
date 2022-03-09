
import CustomHooks from "./app/topcs/advanceReact/hooks/CustomHooks";
import HooksUseState from "./app/topcs/advanceReact/hooks/HooksUseState";
import PerfamanceOptimaizaion from "./app/topcs/advanceReact/PerfamanceOptimaizaion";
import ContainerWithChildrens from "./app/topcs/basicsReact/basicCopponent/ContainerWithChildrens";
import ContainerWithComplexProperties from "./app/topcs/basicsReact/basicCopponent/ContainerWithComplexProperties";
import ContainerWithComplexPropertiesEvents from "./app/topcs/basicsReact/basicCopponent/ContainerWithComplexPropertiesEvents";
import Heding from "./app/topcs/basicsReact/basicCopponent/Heding";
import Card1 from "./domains/cards/component/Cards1";
import { CardsContainer } from "./domains/cards/container/CardsContainer";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (<>
  <Router>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element={ <AboutPage/>}/>
    </Routes>
  </Router>

  
  </>

  );
}

export default App;
