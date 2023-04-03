import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// import { useState } from "react";

const DebtList = ({ debts }) => {
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
            const { id, towhom, howmuch } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{towhom}</td>
                <td>{howmuch}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={30}
                    type="button"
                    className="me-2 text-warning"
                  />
                  <AiFillDelete
                    size={30}
                    type="button"
                    className="text-danger "
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
