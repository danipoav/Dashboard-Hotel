import styled from 'styled-components';

export const NotificationBar = styled.div`
  width: calc(100% - 300px);  
  height: 100px;              
  padding: 15px;
  position: fixed;
  top: 0;
  left: 300px;              
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
  z-index: 1000; 
  padding: 1em 5em;
  padding-left: 2em;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  svg{
    color: #135846;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  svg{
    color: #000000;
    margin-right: 1em;
  }
`;


export const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  svg{
    cursor: pointer;
  }
`;


export const TitleTop = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  color: #262626;
`;