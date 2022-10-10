import styled from 'styled-components'
import { colors,size,menuStyling,openMenu } from '../../rowz.plugin'
const { baseColor } = colors
const { multiplier } = size

export const CheckerMenu = styled.header`
    ${openMenu}
    position:absolute;
    height: ${50 * multiplier}px;
    width: ${350 * multiplier}px;
    display:flex;
    justify-content:center;
    z-index:10;

    button {
        margin:5px;
    }
`

export const ConfirmNewGame = styled.div`
    ${menuStyling}

    background-color:${baseColor};
    z-index:100000;
    border-radius:2px;
    box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);

    button {
        z-index:1;
    }

    // position:absolute;
    // height:100px;
    // width:100px;
    // background-color:${baseColor};
    // z-index:100000;
    // border-radius:2px;
    // box-shadow:10px 5px 60px 10px rgba(36, 36, 36, 1);

    // button {
    //     z-index:1;
    // }
`