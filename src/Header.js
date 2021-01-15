import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Header() {
  return (
    <Container
      className="header"
      fluid
    >
      <Row className="d-flex align-items-center p-5">
        <h1 className="title">Awesome Profiles</h1>
      </Row>
    </Container>
  );
}

export default Header;
