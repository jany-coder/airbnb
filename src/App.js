import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Live from './components/live/Live';
import Hosting from './components/hosting/Hosting';
import Info from './components/info/Info';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <Live />
      <Hosting />
      <Info />
      <Footer />
    </>
  );
}

export default App;
