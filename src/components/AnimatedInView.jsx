import { styled } from 'styled-components'
import { useInView, animated } from '@react-spring/web'


const AnimatedInView = () => {

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -200,
      },
      to: {
        opacity: 1,
        x: 200,
        config: {
          tension: 200,
          mass: 1,
          friction: 12,
        },
        delay: 2000
      },
      
    }),
  )

  return (
    <Wrapper>
      <Title>Hook: useInView</Title>

      <AnimatedBox ref={ref} style={springs} />

    </Wrapper>
  )
}

export default AnimatedInView

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #222222;
  box-shadow: 1px 2px 2px 2px #00000028;
  padding-block: 20px;
  border-radius: 4px;
`

const Title = styled.h1`
  font-size: 2rem;
`

const AnimatedBox = styled(animated.div)`
  width: 80px;
  aspect-ratio: 1;
  background: #ff6d6d;
  border-radius: 8px;
`