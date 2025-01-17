import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import heart from "../../assets/Heart.svg";
import userCicle from "../../assets/UserCircle.svg";
import shoppingCart from "../../assets/ShoppingCart.png";

export default function Header() {
  return (
    <nav>
      <a href="">
        <img src={logo} alt="Logo da empresa" />
        <div>
          <input type="text" placeholder="O que você está buscando?" />
        </div>
        <div>
          <ul>
            <li>
              <a href="">
                {" "}
                <img src={home} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src={heart} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src={userCicle} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <img src={shoppingCart} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </a>
    </nav>
  );
}
