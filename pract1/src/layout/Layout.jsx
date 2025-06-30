import { Outlet, NavLink } from "react-router-dom";
import '../styles/layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Inicio
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                Acerca de
              </NavLink>
            </li>
            <li className="menu-item has-submenu">
              <span className="menu-title">Productos</span>
              <ul className="submenu">
                <li>
                  <NavLink to="/products/electronics" className={({ isActive }) => isActive ? 'active' : ''}>
                    Electrónica
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products/clothes" className={({ isActive }) => isActive ? 'active' : ''}>
                    Ropa
                  </NavLink>
                </li>
              </ul>
            </li>
            <hr className="menu-divider" />
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

/*
const Landing = () => {
  return (
    <div>
      <CarouselBanner />
      <section style={{ padding: '2rem' }}>
        <h2>¿Por qué elegirnos?</h2>
        <p>Innovación, confianza y acceso 24/7 a tus servicios financieros.</p>
      </section>
    </div>
  );
};

*/