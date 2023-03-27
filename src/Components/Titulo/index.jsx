import React from 'react';
import  styled from 'styled-components';
import { corBranco, corPreto } from '../../variaveis';

const Titu = styled.title`
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-family: 'Proppis';
    background-color: ${corPreto};
    color: ${corBranco};
`;

const Titulo = ()=> {
  return (
    <Titu>Calculadora</Titu>
  )
}


export default Titulo;
