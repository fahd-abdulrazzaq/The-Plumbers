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
    <div className='my-3'>
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

        <div
          className='bg-blue text-white rounded-md p-2 mt-5 text-center w-[50%] mx-auto'
          onClick={toggleVisibility}
        >
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
});

export default ToggLable;
