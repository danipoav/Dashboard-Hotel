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
  svg {
    margin-right: 20px;
    font-size: 1.5em;
    color: #135846;
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
