import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { Code2, Database, FileCode, Braces, Coffee, Globe, Menu, Home } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={20} />
      </button>

      <nav className="sidebar-nav">
        {/* Secțiunea MAIN */}
        <div className="sidebar-section">
          <h2 className="sidebar-title">{isOpen && 'Main'}</h2>
          <Link to="/main" className="sidebar-link">
            <Home size={18} /> {isOpen && 'Main Page'}
          </Link>
        </div>

        {/* Secțiunea LEARN */}
        <div className="sidebar-section">
          <h2 className="sidebar-title">{isOpen && 'Learn'}</h2>
          <Link to="/java" className="sidebar-link"><Coffee size={18} /> {isOpen && 'Java'}</Link>
          <Link to="/python" className="sidebar-link"><Braces size={18} /> {isOpen && 'Python'}</Link>
          <Link to="/cpp" className="sidebar-link"><Code2 size={18} /> {isOpen && 'C++'}</Link>
          <Link to="/js" className="sidebar-link"><FileCode size={18} /> {isOpen && 'JavaScript'}</Link>
          <Link to="/html" className="sidebar-link"><Globe size={18} /> {isOpen && 'HTML'}</Link>
          <Link to="/sql" className="sidebar-link"><Database size={18} /> {isOpen && 'SQL'}</Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
