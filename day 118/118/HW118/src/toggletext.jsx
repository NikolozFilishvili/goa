// Toggle Text
import React, { useState } from 'react';

function ToggleText() {
  const [text, setText] = useState('Hello');

  return (
    <div>
      <button onClick={() => setText(text === 'Hello' ? 'Goodbye' : 'Hello')}>
        Toggle Text
      </button>
      <p>{text}</p>
    </div>
  );
}

export default ToggleText;
