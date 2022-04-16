import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import PaginatedItems from "./PaginatedItems/PaginatedItems";

function App() {
  return (
    <div className="App">
      <header className="App-header mt-4">
        <Container>
          <PaginatedItems itemsPerPage={4} />
        </Container>
      </header>
    </div>
  );
}

export default App;
