import { Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch, } from "react-redux";
import { removeEntryRedux } from "../actions/entries.action";
import {openEditModal} from "../actions/modals.action"

const EntryLine = ({id,description, editEntry,value,isExpense =false, setIsOpen}) => {
  const dispatch = useDispatch()
  return (
      <>
        <Segment color={isExpense ? "red" : "green"}>
          <Grid columns={3} textAlign="right">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                {description}
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                ${value}
              </Grid.Column>
              <Grid.Column width={3}>
              <Icon name="edit" bordered
                onClick={() =>dispatch(openEditModal(id))} />
              <Icon name="trash"
                bordered onClick={() => dispatch(removeEntryRedux(id))} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </>
    );
}

export default EntryLine