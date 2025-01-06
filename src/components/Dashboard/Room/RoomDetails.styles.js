import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 300px);
    margin-top: 5.5em;
    margin-left: 300px;
    padding: 3em;
    margin-bottom: auto;
    background-color: #F3F3F3;
    min-height: calc(100vh - 5.5em);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    color: #4a4a4a;
    border: 1px solid #e0e0e0;
`;

export const LeftSection = styled.div`
    flex: 1 1 50%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
`;

export const RightSection = styled.div`
    flex: 1 1 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fcfcfc;
`;

export const RoomImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    color: #2c2c2c;
    margin-bottom: 25px;
    text-align: left;
`;

export const RoomDetailsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        margin-bottom: 20px;
        font-size: 1.2rem;
        color: #555555;
        display: flex;
        align-items: center;

        strong {
            font-weight: 700;
            color: #333333;
            margin-right: 15px;
        }

        &:before {
            content: '\u2713';
            color: #58d68d;
            margin-right: 15px;
            font-size: 1.5rem;
        }
    }
`;

export const PriceTag = styled.div`
    font-size: 1.6rem;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    background-color: #333333;
    border-radius: 15px;
    padding: 15px;
    margin-top: 30px;
    width: fit-content;
    align-self: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;
