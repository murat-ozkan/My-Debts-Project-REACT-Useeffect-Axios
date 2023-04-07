import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditDept from "./EditDebt";

const DebtList = ({ debts, getDebts }) => {
  const BASE_URL = "https://6429dbc900dfa3b5473ba802.mockapi.io/mydebts";

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

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="text-center text-warning">
              #No
            </th>
            <th scope="col" className="text-center text-warning">
              To Whom
            </th>
            <th scope="col" className="text-center text-warning">
              How Much{" "}
            </th>
            <th scope="col" className="text-center text-warning">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {debts?.map((item) => {
            const { id, toWhom, howMuch } = item;
            return (
              <tr key={id}>
                <th className="text-center text-white">{id}</th>
                <td className="text-center text-white">{toWhom}</td>
                <td className="text-center text-white">
                  ₺{howMuch.toLocaleString()}
                </td>
                <td className="text-center text-nowrap text-white">
                  <FaEdit
                    size={30}
                    type="button"
                    className="me-2 text-warning"
                    data-toggle="modal"
                    data-target="#editDebt"
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
              style={{ fontSize: "1.2em" }}
            >
              <b>Total Debt:</b>
            </td>

            <td className="text-center text-danger">
              <b>₺{totalDebt.toLocaleString()}</b>
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <EditDept />
    </div>
  );
};

export default DebtList;
