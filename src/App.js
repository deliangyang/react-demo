import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { User } from './User';

function App() {
  return (
    <Router>
      <Route component={User} />
    </Router>
  )
}
export default App;
