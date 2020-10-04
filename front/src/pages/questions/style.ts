import styled from 'styled-components'

interface OPTION {
    color: string
}

export const ContainerQuestion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
    background-color: #21315A;
`;

export const ImgEarth = styled.img`
    width: 360px;
    height: 300px;
`

export const LabelQuestion = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap');
    font-family: 'Roboto', 'Arial', 'Helvetica', sans-serif;
    font-size: 35px;
    color: #ffffff;
`

export const OptionsPainel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Option = styled.div<OPTION>`
    width: 200px;
    height: 200px;
    border: none;
    border-radius: 5px;
    /* background-color: #5CBA47; */
    background-color: ${props => props.color};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 50px 20px;
    transition-duration: 0.4s;

    label {
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap');
        font-family: 'Roboto', 'Arial', 'Helvetica', sans-serif;
        color: #ffffff;
        font-weight: bold;
        font-size: 25px;
        text-align: center;
    };

    &:hover{
        box-shadow: 5px 5px 5px #212121;
    }
`