import { useState, useEffect } from "react";
import axios from "axios";

const EditDept = ({ editingDebt }) => {
  const BASE_URL = "https://6429dbc900dfa3b5473ba802.mockapi.io/mydebts";

  const [toWhom, setToWhom] = useState("");
  const [howMuch, setHowMuch] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingDebt) {
      console.log(editingDebt.toWhom);
      setToWhom(editingDebt.toWhom);
      setHowMuch(editingDebt.howMuch);
      setDate(editingDebt.date);
    }
  }, [editingDebt]);

  const handleToWhomChange = (event) => {
    setToWhom(event.target.value);
  };

  const handleHowMuchChange = (event) => {
    setHowMuch(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editingDebt) {
        await axios.put(`${BASE_URL}/${editingDebt.id}`, {
          toWhom,
          howMuch,
          date,
        });
      } else {
        await axios.post(BASE_URL, {
          toWhom,
          howMuch,
          date,
        });
      }
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  return (
    <div className="modal fade" id="editDebt" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Debt</h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="to-whom" className="col-form-label">
                  To Whom:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="to-whom"
                  value={toWhom}
                  onChange={handleToWhomChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="how-much" className="col-form-label">
                  How Much:
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="form-control"
                  id="how-much"
                  value={howMuch}
                  onChange={handleHowMuchChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="how-much" className="col-form-label">
                  Date
                </label>
                <input
                  type="date"
                  min="0"
                  step="0.01"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={handleDateChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDept;
