import React from 'react';
import styled from 'styled-components';

const pickTag = (variant) => {
  switch(variant){
    case 'on-sale':
      return { text: 'Just Released!', color: 'hsla(240, 60%, 63%, 1)'}
    case 'new-release':
      return { text: 'Sale', color: 'hsla(340, 65%, 47%, 1)'}
    default:
      return { text: '', color: 'transparent'}
  }
}

const Tag = ({variant}) => {
  const { color, text } = pickTag(variant);
  return (
    <Wrapper style={{'backgroundColor': color}}>
      <Span>{text}</Span>
    </Wrapper>
  );
};

const Span = styled.span`
  background-color: var(--backgroundColor);
  font-family: Raleway;
  size: 14px;
  color: hsla(0, 0%, 100%, 1);
  font-weight: 700;
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 16px;
  right: -4px;
  width: fit-content;
  height: 36px;
  border-radius: 2px;
  padding: 7px 9px 9px 11px;
`;

export default Tag;