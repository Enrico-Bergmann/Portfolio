import * as S from "./styled"
import Header from '../../components/Header/Header'
import mc from "../../assets/mc.png"
import pv from "../../assets/pv.png"
import sc from "../../assets/sc.png"

export default function Projetos() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
       
        <a href="https://github.com/Enrico-Bergmann/mcDonalds"><img src={mc} alt="" /></a>
        <a href="https://github.com/Enrico-Bergmann/PrimeVideo"><img src={pv} alt="" /></a>
        <a href="https://github.com/Enrico-Bergmann/selfcare"><img src={sc} alt="" /></a>
        
      </S.Container>
    </S.Main>
  )
}
