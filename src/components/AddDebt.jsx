import { useState } from "react";

const AddDebt = () => {
  const [toWhom, setToWhom] = useState("");
  const [howMuch, setHowMuch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDebt = { toWhom, howMuch }; //* create object to post
    console.log(newDebt);
    setToWhom("");
    setHowMuch("");
  };
  console.log(toWhom, howMuch);
  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-primary mb-4">Add Your Debt</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
        <div className="mb-3">
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
        <button type="submit" className="btn btn-danger mb-4">
          Add to the Debts
        </button>
      </form>
    </div>
  );
};

export default AddDebt;
