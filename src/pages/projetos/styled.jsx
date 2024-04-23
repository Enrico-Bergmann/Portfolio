import styled from "styled-components";


export const Main = styled.main`
/*border: solid 2px red;*/
height: 100vh;
display: flex;
background-color: #b0e0e6;
@media (max-width: 500px) {
    flex-direction: column;
}
`

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border: solid 2px yellow;
    
    img{
        width: 20vw;
        -webkit-box-shadow: 6px 15px 19px 12px rgba(0,0,101,0.81);
        -moz-box-shadow: 6px 15px 19px 12px rgba(0,0,101,0.81);
         box-shadow: 6px 15px 19px 12px rgba(0,0,101,0.81);
      }
      img:hover{
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
      } 
    
    /*div{
      border: solid 1px pink;
      display: flex; 
      justify-content: space-around;
      align-items: center;
      
    }*/
`