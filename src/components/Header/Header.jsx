import { Link } from "react-router-dom";
import * as S from "./styled"
import linkedin from "../../assets/link.png"
import git from "../../assets/git.png"
import face from "../../assets/face.png"
import eu from "../../assets/eu.png"

export default function Header() {
  return (
    <S.Header>
      <S.BoxLogo>
        <img src={eu} alt="" />
        <S.Title>Enrico Bergmann</S.Title>
        <S.Text>Front-end Developer</S.Text>
      </S.BoxLogo>
        <S.BoxMenu>
            <ul>
                <S.Lista><Link to="/">Inicio</Link></S.Lista>
                <S.Lista><Link to="/sobre">Sobre mim</Link></S.Lista>
                <S.Lista><Link to="/projeto">Projetos</Link></S.Lista>
            </ul>
        </S.BoxMenu>

        <S.BoxIcon>
          <a href="https://www.linkedin.com/in/enrico-bergmann-cassel-393496222/"><img src={linkedin} alt="" /></a>
          <a href="https://github.com/Enrico-Bergmann"><img src={git} alt="" /></a>
          <a href="https://www.facebook.com/enricocassel?mibextid=ZbWKwL"><img src={face} alt="" /></a>
        </S.BoxIcon>

    </S.Header>
  )
}
