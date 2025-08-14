import Link from "next/link";
import "../styles/header.css";
import iconCart from "../assets/cart.svg";

export const Header = () => {
  return (
    <header className="header">
      <h3 className="title-header">FastStock</h3>
      <nav className="nav-header">
        <Link href="/" className="link-nav">
          Home
        </Link>
        <Link href="/cart" className="link-nav link-cart">
          Cart
          <img src={iconCart.src} loading="lazy" alt="cart icon" width={20} height={20} />
        </Link>
      </nav>
    </header>
  );
};
