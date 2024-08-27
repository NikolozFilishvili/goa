// Change Background Color
import React, { useState } from 'react';

function ChangeColor() {
  const [color, setColor] = useState('#ffffff');

  return (
    <div style={{ backgroundColor: color, padding: '20px' }}>
      <button
        onClick={() =>
          setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
        }
      >
        Change Background Color
      </button>
    </div>
  );
}

export default ChangeColor;
