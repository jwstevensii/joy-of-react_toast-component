import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ items, onRemoveToast }) {
  return (
    <ol className={styles.wrapper}>
      {
        items.map((toast) =>
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast variant={toast.variant} onClose={() => onRemoveToast(toast.id)}>{toast.message}</Toast>
          </li>
        )
      }
    </ol>
  );
}

export default ToastShelf;
