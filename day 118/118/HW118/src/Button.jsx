// Disable/Enable Button
import React, { useState } from 'react';

function DisableEnableButton() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Enable Button
      </label>
      <button disabled={!isChecked}>Click me</button>
    </div>
  );
}

export default DisableEnableButton;
