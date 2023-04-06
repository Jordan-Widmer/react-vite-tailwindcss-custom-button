import React from "react";
import styles from "../style";

const ToggleButton = ({ isVisible, toggleVisibility }) => {
  return (
    <button
      id="toggle-button"
      onClick={toggleVisibility}
      className={styles.toggleButton}
    >
      Toggle Visibility
    </button>
  );
};

export default ToggleButton;
