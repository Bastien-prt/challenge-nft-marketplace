import './NavBar.scss';

function NavBar() {
  return (
    <div className="navBar-container">
      <div className="company-name-container">
        <span className="false-logo"></span>
        <p className="company-name"> CryptoHype</p>
      </div>
      <ul className="menu">
        <li> Market </li>
        <li> Discover </li>
        <li> About </li>
        <li> Artist </li>
      </ul>
      <div className="search-bar">
        <input
          className="input-search-bar"
          type="text"
          placeholder="Search related to NFT"
        />
        <span className="loop"> 0 </span>
      </div>
    </div>
  );
}

export default NavBar;
