import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 300px);
    margin-top: 5.5em;
    margin-left: 300px;
    padding: 3em;
    padding-top: 2em;
    margin-bottom: auto;
    background-color: #F8F8F8;
    min-height: calc(100vh - 5.5em);
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #fdfdfd;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    width: 450px;
    padding: 30px;
    font-family: 'Roboto', sans-serif;
    color: #333;
    border: 1px solid gray;
    background-clip: padding-box;
    position: relative;
    height: auto;
  
    &:hover {
      transform: translateY(-5px);
      transition: transform 0.3s ease-in-out;
    }
  `;

export const RoomImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin-bottom: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  `;

export const Title = styled.h2`
    font-size: 2rem;
    color: #1a202c;
    margin-bottom: 20px;
    text-align: center;
  `;

export const RoomDetailsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  
    li {
      margin-bottom: 15px;
      font-size: 1rem;
      color: #4a5568;
      display: flex;
      align-items: center;
  
      strong {
        font-weight: 600;
        color: #2d3748;
        margin-right: 10px;
      }
  
      &:before {
        content: '\u2713';
        color: #48bb78;
        margin-right: 10px;
      }
    }
  `;

export const PriceTag = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-top: 20px;
    width: 40%;
    border-radius: 10px;
    margin: auto;
    background-color: black;
    padding: 5px 10px;
    margin-top: 1em;
  `;
