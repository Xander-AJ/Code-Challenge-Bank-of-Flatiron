import React from "react";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";
import TransactionsList from "./TransactionsList";

function AccountContainer() {
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;