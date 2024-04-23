import Header from '../../components/Header/Header'
import * as S from "./styled"
import euInicio from "../../assets/euInicio.png"

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
        <S.BoxInicio>
          <div>
        <h1>Olá, me chamo Enrico sou Dev Front-end!</h1>
        <p>Sou um apaixonado por tecnologias e gosto de estar sempre aprendendo algo novo.</p>
        </div>
        <img src={euInicio} alt="" />
       </S.BoxInicio>
      </S.Container>
    </S.Main>
  )
}
