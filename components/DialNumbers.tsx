import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const DigitFrame = styled.div`
  border-right: 1px solid #ccc;
  &:first-of-type {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  &:last-of-type {
    border-right: none;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

const DialNumbers: FunctionComponent<{ selectedNumber: number }> = () => (
  <div css={{
    width: '200px',
    height: '50px',
    display: 'inline-box',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid #ccc',
    borderRadius: '5px',
  }}>
    {[...new Array(4).keys()].map(value => {
      return <DigitFrame
        css={{
          boxSizing: 'border-box',
          pointerEvents: 'none',
          width: '50px',
          height: '50px',
          margin: 0,
          padding: 0,
          position: 'absolute',
          top: 0,
          left: `${50 * value}px`,
        }}
      >
      </DigitFrame>
    })}
    <input
      css={{
        color: '#505050',
        backgroundColor: '#e6e6e6',
        margin: 0,
        padding: 0,
        fontSize: '50px',
        fontFamily: 'monospace',
        display: 'inline-box',
        fontWeight: 500,
        letterSpacing: '.33em',
        appearance: 'none',
        height: '50px',
        width: '200px',
        border: 'none',
      }}
      type="number"
      pattern="\d"
    />
  </div>
);

export default DialNumbers;
