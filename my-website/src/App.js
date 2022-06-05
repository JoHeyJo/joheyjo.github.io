import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Header"
import Banner from "./Banner"
import Nav from './Nav';
import Bio from './Bio';
import Footer from './Footer'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <div className="App">
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      >
        <Nav/>
        <Container fluid>
          <Row >
            <Col>
            <Header />
            </Col>
          </Row>
          <Row>
            <Banner />
          </Row>
          <Row >
            <Bio />
          </Row>
          <Row className='footer'>
            <Footer />
          </Row>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
