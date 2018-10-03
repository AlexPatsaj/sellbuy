import React from "react";
import styles from '../../static/comp-styles/ui/Container.scss';

export default function Container({ children }) {
  return (
    <div className="sbp-container">
      {children}
    </div>
  )
}