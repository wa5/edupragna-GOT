import styled from "styled-components";

const BaicDiv: React.FC = () => {
  const mystyle = { backgroundColor: "green", width: "200px", height: "200px" };
  const MyDiv = styled.div`
    background-color: yellow;
    width: 200px;
    height: 200px;
  `;
  interface IMyDiv2{
    primary?:boolean
    abc?:number
  }
  const MyDiv2 = styled(MyDiv)<IMyDiv2>`
    background-color: ${(props:any)=>{return props.primary?'yellow':"red"}};
    
  `;
  return (
    <>
      <div style={mystyle}></div>
      <MyDiv>dfghjkl</MyDiv>
      <MyDiv2  ></MyDiv2>
    </>
  );
};

export default BaicDiv;
