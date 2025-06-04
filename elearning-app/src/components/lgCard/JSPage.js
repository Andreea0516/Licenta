import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import shuffle from 'lodash.shuffle';
import snippets from './content/codeSnippetsJS.js';
import '../../styles/JSPage.css';

const CodeLine = ({ text, index, moveLine, isLocked, status }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'code',
    item: { index, text },
    canDrag: !isLocked,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [index, isLocked]);

  const [, drop] = useDrop({
    accept: 'code',
    hover(item) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveLine(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  return (
    <div
      ref={(node) => preview(drop(node))}
      className={`code-block ${status}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <span ref={drag} className="drag-handle">☰</span>
      {text}
    </div>
  );
};

const JSPage = ({ selectedSnippetId = 1 }) => {
  const [currentId, setCurrentId] = useState(selectedSnippetId);
  const [selectedSnippet, setSelectedSnippet] = useState(
    snippets.find((s) => s.id === selectedSnippetId) || snippets[0]
  );
  const [codeLines, setCodeLines] = useState(selectedSnippet.lines);
  const [isLocked, setIsLocked] = useState(true);
  const [lineStatus, setLineStatus] = useState([]);
  const [result, setResult] = useState('');
  const [viewTime, setViewTime] = useState(30);

  useEffect(() => {
    setCodeLines(selectedSnippet.lines);
    setIsLocked(true);
    setLineStatus([]);
    setResult('');
    setViewTime(30);

    const interval = setInterval(() => {
      setViewTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCodeLines(shuffle([...selectedSnippet.lines]));
          setIsLocked(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedSnippet]);

  const moveLine = (from, to) => {
    const updated = [...codeLines];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setCodeLines(updated);
    setLineStatus([]);
  };

  const handleSubmit = () => {
    const status = codeLines.map((line, index) =>
      line === selectedSnippet.lines[index] ? 'correct' : 'incorrect'
    );
    setLineStatus(status);

    const isCorrect = status.every((s) => s === 'correct');
    setResult(isCorrect ? 'CONGRATULATIONS! ✅' : 'TRY AGAIN! ❌');

    if (isCorrect) {
      setTimeout(() => {
        const availableIds = snippets.map((s) => s.id).filter((id) => id !== currentId);
        const newId = availableIds[Math.floor(Math.random() * availableIds.length)];
        const newSnippet = snippets.find((s) => s.id === newId);

        setCurrentId(newId);
        setSelectedSnippet(newSnippet);
        window.history.replaceState(null, '', `/js/${newId}`);
      }, 1000);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="js-page">
        {isLocked && (
          <div className="timer">Memorează codul: {viewTime} secunde</div>
        )}
        <div className="code-container">
          {codeLines.map((line, index) => (
            <CodeLine
              key={index + line}
              index={index}
              text={line}
              moveLine={moveLine}
              isLocked={isLocked}
              status={lineStatus[index] || ''}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="submit-button"
          disabled={isLocked}
        >
          Submit
        </button>
        {result && <div className="result-message">{result}</div>}
      </div>
    </DndProvider>
  );
};
  export default JSPage;