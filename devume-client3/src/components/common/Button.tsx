import styles from './Button.module.css'
import React, {ReactNode} from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon?: ReactNode;
}

export default function Button({name, icon, className, ...rest}: ButtonProps) {
  return (
      <button
          className={`${styles.button} ${className || ''}`}
          {...rest}
      >
        {icon && <span className={styles.iconWrapper}>{icon}</span>}
        {name}
      </button>
  )
}
