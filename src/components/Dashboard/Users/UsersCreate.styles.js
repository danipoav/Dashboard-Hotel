import styled from "styled-components";

export const Container = styled.div`
    width: calc(100% - 300px);
    margin-top: 5.5em;
    margin-left: 300px;
    padding: 2em;
    margin-bottom: auto;
    background-color: #F8F8F8;
    min-height: calc(100vh - 5.5em);
`

export const Content = styled.div`
    width: 100%;
    background-color: white;
    padding: 1em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: calc(100vh - 10em);
`

export const Title = styled.h1`
    font-size: 1.5em;
    color: black;
    margin: 1em 0;
    margin-top: 0.5em;
`

export const CreateForm = styled.form`
    width: 40%;
    background-color: #F8F8F8;
    border-radius:20px;
    box-shadow: 0 0 15px rgb(0,0,0,0.2);
    padding: 20px;
`

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


export const Label = styled.label`
  font-size: 1em;
  color: #333;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 5px;

  &:focus {
    border-color: white;
    outline: none;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1em;
  width: 100%;
  width: 46%;
  margin: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;