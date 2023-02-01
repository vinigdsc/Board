import Link from "next/link";
import styles from "./styles.module.scss";
import { SignInButton } from "../SignInButton";

import Image from "next/image";
import logo from "../../../public/images/logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link legacyBehavior href="/">
          <a>
            <Image src={logo} alt="Logo Meu Board" />
          </a>
        </Link>
        <nav>
          <Link legacyBehavior href="/">
            <a href="">Home</a>
          </Link>
          <Link legacyBehavior href="/board">
            <a href="">Meu board</a>
          </Link>
        </nav>

        <SignInButton></SignInButton>
      </div>
    </header>
  );
}
