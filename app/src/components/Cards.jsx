import React from 'react'
import styled from 'styled-components'
import { BASE_URL, HeaderButtons } from '../App'

const Cards = ({props}) => {
  return (
    <FoodContainer>
      {
    
      props?.map((ele)=>
        (
      <FoodCard key={ele.name}>
        <h3>{ele.name}</h3>
      <div className="food_image">
        <img src = {BASE_URL + ele.image}/>
      </div>
      <p>{ele.text}</p>
      <div></div>
      <HeaderButtons>${ele.price.toFixed(2)}</HeaderButtons>
      
      </FoodCard>
        )
      )
      }
    </FoodContainer>
  )
}

export default Cards
const FoodContainer=styled.div`
 color: white;
 display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 20px;
`
const FoodCard = styled.div`
  width: 370px;
  height: 167px;
  border: 0.66px solid;
  margin: 15px 8px;


  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_image {
    float: right;
    }
  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
   
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;