import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/core'
import Wrapper from './Wrapper'

type Props = {}

const Drag = ({}: Props) => {
  return (
    <Wrapper title="꾹 눌러주세요">
      <motion.div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          width: 100px;
          height: 100px;
        `}
        whileTap={{ scale: 0.5 }}
      />
    </Wrapper>
  )
}
export default Drag
