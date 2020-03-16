import { css, jsx } from '@emotion/core'

type Props = { title?: string; children?: React.ReactNode }

const Wrapper = ({ children }: Props) => {
  return (
    <div
      css={css`
        padding: 36px;
        display: flex;
        justify-content: center;
      `}
    >
      {children}
    </div>
  )
}

export default Wrapper
