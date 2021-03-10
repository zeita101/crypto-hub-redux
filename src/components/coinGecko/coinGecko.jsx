import "./CoinGecko.css";
import { fetchCoinGeckoAPI } from "../../services/fetchCoinGeckoAPI";

const CoinList = ({ list }) => {
  return (
    <div className="list-container">
      <h1>Crypo Times</h1>
      <div className="info">
        <div className="list-container">
          <div className="list">
            <h2>{list[0].name}</h2>
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "10%",
              }}
              src={list[0].image}
              alt="currency-icon"
            ></img>
            <h2>{list[0].symbol}</h2>
            <h3>Current Price: {list[0].current_price}</h3>
            <h3>Price Change: {list[0].price_change_24h}</h3>
            <h3>Percentage Change: {list[0].ath_change_percentage}</h3>
            <h3>Market Cap: {list[0].market_cap}</h3>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CoinList;
