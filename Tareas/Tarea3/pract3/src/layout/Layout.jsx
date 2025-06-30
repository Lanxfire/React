import { Outlet, NavLink } from "react-router-dom";
import styles from '../styles/Layout.module.css'; // ✅ Importar módulo CSS
import { FaHome, FaInfoCircle, FaLaptop, FaTshirt, FaBars } from "react-icons/fa";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <nav>
          <ul className={styles.menu}>
            <li className={styles["menu-item"]}>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'active' : undefined}>
                <FaHome style={{ marginRight: '10px' }} />
                <strong>Inicio</strong>
              </NavLink>
            </li>

            <li className={styles["menu-item"]}>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? 'active' : undefined}
              >
                <FaInfoCircle style={{ marginRight: '10px' }} />
                <strong>Acerca de</strong>
              </NavLink>
            </li>

            <li className={`${styles["menu-item"]} ${styles["has-submenu"]}`}>
              <span className={styles["menu-title"]}>
                <FaBars style={{ marginRight: '10px' }} />
                <strong>Productos</strong>
              </span>
              <ul className={styles.submenu}>
                <li>
                  <NavLink
                    to="/products/electronics"
                    className={({ isActive }) => isActive ? 'active' : undefined}
                  >
                    <FaLaptop style={{ marginRight: '10px' }} />
                    Electrónica
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/clothes"
                    className={({ isActive }) => isActive ? 'active' : undefined}
                  >
                    <FaTshirt style={{ marginRight: '10px' }} />
                    Ropa
                  </NavLink>
                </li>
              </ul>
            </li>

            <hr className={styles["menu-divider"]} />
          </ul>
        </nav>
      </aside>

      <main className={styles["main-content"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
