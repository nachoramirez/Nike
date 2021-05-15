import styled from 'styled-components'
import { Container, Button } from '../../containers/Containers.js'

export const CartContainer = styled(Container)`
  margin-bottom: 150px;
  flex-direction: column;
  justify-content: start;
  width: 50%;
`

export const CartButton = styled(Button)`
  font-size: 18px;
  margin: 18px 0 0 5px;
  width: 250px;
  height: 60px;
  &:hover{
    box-shadow: inset 250px 0 0 0 #4d2b8c;
  }
`
