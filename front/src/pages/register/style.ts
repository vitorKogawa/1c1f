import styled from 'styled-components'

export const ContainerRegister = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #21315A;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap');
    font-family: 'Roboto', 'Arial', 'Helvetica', sans-serif;
    font-weight: bold;
    color: #ffffff;
    font-size: 20px;
    margin: 15px 0px;
`;

export const InputText = styled.input`
    border: none;
    padding: 15px 10px;
    border-radius: 5px;
    outline: none;
    font-size: 17px;
`;

export const RadioButtonPainel = styled.div`
    display: flex;
    flex-direction: column;


    div{
        display: flex;
        flex-direction: row;
        margin: 10px 0px;

        label {
            @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap');
            font-family: 'Roboto', 'Arial', 'Helvetica', sans-serif;
            color: #ffffff;
            margin: 0px 5px;
        }

        input{
            margin: 5px 0px;
            cursor: pointer;
        }
    }
`;

export const ButtonSubmit = styled.button`
    padding: 10px 5px;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    outline: none;
    width: 100px;
    background-color: #0099FF;
    margin: 10px 0px;
    cursor: pointer;
`;