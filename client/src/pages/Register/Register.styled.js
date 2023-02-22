import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 60%;
  max-width: 1020px;
  margin: auto;
  margin-top: 2rem;

  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const TextContent = styled.div`
  padding-left: 2rem;
  margin: 2rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  flex: 1;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  label {
    font-weight: 600;
    text-align: left;
    color: #a9a9a9;
  }

  input {
    height: 1.2rem;
    font-size: 1rem;
    border: none;
    border-bottom: 0.1rem solid #a9a9a9;
    outline: none;
  }
  input:focus {
    margin-top: 0.3rem;
    border-bottom: 2px solid #038aa1;
  }
  error-msg {
    color: red;
    font-weight: 600;
  }
`;
export const LoginButton = styled.button`
  width: 100%;
  margin-bottom: 2rem;
  font-weight: 600;
  padding: 0.8rem 1.2rem;
  color: white;
  border: none;
  background-color: #ab4747;
  cursor: pointer;
`;
