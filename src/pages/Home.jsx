import axios from "axios";
import { useEffect, useState } from "react";
import AddDebt from "../components/AddDebt";
import DebtList from "../components/DebtList";
import EditDept from "../components/EditDebt";
import "./Home.css";

const Home = () => {
  const [debts, setDebts] = useState([]);
  const BASE_URL = "https://6429dbc900dfa3b5473ba802.mockapi.io/mydebts/";

  const getDebts = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setDebts(data);
    } catch (error) {
      console.log(error);
    }
  };

  //! componentDidMount. İlk renderdan sonra istek attı. Sonra atmayacak.
  useEffect(() => {
    getDebts();
  }, []);

  return (
    <>
      <AddDebt getDebts={getDebts} />
      <DebtList getDebts={getDebts} debts={debts} />
      <EditDept debts={debts}/>
    </>
  );
};

export default Home;
