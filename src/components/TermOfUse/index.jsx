import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

import { codes } from './codes'
import * as Styled from './styles'

const TermOfUse = () => {
  return <Styled.Container>
    <ReactMarkdown children={codes} remarkPlugins={[remarkGfm]} />,
  </Styled.Container>
}

export default TermOfUse;