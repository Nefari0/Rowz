import styled from 'styled-components'
import { colors } from '../../rowz.plugin'
const { wheat } = colors

export const CheckerMenu = styled.header`
    position:absolute;
    height: 50px;
    width: 350px;
    top:-50px;
    display:flex;
    justify-content:center;
    z-index:10;

    button {
        margin:5px;
    }
`

export const ConfirmNewGame = styled.div`
    position:absolute;
    height:100px;
    width:100px;
    background-color:${wheat};
    z-index:100000;
    border-radius:2px;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);

    button {
        z-index:1;
    }
`