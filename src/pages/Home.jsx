import axios from "axios";
import { useEffect, useState } from "react";
import AddDebt from "../components/AddDebt";
import DebtList from "../components/DebtList";

const Home = () => {
  const [debts, setDebts] = useState([]);
  const BASE_URL = "https://6429dbc900dfa3b5473ba802.mockapi.io/mydebts/";

  const getDebts = async () => {
    const { data } = await axios(BASE_URL);
    setDebts(data);
  };
  console.log(debts);

  //! componentDidMount yaptım. İlk renderdan sonra istek attı. Sonra atmayacak.
  useEffect(() => {
    getDebts();
  }, []);

  return (
    <>
      <AddDebt />
      <DebtList debts={debts}/>
    </>
  );
};

export default Home;
