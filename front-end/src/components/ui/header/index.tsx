import Link from "next/link";
import styles from "./styles.module.scss";
import { AuthContext } from "@/pages/contexts/AuthContext";
import { useContext } from "react";

import { FiLogOut } from "react-icons/fi";

export function Header() {

const {singOut} = useContext(AuthContext)


  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <Link href="/dashboard">
        <img src="/logo.png" width={70} height={70} alt="Logo Pizzaria" />
      </Link>
      

      <nav className={styles.menuNav}>
        <Link href="/category" legacyBehavior>
          <a>Categoria</a>
        </Link>
        <Link href="/product" legacyBehavior>
          <a>Cardapio</a>
        </Link>
        <button onClick={singOut}>
          <FiLogOut color="#FFF" size={24} />
        </button>
      </nav>
      </div>
    </header>
  );
}
