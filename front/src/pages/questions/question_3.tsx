import React from 'react'
import { ContainerQuestion, ImgEarth, LabelQuestion, Option, OptionsPainel } from './style'

const Question_3: React.FC = () =>{
    return(
        <ContainerQuestion>
            <ImgEarth src="https://media.giphy.com/media/RiEnaT1YaCaHaszy9m/giphy.gif" alt="gif_earth"/>
            <LabelQuestion>Qual a sua média de consumo de carne?</LabelQuestion>
            <OptionsPainel>
                <Option color="#5CBA47">
                    <label>Nunca ou as vezes</label>
                </Option>
                <Option color="#BF0413">
                    <label>Diariamente ou quase sempre</label>
                </Option>
            </OptionsPainel>
        </ContainerQuestion>
    )
}

export default Question_3