import axios from "axios";
import { useState } from "react";

const AddDebt = ({ getDebts }) => {
  const [toWhom, setToWhom] = useState("");
  const [howMuch, setHowMuch] = useState("");
  const BASE_URL = "https://6429dbc900dfa3b5473ba802.mockapi.io/mydebts/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDebt = { toWhom, howMuch }; //* create object to post
    // const newDebt = { th: toWhom, hm: howMuch }; //* can be different name
    postData(newDebt);
    setToWhom("");
    setHowMuch("");
  };

  const postData = async (newDebt) => {
    try {
      await axios.post(BASE_URL, newDebt);
      await getDebts(); //! Call this func to get new dataset from backend
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger font-weight-bold mb-4">Add Your Debt</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%" }}>
            <input
              type="text"
              className="form-control"
              id="toWhom"
              placeholder="Who do you owe?"
              value={toWhom}
              onChange={(e) => setToWhom(e.target.value)}
              required
            />
          </div>
          <div style={{ width: "48%" }}>
            <input
              type="number"
              className="form-control"
              id="howMuch"
              placeholder="How much do you owe?"
              value={howMuch}
              onChange={(e) => setHowMuch(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-danger mb-2 my-4">
          Add to the Debts
        </button>
      </form>
    </div>
  );
};

export default AddDebt;
