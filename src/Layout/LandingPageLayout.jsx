import React from 'react';
import Navbar from '../Components/Navbar';

const LandingPageLayout = ({ children, onSearchChange }) => {
  return (
    <div>
      <Navbar onSearchChange={onSearchChange} />
      <div className='bg-dark min-vh-100'>
        {children}
      </div>
    </div>
  );
};

export default LandingPageLayout;