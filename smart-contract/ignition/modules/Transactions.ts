import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TransactionsModule = buildModule("Transactions", (m) => {
  const transactions = m.contract("Transactions");

  return { transactions };
});

export default TransactionsModule;
