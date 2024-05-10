import { Button, Modal } from "semantic-ui-react"
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../actions/modals.action";
import useEntryDetails from "../hooks/useEntryDetails";

const ModalEdit = ({
  isOpen,
  description,
  value,
  isExpense,
  id
  
}) => {
  const dispatch = useDispatch()

  const entryUpdate = useEntryDetails(description,value,isExpense)
  return (
    <Modal open={isOpen}>
      <Modal.Header>edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm 
          description={entryUpdate.description}
          setDescription={entryUpdate.setDescription}
          value={entryUpdate.value}
          setValue={entryUpdate.setValue}
          isExpense={entryUpdate.isExpense}
          setIsExpense={entryUpdate.setIsExpense}
         
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary>ok</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit

