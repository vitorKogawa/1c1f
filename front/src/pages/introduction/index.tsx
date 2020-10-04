import React from 'react'
import GifEarth1 from '../../components/Gif_earth_1'

//importanto os estilos da página
import { ContainerIntroduction, Text, Button } from './style'
import { FaCaretRight } from 'react-icons/fa'

const Introduction: React.FC = () => {

    const handleClickButton = () => {
        window.location.href="/introduction_pt2"
    }

    return(
        <ContainerIntroduction color="#3D3D33">
            <GifEarth1/>
            <Text>
            Nos últimos tempos o mundo começou a se importar mais com a manutenção da vida na Terra, projetando o futuro da humanidade.<br/>
            As ações empregadas para que isto fosse possível gerou grandes movimentos e mudanças, porém ainda hoje há poucas pessoas que empregam estes conceitos em seu cotidiano.<br/>
            Hoje você terá a oportunidade de participar da mudança e fazer parte da história do futuro do planeta.<br/>
            </Text>
            <Button onClick={()=>{ window.location.href="/introduction_pt2" }}>
                <FaCaretRight/>
            </Button>
        </ContainerIntroduction>
    )
}

export default Introduction