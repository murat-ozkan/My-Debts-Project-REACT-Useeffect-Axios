import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditDept from "./EditDebt";
import { useState } from "react";

const DebtList = ({ debts, getDebts }) => {
  const BASE_URL = "https://6429dbc900dfa3b5473ba802.mockapi.io/mydebts";

  const [editingDebt, setEditingDebt] = useState(null);

  const deleteDebt = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}/`);
    } catch (error) {
      console.log(error);
    }
    getDebts();
  };

  const totalDebt = debts.reduce((acc, curr) => acc + Number(curr.howMuch), 0);
  //! The reduce function takes an accumulator (acc) and the current item (curr)
  //! and adds the howMuch value of the current item to the accumulator.

  const handleEditClick = (debt) => {
    setEditingDebt(debt);
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="text-center text-warning h4">
              #No
            </th>
            <th scope="col" className="text-center text-warning h4">
              To Whom
            </th>
            <th scope="col" className="text-center text-warning h4">
              How Much
            </th>
            <th scope="col" className="text-center text-warning h4">
              Date
            </th>
            <th scope="col" className="text-center text-warning h4">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {debts?.map((item) => {
            const { id, toWhom, howMuch, date } = item;
            return (
              <tr key={id}>
                <th className="text-center text-white">{id}</th>
                <td className="text-center text-white">{toWhom}</td>
                <td className="text-center text-white">
                  ₺{howMuch.toLocaleString()}
                </td>
                <td className="text-center text-white">{date}</td>
                <td className="text-center text-nowrap text-white">
                  <FaEdit
                    size={30}
                    type="button"
                    className="me-2 text-warning"
                    data-toggle="modal"
                    data-target="#editDebt"
                    onClick={() => handleEditClick(item)}
                  />
                  <AiFillDelete
                    size={30}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteDebt(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan="2"
              className="text-center text-danger"
              style={{ fontSize: "1.4em" }}
            >
              <b>Total Debt:</b>
            </td>

            <td className="text-center text-danger h4">
              <b>₺{totalDebt.toLocaleString()}</b>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <EditDept editingDebt={editingDebt} />
    </div>
  );
};

export default DebtList;
