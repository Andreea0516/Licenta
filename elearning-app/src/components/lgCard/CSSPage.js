import React from 'react';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const CodeLine = ({ text, index }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "code",
    item: { index },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="code-block"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {text}
    </div>
  );
};

const CSSPage = () => {
  const codeLines = [
'body {',
  'background-color: #f4f4f4;'  ,
    'color: #333;',
    'font-family: `Arial`;',
  ' }'
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="code-container">
        {codeLines.map((line, index) => (
          <CodeLine key={index} index={index} text={line} />
        ))}
      </div>
    </DndProvider>
  );
};

export default CSSPage;
