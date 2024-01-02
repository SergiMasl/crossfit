import Logo from "./styles/svg/logo.svg";

function Header() {
  return (
    <div className="hd-container">
      <div className="hd-logo">
        <img src={Logo} alt="logo" className="hd-logo-img" />
      </div>
      <div className="hd-list">
        <ul className="hd-list-wrap">
          <li className="hd-list-item">
            <a href="#" className="hd-list-link">
              Home
            </a>
          </li>
          <li className="hd-list-item">
            <a href="#" className="hd-list-link">
              About
            </a>
          </li>
          <li className="hd-list-item">
            <a href="#" className="hd-list-link">
              Services
            </a>
          </li>
          <li className="hd-list-item">
            <a href="#" className="hd-list-link">
              Trainers
            </a>
          </li>
          <li className="hd-list-item">
            <a href="#" className="hd-list-link">
              Blog
            </a>
          </li>
          <li className="hd-list-item">
            <a href="#" className="hd-list-link">
              Contact us
            </a>
          </li>
          <li className="hd-list-item">
            <a href="#" className="hd-list-link">
              Join Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
