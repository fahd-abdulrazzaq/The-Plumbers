import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';

const ToggLable = forwardRef(({ buttonLabel, children }, refs) => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(refs, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button
          onClick={toggleVisibility}
          className='bg-blue text-white p-2 rounded-md'
        >
          {buttonLabel}
        </button>
      </div>

      <div style={showWhenVisible}>
        {children}

        <button
          onClick={toggleVisibility}
          className='bg-blue text-white rounded-md p-2'
        >
          Cancel
        </button>
      </div>
    </div>
  );
});

export default ToggLable;
