import React, { useState } from 'react';
import '../Style/LandingPage.css';

export default function LandingPage() {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="logo">Mi Página Formal</h1>
        <div className="header-buttons">
          <button onClick={() => setActiveModal('registro')} className="btn btn-register">
            Registro
          </button>
          <button onClick={() => setActiveModal('acceso')} className="btn btn-login">
            Acceso
          </button>
        </div>
      </header>

      <main className="main-content">
        <img src="https://via.placeholder.com/400x300" alt="Imagen Central" className="main-image" />
      </main>

      <footer className="page-footer">Diseñado por Roy Calderon Ramirez</footer>

      {activeModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-button" onClick={closeModal}>✕</button>
            <h2 className="modal-title">{activeModal}</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Usuario</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input type="password" />
              </div>
              {activeModal === 'registro' && (
                <div className="form-group">
                  <label>Correo Electrónico</label>
                  <input type="email" />
                </div>
              )}
              <button type="submit" className="btn-submit">
                {activeModal === 'registro' ? 'Registrar' : 'Ingresar'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}