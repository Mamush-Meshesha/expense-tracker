import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";

const EntryLInes = ({ entries, }) => {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
        
          // setIsOpen={setIsOpen}
        />
      ))}
    </Container>
  );
};

export default EntryLInes;
