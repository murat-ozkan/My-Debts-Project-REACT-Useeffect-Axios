import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
// import { useState } from "react";

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

  const editDebts = async ({ id, toWhom, howMuch }) => {
    try {
      await axios.put(`${BASE_URL}/${id}/`, { toWhom, howMuch });
    } catch (error) {
      console.log(error);
    }
    getDebts();
  };
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#No</th>
            <th scope="col">To Whom</th>
            <th scope="col">How Much</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {debts?.map((item) => {
            const { id, toWhom, howMuch } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{toWhom}</td>
                <td>{howMuch}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={30}
                    type="button"
                    className="me-2 text-warning"
                    onClick={() =>
                      editDebts({
                        toWhom: "hassan",
                        howMuch: "158",
                        id: "20",
                      })
                    }
                  />
                  <AiFillDelete
                    size={30}
                    type="button"
                    className="text-danger"
                    onClick={() => deleteDebt(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          {debts?.map((item) => {
            console.log(item);
            return <td>{item.howMuch}</td>;
          })}
        </tfoot> */}
      </table>
    </div>
  );
};

export default DebtList;

// const [totalDebt, setTotalDebt] = useState(0);
// const debts = [
//   {
//     id: 1,
//     toWhom: "Clarus Hemingway",
//     howMuch: 3000,
//   },
//   {
//     id: 2,
//     toWhom: "Thomas React",
//     howMuch: 1200,
//   },
// ];
