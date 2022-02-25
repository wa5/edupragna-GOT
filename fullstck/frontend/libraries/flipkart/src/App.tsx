import CustomHooks from "./app/topcs/advanceReact/hooks/CustomHooks";
import HooksUseState from "./app/topcs/advanceReact/hooks/HooksUseState";
import PerfamanceOptimaizaion from "./app/topcs/advanceReact/PerfamanceOptimaizaion";
import ContainerWithChildrens from "./app/topcs/basicsReact/basicCopponent/ContainerWithChildrens";
import ContainerWithComplexProperties from "./app/topcs/basicsReact/basicCopponent/ContainerWithComplexProperties";
import ContainerWithComplexPropertiesEvents from "./app/topcs/basicsReact/basicCopponent/ContainerWithComplexPropertiesEvents";
import Heding from "./app/topcs/basicsReact/basicCopponent/Heding";



function App() {
  return (<>
     <h1>hello123</h1>
     <Heding/>
     <PerfamanceOptimaizaion/>
<CustomHooks/>
     <HooksUseState/>
     < ContainerWithChildrens/>
     {/* <ContainerWithComplexProperties/> */}
     <ContainerWithComplexPropertiesEvents/>

  </>

  );
}

export default App;
