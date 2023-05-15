/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { codes } from './codes';
import * as Styled from './styles';

const TermOfUse = () => {
  return (
    <Styled.Container>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{codes}</ReactMarkdown>
    </Styled.Container>
  );
};

export default TermOfUse;
