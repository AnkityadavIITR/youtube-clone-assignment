import React, { useState, useRef } from 'react';
import styled from "styled-components";


const Description = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleTransitionEnd = () => {
    if (expanded) {
      contentRef.current.style.transform = 'none';
    }
  };

  return (
    <Paragraph>
      <Content
        className={`content ${expanded ? 'expanded' : ''}`}
        ref={contentRef}
        onClick={toggleExpand}
        onTransitionEnd={handleTransitionEnd}
      >
        {text}
      </Content>
      {!expanded ? (
        <Show onClick={toggleExpand}>
          Show More
        </Show>
      ):
      <Show onClick={toggleExpand}>
          Hide
        </Show>
    }
    </Paragraph>
  );
};

const Paragraph=styled.div`
  padding: 10px 20px;
  position: absolute;
  z-index: 10;
  bottom: 45px;
  font-size: 14px;
  color: white;
  line-height: 18px;
`
const Show=styled.div`
  cursor: pointer;
  color: aliceblue;
  opacity: .7;
`
const Content = styled.div`
    width: 100%;
    white-space: pre-wrap;
    height: 35px;
    overflow: hidden;
  &.expanded {
    white-space: normal;
    overflow: auto;
    height: auto;
    transition: height 0.3s ease;
  }
`;


export default Description;
