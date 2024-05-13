// src/components/TransactionList.js

import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react"; // Import Semantic UI components if not already imported
import Transaction from "./Transaction";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) =>
        console.error("Error fetching transactions:", error)
      );
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TransactionList;