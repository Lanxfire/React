import React from 'react';
import styles from '../../styles/Layout.module.css'
import { MdErrorOutline } from 'react-icons/md';

const ErrorPage = ({ title = "Ocurrió un error", message = "Algo salió mal.", onRetry }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <MdErrorOutline size={64} color="#f39c12" style={{ marginBottom: '1rem' }} />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.message}>{message}</p>

        {onRetry ? (
          <button className={styles.button} onClick={onRetry}>
            Reintentar
          </button>
        ) : (
          <button className={styles.button} onClick={() => (window.location.href = '/')}>
            Ir al inicio
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;