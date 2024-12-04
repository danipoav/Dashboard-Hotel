import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 350px);
    margin-top: 5.5em;
    margin-left: 350px;
    padding: 3em;
    padding-top: 2em;
    margin-bottom: auto;
    background-color: #F8F8F8;
    min-height: calc(100vh - 5.5em);
    text-align: -webkit-right;
`

export const Content = styled.div`
    width: 100%;
    background-color: white;
    padding: 1em;
    border-radius: 20px;
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
    text-align: center;
    img{
        width: 150px;
        border-radius: 10px;
    }
`

export const ContainerName = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 2.5em;
    width: 150px;
    text-align: left;
`

export const Name = styled.h3`
    margin: 0;
    font-size: 1em;
    color: #262626;
`;

export const ID = styled.p`
    margin: 0;
    font-size: 0.8em;
    color: #799283;
`;

export const Text = styled.p`
    color: #393939;
    margin-right: 2.5em;
    width: 150px;
    font-weight: normal;
`

export const Price = styled.p`
    color: #393939;
    margin-right: 2.5em;
    width: 100px;
    font-weight: bold;

    span{
        color: #799283;
        font-weight: normal;
        font-size: 12px;
    }
`

export const ButtonStatus = styled.button`
    border: none;
    background-color: ${({ status }) => (status === 'Booked' ? '#E23428' : '#5AD07A')};
    color:white ;
    padding: 10px 35px;
    outline: none;
    border-radius: 10px;
    width: 150px;
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
    cursor: pointer;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 8px;

    svg{
        margin-left: 8px;
    }
`

export const Ul = styled.ul`
    display: flex;
    padding: 23px;
    border-bottom: 1px solid black;
    padding-bottom: 1em;
    padding-top: 0.5em;
`

export const Li = styled.li`
    color: #393939;
    font-weight: bold;
    list-style: none;
    width: 100px;
    text-align: left;
    font-size: 1.5em;
`