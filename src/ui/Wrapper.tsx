import React from 'react'
import { css } from '@emotion/core'

type Props = { title?: string; children?: React.ReactNode }

const Wrapper = ({ children, title }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <div
        css={css`
          padding: 36px;
          display: flex;
          justify-content: center;
        `}
      >
        {children}
      </div>
    </>
  )
}

export default Wrapper
