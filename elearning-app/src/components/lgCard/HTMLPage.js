import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const HTMLPage = () => {
  const codeString = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
  </html>
  `;
  return (
    <div>
      <h2>HTML Example</h2>
      <SyntaxHighlighter language="html" style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default HTMLPage;
