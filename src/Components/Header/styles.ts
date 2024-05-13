import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${Cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-itens: center;
  justify-content: space-between;

  a {
    color: ${Cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-itens: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
  list-style: none;
`

export const LinkCart = styled.a`
  text-decoration: none;
  display: flex;
  width: 100%;
  margin-left: 420px;

  img {
    margin-left: 16px;
    align-itens: center;
  }
`
