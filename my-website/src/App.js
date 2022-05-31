import './App.css';
import Header from "./Header"
import Banner from "./Banner"
import Nav from './Nav';
import Bio from './Bio';
import Footer from './Footer'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  return (
    <div className="App">
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      >
        <Header/ >
        <Banner />
        <Nav />
        <Bio />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
