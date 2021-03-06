import React, { useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";
import { OrdersContext } from "../context/OrdersContext";
import { ReceiptContext } from "../context/ReceiptContext";

function DataView() {
  const { receipts } = useContext(ReceiptContext);
  const { orders } = useContext(OrdersContext);
  const { contacts } = useContext(ContactsContext);

  return (
    <>
      <h1>List</h1>
      <table>
        {receipts.map((value) => {
          return (
            <tr>
              <td>{value.id}</td>
              <td>{value.budget}</td>
              <td>
                {value.items.map(
                  (value2) => `${value2.name} : ${value2.amount}, `
                )}
              </td>
              <td>{value.completed ? "true" : "false"}</td>
            </tr>
          );
        })}
      </table>
      <h1>contact</h1>
      <table>
        {contacts.map((value) => {
          return (
            <tr>
              <td>{value.id}</td>
              <td>{value.firstname}</td>
              <td>{value.lastname}</td>
              <td>{value.email}</td>
              <td>{value.tel}</td>
              <td>{value.is_good ? "true" : "false"}</td>
            </tr>
          );
        })}
      </table>
      <h1>Order</h1>
      <table>
        {orders.map((value) => {
          return (
            <tr>
              <td>{value.id}</td>
              <td>{value.desc}</td>
              <td>{value.notes}</td>

              <td>{value.advance_value}</td>
              <td>{value.is_advance_paid ? "true" : "false"}</td>

              <td>{value.price_value}</td>
              <td>{value.is_price_paid ? "true" : "false"}</td>

              <td>{value.client_id}</td>
              <td>{value.shopping_list_id}</td>

              <td>{value.date_of_issue.toLocaleString()}</td>
              <td>
                {value.est_date_of_completion &&
                  value.est_date_of_completion.toLocaleString()}
              </td>
              <td>
                {value.date_of_completion &&
                  value.date_of_completion.toLocaleString()}
              </td>

              <td>{value.is_completed ? "true" : "false"}</td>
              <td>{value.is_abandoned ? "true" : "false"}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default DataView;
