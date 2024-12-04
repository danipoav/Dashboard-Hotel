import styled from "styled-components";

export const Contentainer = styled.div`
    width: calc(100% - 350px);
    margin-top: 5.5em;
    margin-left: 350px;
    padding: 2em;
    margin-bottom: auto;
    background-color: #F8F8F8;
    min-height: calc(100vh - 5.5em);
`

export const Content = styled.div`
    width: 100%;
    background-color: white;
    padding: 2em;
    padding-top: 1em;
    padding-bottom: 2.5em;
    border-radius: 20px;
`

export const Title = styled.h1`
    font-size: 1.5em;
    font-weight: bold;
    color: #393939;
    font: normal normal medium 20px/30px Poppins;
    padding: 10px;
    margin-bottom: 0.8em;
`

export const Display = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
`

export const ContainerText = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    padding: 2em 1.5em;
    border-radius: 20px;
    border: 1px solid #EBEBEB;

`
export const Text = styled.p`
    color: #4E4E4E;
    font: normal normal normal 16px/28px Poppins;
    font-size: 20px;
`

export const ContainerPerson = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2em;
    padding-bottom: 0;
    img{
        width: 20%;
        border-radius: 10px;
    }
`

export const ContainerName = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Name = styled.h3`
    margin: 0;
    font-size: 1em;
    color: #262626;
`;

export const Time = styled.p`
    margin: 0;
    font-size: 0.8em;
    color: #9E9E9E;
`;

export const Div = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`