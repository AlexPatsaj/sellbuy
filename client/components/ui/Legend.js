import React from "react";
import styles from '../../static/comp-styles/ui/Legend.scss';

export default function Legend({ children }) {
  return (
    <h1 className="sbp-legend">
      {children}
      <style jsx>{styles}</style>
    </h1>
  )
}