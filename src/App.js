import React, {useEffect, Fragment} from 'react';
import "materialize-css/dist/css/materialize.min.css"
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/AppSearchbar'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './logs/AddLogModal'
import Logs from './logs/Logs'
import './App.css';

const App = () => {
  useEffect(() => {
    //Initializes Material JS
    M.AutoInit()
  },[])
  return (
    <Fragment>
      <SearchBar/>
      <div className="container">
        <AddBtn/>
        <AddLogModal/>
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
