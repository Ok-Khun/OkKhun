import Link from "next/link";
import styles from "../styles/Nav.module.css";

interface NavItemInterface {
  text: string;
  path: string;
}

const NavItem = ({ text, path }: NavItemInterface) => {
  return (
    <li className={styles.navItem}>
      <Link href={path}>
        <a>{text}</a>
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <ul className={styles.navBar}>
      {/* <NavItem text="Dowload CV" path="/download" /> */}
      <NavItem text="Contact" path="/contact" />
    </ul>
  );
};

const Nav = (props: any) => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/">
          <h2>Ok-Khun</h2>
        </Link>
      </div>
      <Navbar />
    </nav>
  );
};


export default Nav;
