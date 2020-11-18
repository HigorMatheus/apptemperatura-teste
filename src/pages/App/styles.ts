import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  text-align: center;
  font-family: 'Big Shoulders Inline Display', cursive;
`;

export const Content = styled.div`
  display: block;
  /* flex: 1; */
  flex-direction: column;
  place-content: center;
  /* width: 600px; */
  margin: 0 auto;
  div {
    display: block;
    align-items: center;
    justify-content: center;
    max-width: 600px;

    h1 {
      color: #fff;
      padding: 8px;
    }
  }

  button {
    height: 50px;
    width: 75px;
    border-radius: 8px;
  }
`;

export const DadosLocatin = styled.div`
  display: flex;
  flex-direction: row;
  background-size: cover;
  div {
    display: flex;
    flex-direction: column;
    contain: content;
    width: 300px;
    div {
      margin: 3px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      span {
        font-size: 25px;
        padding: 4px;
      }
      strong {
        font-size: 22px;
      }
    }
  }
`;
