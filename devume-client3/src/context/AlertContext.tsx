'use client'

import styles from './Alert.module.css'
import {createContext, ReactNode, useContext, useState} from "react";
import Button from "@/components/common/Button";

interface AlertButton {
  label: string;
  onClick: () => void;
  variant: 'confirm' | 'cancel';
}

interface AlertOptions {
  title: string;
  message: string;
  buttons: AlertButton[];
}

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  closeAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export default function AlertProvider({children}: { children: ReactNode }) {
  const [alertState, setAlertState] = useState<AlertOptions | null>(null)

  const showAlert = (options: AlertOptions) => {
    setAlertState(options)
  }

  const closeAlert = () => {
    setAlertState(null)
  }

  return (
      <AlertContext.Provider
          value={{showAlert, closeAlert}}
      >
        {children}
        {alertState && (
            <div className={styles.overlay}>
              <div className={styles.modal}>
                <div className={styles.title}>
                  {alertState.title}
                </div>
                <div className={styles.message}>
                  {alertState.message}
                </div>
                <div className={styles.actions}>
                  {alertState.buttons.map((btn, index) => (
                      <Button
                          className={styles.button}
                          name={btn.label}
                          key={index}
                          onClick={() => {
                            btn.onClick?.()
                            closeAlert()
                          }}/>
                  ))}
                </div>
              </div>
            </div>
        )}
      </AlertContext.Provider>
  )
}

export function useAlert() {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error('useAlert must be defined')
  }
  return context
}