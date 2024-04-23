import styled from "styled-components";


export const Main = styled.main`
/*border: solid 2px red;*/
height: 100vh;
display: flex;
background-color:#004e75 ;
color: white;
@media (max-width: 500px) {
    flex-direction: column;
}
`

export const Container = styled.section`
    /*border: solid 2px green;*/
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        width: 50%;
    }
`