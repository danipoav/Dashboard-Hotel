import styled from 'styled-components';

export const NotificationBar = styled.div`
  width: calc(100% - 350px);  
  height: 100px;              
  padding: 15px;
  position: fixed;
  top: 0;
  left: 350px;              
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

export const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  width: 20%; 
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

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #FCFCFC;
  padding: 10px 10px;
  border-radius: 30px;
  width: 100%;
  
  input {
    background: transparent;
    border: none;
    outline: none;
    margin-left: 10px;
    width: 100%;
    font-size: 14px;
  }

  svg {
    cursor: pointer;
    color: #6E6E6E;
  }
`;

export const TitleTop = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  color: #262626;
  font: normal normal 600 28px/42px Poppins;
`;