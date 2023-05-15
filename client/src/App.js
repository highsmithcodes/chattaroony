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

function App() {


  return (
      <div className="App">
        <AuthContextProvider>
          {/* Add Jest */}
          <Header/>
          <Routes>
            <Route exact path="/" element={<Protected><Homepage/></Protected>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/account" element={<Protected><Account/></Protected>} />
          </Routes>
        </AuthContextProvider>
      </div>
  );
}

export default App;
