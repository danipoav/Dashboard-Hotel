import styled from 'styled-components';


export const SlidebarContainer = styled.div`
width: 300px;
color: white;
height: 100vh;
position: fixed;
top: 0;
`;

export const MenuItem = styled.div`
display: flex;
align-items: center;
padding: 20px;
padding-left: 15%;
cursor: pointer;
color: #799283;
font-family: "Poppins", sans-serif;
font-weight: 300;
color: ${({ isActive }) => (isActive ? 'red' : 'black')};
border-left: ${({ isActive }) => (isActive ? '4px solid red' : 'none')};
background-color: ${({ isActive }) => (isActive ? '#f9f9f9' : 'transparent')};

  svg {
    margin-right: 20px;
    font-size: 1.5em;
    color: ${({isActive}) => (isActive ? 'red' : '#135846')}
  }

  &:hover {
    background-color: #F8F8F8;
  }
`;

export const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
color: #799283;
margin-bottom: 1em;
width: 100%;
  div {
    margin-left: 30px;
  }
  svg{
    color: #135846;
  }
`;

export const NotificationBar = styled.div`
width: calc(100% - 350px);  
height: 100px;              
padding: 15px;
position: fixed;
top: 0;
left: 350px;              
display: flex;
align-items: center;
justify-content: center;
font-size: 1em;
border-bottom: 1px solid lightgray;
z-index: 1000;            
`;

export const UserContainer = styled.div`
  box-shadow: 0 0 15px rgb(0,0,0,0.2);
  border-radius: 20px;
  background-color: white;
  margin: 2em 3em;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2em 0;
  padding-bottom: 1em;

  img{
    width: 50%;
    margin-bottom: 0;
    align-self: center;
    border-radius: 1em;
    margin-bottom: 1em;
  }
`

export const Title = styled.h3`
font-size: 0.9em;
`

export const Email = styled.p`
font-size: 0.6em;
color: #B2B2B2;
`

export const ButtonEdit = styled.button`
all: unset;
padding: 5px 20px;
width: 50%;
align-self: center;
background-color: #EBF1EF;
color: #135846;
border-radius: 10px;
margin-top: 0.5em;
cursor: pointer;
`

export const Input = styled.input`
all: unset;
color: turquoise;
margin: 0 1em;
font-size: 0.8em;
border-radius: 10px;
box-shadow: 0 0 15px rgb(0,0,0,0.1);
`
