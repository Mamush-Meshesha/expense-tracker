import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntry from "./components/NewEntry";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBlances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLInes from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntryRedux } from "./actions/entries.action";

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
const [entry,setEntry] = useState()
  const entries = useSelector((state) => state.entries);

  const {isOpen,id} = useSelector((state) => state.modals);

  useEffect(() => { 
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index])
  }, [isOpen,id, entries]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
  }, [entries]);

  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getAllEntryRedux())
},[dispatch ])
  return (
    <Container>
      {/* header*/}
      <MainHeader title="Budget" />

      {/* total balance*/}
      <DisplayBalance title="Your balance :" value={total} size="small" />

      {/* income and expenses*/}
      <DisplayBlances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      {/* history header*/}
      <MainHeader title="history" type="h3" />

      <EntryLInes entries={entries}  />

      {/* add transactions*/}
      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntry />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
