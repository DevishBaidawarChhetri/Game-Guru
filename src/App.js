import React from 'react';
/* ----- Pages ----- */
import Home from './pages/Home';
/* ----- Components ----- */
import Nav from './components/Nav';
import Footer from './components/Footer';
/* ----- Styles and Animation ----- */
import GlobalStyles from './components/GlobalStyles';
/* ----- React Router ----- */
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <Footer />
    </div>
  );
}
export default App;