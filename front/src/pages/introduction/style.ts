import styled from 'styled-components'

interface CONTAINER_INTRODUCTION {
    color: string
}

export const ContainerIntroduction = styled.div<CONTAINER_INTRODUCTION>`
    width: 100vw;
    height: 100vh;

    background-color: ${ props => props.color };
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Text = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap');
    width: 500px;

    font-family: 'Roboto', 'Arial', 'Helvetica', sans-serif;
    color: #ffffff;
    line-height: 35px;
    font-size: 25px;
    text-align: left;
`

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #0099FF;
    
    color: #ffffff;
    padding: 10px;

    display: flex;  
    justify-content: center;
    align-items: center;
    font-size: 20px;

    margin: 10px 20px;

    cursor: pointer;
    outline: none;
`