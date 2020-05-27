import React from 'react'
import { css } from '@emotion/core'

type Props = { title?: string; children?: React.ReactNode }

const Wrapper = ({ children, title }: Props) => {
  return (
    <>
      <h1
        css={css`
          text-align: center;
          margin-top: 18px;
        `}
      >
        {title}
      </h1>
      <div
        css={css`
          padding: 12px 36px 36px 36px;
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
