import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { corLaranja, corCinza, corPreto, corBranco } from '../../variaveis';
import Titulo from '../Titulo';

//style-components
const Btn = styled.button`
  width: 3em;
  height: 3em;
  font-size: 1.5em;
  border: none;
  border-radius: 1em;
  margin: 0.3em;
  cursor: pointer;
  background: ${(props) => props.primary ? corPreto : corCinza};
  color: ${(props)=>props.primary ? corBranco : corPreto};
`;

const BtnLateral = styled(Btn)`
  background: ${corLaranja};
  color: ${corBranco};
`;

const BtnUlt = styled(Btn)`
  width: 6.5em;

`;

const StyleWrapper = styled.div`
  background-color: black;
  border-radius: 1em;
  padding: 1em;
`;
const Resultado =styled.h2`
  color: ${corBranco};
  display: flex;
  justify-content: flex-end;
  margin-right: 0 0.2 0em;
  font-size: 90px;
`;



const Calculator = () => {

  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operador, setOperador] = useState();
  //setar o valor
  const inputNum = (e)=> {
      var input = e.target.value;
      if (num===0){
        setNum(input);
      }else {
        setNum(num + input);
      }
  }
  //limpar
  const clear = () => {
    setNum(0)
  }

  //porcentagem
  const porcentagem = () =>{
    setNum(num / 100);
  }

  //operador + e -

  const mudarSinal = () => {
    if(num>0){
      setNum(-num);
    }else {
      setNum(Math.abs(num));
    }
  }

  //operadorhandle
  const operadorHandle = (e)=> {
    var operadorInput = e.target.value;
    setOperador(operadorInput);
    setOldNum(num);
    setNum(0);

    // console.log(operador);
  }

  //Calcular
  const calcular = () =>{
    if (operador === '/'){
      setNum(parseFloat(oldNum) / parseFloat(num));
    }

    if (operador === 'X'){
      setNum(parseFloat(oldNum) * parseFloat(num));
    }

    if (operador === '-') {
      setNum(parseFloat(oldNum) - parseFloat(num));
    }

    if (operador === '+'){
      setNum(parseFloat(oldNum) + parseFloat(num));
    }


    // console.log("calculou");
    // console.log(oldNum);
    // console.log(num);
    // console.log(operador);
  }


  return (
    <div>
    <Titulo/>
    <Box mt={10}/>
      <Container maxWidth="xs">
        <StyleWrapper>
          <Resultado>{num}</Resultado>
          <Btn onClick={clear}>AC</Btn>
          <Btn onClick={mudarSinal}>+-</Btn>
          <Btn onClick={porcentagem}>%</Btn>
          <BtnLateral onClick={operadorHandle} value="/">/</BtnLateral>
          <Btn primary onClick={inputNum} value={7}>7</Btn>
          <Btn primary onClick={inputNum} value={8}>8</Btn>
          <Btn primary onClick={inputNum} value={9}>9</Btn>
          <BtnLateral onClick={operadorHandle} value="X">X</BtnLateral>
          <Btn primary onClick={inputNum} value={4}>4</Btn>
          <Btn primary onClick={inputNum} value={5}>5</Btn>
          <Btn primary onClick={inputNum} value={6}>6</Btn>
          <BtnLateral onClick={operadorHandle} value="-">-</BtnLateral>
          <Btn primary onClick={inputNum} value={1}>1</Btn>
          <Btn primary onClick={inputNum} value={2}>2</Btn>
          <Btn primary onClick={inputNum} value={3}>3</Btn>
          <BtnLateral onClick={operadorHandle} value="+">+</BtnLateral>
          <BtnUlt primary onClick={inputNum} value={0}>0</BtnUlt>
          <Btn primary onClick={inputNum} value={"."}>,</Btn>
          <BtnLateral onClick={calcular}>=</BtnLateral>
        </StyleWrapper>
      </Container>
    </div>
  );
}

export default Calculator;


