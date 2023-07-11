import logo from './logo.svg';
import './App.css';
import { Container }  from 'react-bootstrap'
import { BrowserRouter as Router,Route } from 'react-router-dom'


import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <Router>
    <Header />
  <main className='mt-3'>
  <Container>
    <Route path="/" component={HomeScreen} exact />
    <Route path="/login" component={LoginScreen} exact />
    <Route path="/register" component={RegisterScreen} exact />
    <Route path="/product/:id" component={ProductDetails} />
    <Route path="/cart/:id?" component={CartScreen} />

    </Container>
  </main>
    <Footer />
    
    
      </Router>
  );
}

export default App;
