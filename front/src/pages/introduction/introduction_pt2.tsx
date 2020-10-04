import React from 'react'
import GifEarth1 from '../../components/Gif_earth_1'

//importando os estilos da página 
import { ContainerIntroduction, Button, Text }  from './style'

const Introduction_2:React.FC = () =>{
    return(
        <ContainerIntroduction color="#5CBA47">
            <GifEarth1/>
            <Text>
            Nesse jogo você responderá sobre a sua postura cotidiana, para entender como essas escolhas podem mudar o destino do planeta e das gerações futuras.<br/>
            Cada resposta levará a um final diferente do planeta.<br/>
            Você está preparado para resolver esse desafio?!<br/>
            </Text>
            <Button onClick={()=>{ window.location.href="/register" }}>
                Começar!
            </Button>
        </ContainerIntroduction>
    )
}

export default Introduction_2