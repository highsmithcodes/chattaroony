import './default.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration';
import Login from './pages/Login/index';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Protected from './components/Protected';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from "apollo-link-context";
import Single from './pages/Single';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';


function App() {


  return (
      <div className="App">
        <AuthContextProvider>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/products/" element={<Products />} />
            <Route exact path="/products/:postId" element={<Single />} />
            <Route path="/cart/" element={<Cart />} />
            {/* <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} /> */}
            {/* <Route path="/account" element={<Protected><Account/></Protected>} /> */}
            {/* <Route path="/account" element={<Account/>} /> */}
          </Routes>
          <Footer/>
        </AuthContextProvider>
      </div>
  );
}

export default App;
