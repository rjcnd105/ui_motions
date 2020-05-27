import React from 'react'
import Wrapper from './Wrapper'
import { motion } from 'framer-motion'
import { css } from '@emotion/core'

type Props = {}

const Slider = ({}: Props) => {
  return (
    <Wrapper title="x Drag">
      <motion.div
        drag="x"
        dragConstraints={{ left: -300, right: 300 }}
        dragMomentum={false}
        css={css`
          background-color: cornflowerblue;
          width: 100px;
          height: 100px;
        `}
      />
    </Wrapper>
  )
}

export default Slider
