import styled from 'styled-components';

export const Calculator = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 7.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: -1px;
  margin-right: 40px;
  text-align: left;

  span.yellow {
    color: #c5a825;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px rgba(79, 172, 254, 0.4);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px rgba(79, 172, 254, 0.4);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const Results = styled.div`
  margin-top: 3rem;
  text-align: left;

  h2 {
    font-size: 1.4rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    margin: 0.5rem 0;
    color: #666;
  }
`;

export const ChartWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 2rem;
  position: relative;
  margin: 2rem auto;
`;
