// MenuBar.js
import React, { useState } from 'react';
import CompanyInfo from './CompanyInfo';
import './Style.css';

function MenuBar({ onLogin }) {
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  const handleCompanyInfoClick = () => {
    setShowCompanyInfo(true);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={handleCompanyInfoClick}>Company Info</li>
        </ul>
      </nav>
      {showCompanyInfo && <CompanyInfo />}
    </div>
  );
}

export default MenuBar;
