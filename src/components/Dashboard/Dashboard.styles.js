import styled from 'styled-components';

export const SlidebarContainer = styled.div`
width: 300px;
color: white;
padding: 40px;
height: 100vh;
padding-top: 1em;
position: fixed;
top: 0;
`;

export const MenuItem = styled.div`
display: flex;
align-items: center;
padding: 20px;
cursor: pointer;
color: #799283;

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
padding: 20px;
color: #799283;
margin-bottom: 2em;
width: 100%;
  div {
    margin-left: 30px;
  }
  svg{
    color: #135846;
  }
`;

export const Title = styled.h1`
font-size: 1.5em;
font-weight: bold;
margin: 0;
color: #212121;
`;

export const Subtitle = styled.p`
font-size: 0.7em;
color: #aaa;
margin: 0;
color: #5D5449;
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
