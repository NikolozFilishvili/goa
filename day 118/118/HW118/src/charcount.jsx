// Character Counter
import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;
