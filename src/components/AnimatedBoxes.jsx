import { styled } from 'styled-components'
import { useSpring, config } from '@react-spring/web'
import { useState } from 'react'

import Box from './Box'

const AnimatedBoxes = () => {
  const [animated, setAnimated] = useState(false)

  const [spring1, api1] = useSpring(() => ({
    from: { x: -200 },
    config: {
      mass: 1,
      friction: 40,
      tension: 200,
    },
  }))

  const [spring2, api2] = useSpring(() => ({
    from: { x: -200 },
    config: config.wobbly,
  }))

  const [spring3, api3] = useSpring(() => ({
    from: { x: -200 },
    config: config.molasses,
  }))

  const handleClick = () => {
    api1.start({
      from: {
        x: animated ? 200 : -200,
      },
      to: {
        x: animated ? -200 : 200,
      },
    })

    api2.start({
      from: {
        x: animated ? 200 : -200,
      },
      to: {
        x: animated ? -200 : 200,
      },
    })

    api3.start({
      from: {
        x: animated ? 200 : -200,
      },
      to: {
        x: animated ? -200 : 200,
      },
    })

    setAnimated((prevState) => !prevState)
  }

  return (
    <Wrapper>
      <Title>Hook: useSpring</Title>
      <Box springs={spring1} />
      <Box springs={spring2} />
      <Box springs={spring3} />

      <Button onClick={handleClick}>Animate</Button>
    </Wrapper>
  )
}

export default AnimatedBoxes

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

const Button = styled.button`
  background-color: #6d6dff;
  padding: 5px 30px;
`   