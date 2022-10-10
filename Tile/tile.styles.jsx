import styled, { css } from "styled-components";
import { colors } from '../../rowz.plugin'

const { baseColor,secondaryColor } = colors

export const TilePlate = styled.main`

    position: relative;
    height: 42px;
    width: 42px;
    margin: none;
    
`

const displayOpac = css`
    opacity: .4;
    transition: visibility 0s .25s, opacity .25s linear;
`

const hideOpac = css`
    opacity: 1;
    transition: visibility 0s .25s, opacity .25s linear;
`
const tileColor = (color) => {
    return (color ? `black` : 'white')
}
export const TileStyles = styled.div`
    position: relative;
    height: 40px;
    width: 40px;
    background-color: coral;
    background-color:${({color}) => (color === -1 ? `${secondaryColor}` : `${baseColor}`)};
    ${({color}) => tileColor(color === -1)}
    margin: 1px;
    ${({activeLocation}) => (!activeLocation[1] ? hideOpac : displayOpac) }
`