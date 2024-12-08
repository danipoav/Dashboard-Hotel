import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 300px);
    margin-top: 5.5em;
    margin-left: 300px;
    padding: 2em;
    margin-bottom: auto;
    background-color: #F8F8F8;
    min-height: calc(100vh - 5.5em);
    text-align: end;
`

export const Content = styled.div`
    width: 100%;
    background-color: white;
    padding: 1em;
    border-radius: 20px;
    text-align: start;
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    justify-content: space-between;
`

export const CardGuest = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    img{
        width: 4%;
        border-radius: 10px;
    }
`

export const ContainerName = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 2.5em;
    width: 150px;
`

export const Name = styled.h3`
    margin: 0;
    font-size: 1em;
    color: #262626;
`;

export const ID = styled.p`
    margin: 0;
    font-size: 0.8em;
    color: #9E9E9E;
`;

export const Text = styled.p`
    color: #393939;
    margin-right: 2.5em;
    width: 150px;

`

export const ButtonNotes = styled.button`
    border: none;
    background-color: #EEF9F2;
    color: #212121;
    padding: 10px 35px;
    outline: none;
    border-radius: 10px;
    margin-right: 2.5em;

`

export const ButtonRefund = styled.button`
    border: none;
    background-color: #FFEDEC;
    color:#E23428 ;
    padding: 10px 35px;
    outline: none;
    border-radius: 10px;
    margin-right: 4em;
`

export const ButtonCreate = styled.button`
    border: none;
    background-color: #135846;
    color: white ;
    padding: 10px 35px;
    outline: none;
    border-radius: 10px;
    margin-bottom: 1em;
    margin-right: 1em;
    cursor: pointer;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: right;
    svg{
        margin-left: 8px;
    }
`
