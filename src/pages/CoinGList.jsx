import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoinList } from "../actions/coinGeckoActions";
import CoinList from "../components/coinGecko/coinGecko";

const CoinGList = () => {
  const dispatch = useDispatch();

  const initialList = useSelector((state) => {
    return state.list;
  });

  const { list } = initialList;

  useEffect(() => {
    dispatch(fetchCoinList());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchCoinList());
  };

  const renderList = () => {
    if (initialList.loading) return <p> Loading List...</p>;
    if (initialList.hasErrors) return <p>An error has occurred</p>;
    return list;
  };

  return (
    <div>
      <CoinList list={renderList()} handleClick={() => handleClick()} />
    </div>
  );
};

export default CoinGList;
