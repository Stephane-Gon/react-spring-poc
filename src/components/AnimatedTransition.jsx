import { styled } from 'styled-components'
import { useTransition, animated, config } from '@react-spring/web'
import { useState, useEffect } from 'react'

const AnimatedTransition = () => {
  const [items, setItems] = useState([1, 2, 3])
 
  const transitions = useTransition(items, {
    from: { x: -200 },
    enter: { x: 200 },
    leave: { x: -200 },
    trail: 100,
    config: config.molasses,
    onRest: () => setItems([]),
  })

  useEffect(() => {
    if (items.length === 0) {
      setTimeout(() => {
        setItems([1, 2, 3])
      }, 2000)
    }
  }, [items])

  return (

    <Wrapper>
      <Title>Hook: useTransition</Title>
      {
        transitions(({x}, item) => (
          <AnimatedBox
            style={{
              transform: x.to(x => `translate3d(${x}px, 0 ,0)`)
            }}>
            {item}
          </AnimatedBox>
        ))
      }
    </Wrapper>
  )
}

export default AnimatedTransition


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