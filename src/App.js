import React from 'react';
/* ----- Pages ----- */
import Home from './pages/Home';
/* ----- Styles and Animation ----- */
import GlobalStyles from './components/GlobalStyles';
/* ----- React Router ----- */
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}
export default App;