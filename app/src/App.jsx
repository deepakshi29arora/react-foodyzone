import { useEffect } from "react";
import { useState } from "react";
import Cards from "./components/Cards.jsx"
import styled from "styled-components";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data,setData]=useState(null);//data array to store all backend info 
  const [filterData,setfilterData]=useState(null);//

  useEffect(()=>{
const fetchData = async () =>
{
  const response = await fetch (BASE_URL);
  const res = await response.json();
  setData(res);
  setfilterData(res);

}
fetchData();
  
 },[])

 const handleChange=(e)=>
 {
  const searchValue=e.target.value;//whatever we'll type will come here in search bar
  console.log(searchValue);
 

 const filteredans = data ?. filter((eleinarray)=>//filter searched data in array

    eleinarray.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  setfilterData(filteredans);
 // console.log(filteredans);
};
 console.log(data);


  return <Container>
    <TopContainer>

    <div className="logo">
      <img src="./Foody Zone.png" alt="logo"></img>
    </div>
    <div className="search">
    <input onChange={handleChange} placeholder="Search Food"></input>
    </div>
    </TopContainer>
    <ContainerButton>
    <HeaderButtons>All</HeaderButtons>
    <HeaderButtons>Breakfast</HeaderButtons>
    <HeaderButtons>Lunch</HeaderButtons>
    <HeaderButtons>Dinner</HeaderButtons>
    </ContainerButton>
      
    <MiddleContainer>

    <Cards 
     props = {filterData} /> 
     /* send the filtered data to new page to render */
    </MiddleContainer>
    </Container>;
};

export default App;

const Container = styled.div`
  background-color: black;
  margin:0 auto;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding:20px;
`;
const ContainerButton = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom:20px;
  gap:15px;

`
export const HeaderButtons = styled.button`
 // display: flex;
  /* justify-content: center;
  gap : 20px; */
  background-color:red;
  color:white;
  height:30px;
  border-radius: 10px;
 // padding:6px 10px;
  //align-items: center;
`
// const MiddleContainerButton = styled.div`
//   display: flex;
  
// `;
const MiddleContainer = styled.div`
  background-image: url("./bg.png");
  background-size: cover; 
  background-color: black;
  height: 100vh;
  width: 100vw;
  overflow:scroll;
`;