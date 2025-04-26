import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import shuffle from 'lodash.shuffle';
import snippets from './codeSnippestsJava.js';
import '../../styles/JavaPage.css';

const CodeLine = React.memo(({ text, index, moveLine, isLocked }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "code",
    item: { index },
    canDrag: !isLocked,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [index, isLocked]);

  const [, drop] = useDrop({
    accept: "code",
    hover(item) {
      if (item.index !== index) {
        moveLine(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={drop} className="code-block" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <span ref={drag} className="drag-handle">☰</span> {/* Mâner pentru drag & drop */}
      {text}
    </div>
  );
});

const JavaPage = ({ selectedSnippetId = 1 }) => { 
  const selectedSnippet = snippets.find(snippet => snippet.id === selectedSnippetId) || snippets[0]; 
  const [codeLines, setCodeLines] = useState(selectedSnippet.lines);
  const [isLocked, setIsLocked] = useState(true);
  const [shuffled, setShuffled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Timer de 30 secunde

  useEffect(() => {
    if (!shuffled) {
      const timer = setTimeout(() => {
        setIsLocked(false);
        setCodeLines(shuffle([...selectedSnippet.lines])); 
        setShuffled(true);
      }, 30000); // După 30 secunde, blochează mutarea

      return () => clearTimeout(timer);
    }
  }, [shuffled, selectedSnippet]);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeLeft]);

  const moveLine = (dragIndex, hoverIndex) => {
    const newCodeLines = [...codeLines];
    const [movedLine] = newCodeLines.splice(dragIndex, 1);
    newCodeLines.splice(hoverIndex, 0, movedLine);
    setCodeLines(newCodeLines);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="java-page">
        <div className="timer">Timp rămas: {timeLeft} secunde</div>
        <div className="code-container">
          {codeLines.map((line, index) => (
            <CodeLine key={index} index={index} text={line} moveLine={moveLine} isLocked={isLocked} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default JavaPage;
