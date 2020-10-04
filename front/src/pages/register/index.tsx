import React, { FormEvent } from 'react'
import { ContainerRegister, Form, Label, InputText,  RadioButtonPainel ,ButtonSubmit } from './style'

const Register: React.FC = () =>{
    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault()
    }

    return(
        <ContainerRegister>
            <img src="https://media.giphy.com/media/RiEnaT1YaCaHaszy9m/giphy.gif" />
            <Form onSubmit={handleSubmit}>
                <Label>Em qual cidade você e sua família moram?</Label>
                <InputText
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Digite aqui o nome da cidade..."
                />
                <Label>Quantos membros a família tem?</Label>
                <RadioButtonPainel>
                    <div>
                        <input 
                            type="radio"
                            name="register_option" 
                            id="2_3"
                        />
                        <label>2 a 3 pessoas</label>
                    </div>

                    <div>
                        <input 
                            type="radio"
                            name="register_option" 
                            id="4_5"
                        />
                        <label>4 a 5 pessoas</label>
                    </div>
                    <div>
                        <input 
                            type="radio"
                            name="register_option" 
                            id="6"
                        />
                        <label>6 pessoas ou mais</label>
                    </div>
                </RadioButtonPainel>
                <ButtonSubmit onClick={() =>{ window.location.href="/question_1" }} >Bora lá!</ButtonSubmit>
            </Form>
        </ContainerRegister>
    )
}

export default Register