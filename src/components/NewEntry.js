import { Form } from "semantic-ui-react";
import ButtonSave from "./ButtonSave";
import EntryForm from "./EntryForm";

import useEntryDetails from "../hooks/useEntryDetails";

const NewEntry = () => {
const {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry
    } = useEntryDetails()
return (
    <Form unstackable>
      <EntryForm
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ButtonSave
        addEntry={addEntry}
      />
    </Form>
  );
};

export default NewEntry;
