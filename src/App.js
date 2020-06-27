import React, {useEffect, Fragment} from 'react';
import "materialize-css/dist/css/materialize.min.css"
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/AppSearchbar'
import './App.css';

const App = () => {
  useEffect(() => {
    //Initializes Material JS
    M.AutoInit()
  },[])
  return (
    <Fragment>
      <SearchBar/>
    </Fragment>
  );
}

export default App;
