import { animated} from '@react-spring/web'
import { styled } from 'styled-components'

const Box = (props) => {
  const { springs } = props

  return (
    <AnimatedBox
      style={springs}
    />
  )
}

export default Box

const AnimatedBox = styled(animated.div)`
  width: 80px;
  aspect-ratio: 1;
  background: #ff6d6d;
  border-radius: 8px;
`