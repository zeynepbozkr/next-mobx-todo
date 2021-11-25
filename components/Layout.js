import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.heading}>TODO LİST</header>
      <main>{children}</main>
    </div>
  );
}
export default Layout;
