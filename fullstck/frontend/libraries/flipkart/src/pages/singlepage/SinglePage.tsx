import { Container } from "@mui/material";
import { SinglePageCardConatiner } from "../../domains/cards/container/SinglePageCardConatiner";
import { useParams } from "react-router-dom";
import { Cardsforsinglepage } from "../../domains/cards/component/Cardsforsinglepage";
const SinglePage:React.FC=()=>{
    const {id} = useParams();
    console.log("ooo",typeof parseInt(id!))
    return (<>
    
    <Container maxWidth="sm">
        <SinglePageCardConatiner id={parseInt(id!)}/>
        <br />
        <Cardsforsinglepage/>
    </Container>
    </>)
}

export default  SinglePage