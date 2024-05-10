import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBlances = ({incomeTotal,expenseTotal}) => {

    return (
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            {/* income*/}
            <Grid.Column>
              <DisplayBalance title="income" value={incomeTotal} color="green" />
            </Grid.Column>

            {/* expenses*/}
            <Grid.Column>
              <DisplayBalance title="expenses" value={expenseTotal} color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default DisplayBlances