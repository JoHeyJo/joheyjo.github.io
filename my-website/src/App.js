import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header"
import Banner from "./Banner"
import Nav from './Nav';
import Bio from './Bio';
import Footer from './Footer'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Grid, Container, Row, Col } from 'react-bootstrap'



function App() {
  return (
    <Container fluid>

      <Row>
        <Header />
      </Row>

      <Row>
        <Col>
          <Nav />
        </Col>
        <Col></Col>
      </Row>

      <Row >
          <Footer/>
      </Row>

    </Container>
  );
}

export default App;
