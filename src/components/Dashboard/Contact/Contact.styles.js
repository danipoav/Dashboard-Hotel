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
    border-radius: 20px;
    text-align: start;
    padding: 0 1em;
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
    width: 150px;
    font-size: 0.8em;
`

export const ButtonNotes = styled.button`
    border: none;
    background-color: #EEF9F2;
    color: #212121;
    padding: 10px 35px;
    outline: none;
    border-radius: 10px;

`

export const ButtonRefund = styled.button`
    border: none;
    background-color: #FFEDEC;
    color:#E23428 ;
    padding: 10px 35px;
    outline: none;
    border-radius: 10px;
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

export const Tr = styled.tr`

`

export const Th = styled.th`
text-align:left;
padding: 20px;
border-bottom: 1px solid black;
`

export const Td = styled.td`
    padding:10px;
    border-bottom: 1px solid #9E9E9E;
    text-align: center;
`

export const TdGuest = styled.td`
display:flex;
border-bottom: 1px solid black;
padding: 10px;
img{
    border-radius: 20px;
    width: 40%;
}
`

export const Ul = styled.ul`
    list-style: none;
    text-align: left;
    display: flex;
    padding: 0;
    margin: 0;
    margin-bottom: 1em;
`

export const Li = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    color: ${({ isActive }) => (isActive ? '#135846' : '#C5C5C5')};
    border-bottom: ${({ isActive }) => (isActive ? '2px solid #135846' : '2px solid #C5C5C5')};
    transition: color 0.3s, border-bottom 0.3s;

    &:hover {
        color: ${({ isActive }) => (isActive ? '#135846' : '#6E6E6E')};
    }
`
