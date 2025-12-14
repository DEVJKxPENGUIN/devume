import styles from './Button.module.css'
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export default function Button({name, className, ...rest}: ButtonProps) {
  return (
      <button
          className={`${styles.button} ${className} || ''`}
          {...rest}
      >{name}</button>
  )
}