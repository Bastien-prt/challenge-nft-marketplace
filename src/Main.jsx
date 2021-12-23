import './Main.scss';

function Main() {
  return (
    <nav className="main-container">
      <div className="left">
        <h1 className="main-title">
          Best <span className="nft"> NFT </span> <br /> Collection for <br />{' '}
          Your Future
        </h1>
        <div className="cta">
          <button className="explore"> Explore Now </button>
          <button className="create"> Create NFT </button>
        </div>
        <ul className="infos">
          <li>
            <span className="number"> 62500 </span>
            <span className="names"> Collection</span>
          </li>
          <li>
            <span className="number"> 14000 </span>
            <span className="names"> Auctions</span>
          </li>
          <li>
            <span className="number"> 5200 </span>
            <span className="names"> Artists</span>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="background-round">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/800px-SpongeBob_SquarePants_character.svg.png"
            alt="pics"
            className="picture"
          />
          <div className="bid-container">
            <div className="left-bid">
              <p className="left-bid-text"> Current Bid </p>
              <p> 12, 43 ETH </p>
              <button className="button-place-bid"> Place Bid </button>
            </div>
            <div className="right-bid">
              <p className="right-bid-text"> Ends Inc</p>
              <p> 12 : 24 : 00 </p>
              <button className="button-place-bid"> View NFT </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Main;
