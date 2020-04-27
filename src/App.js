import React from 'react';
import './App.css';
import Counters from './components/counters';
import TheNavbar from './components/navbar';
import {connect} from 'react-redux';
import {
  Container,
  Button
} from 'reactstrap';
import { resetCounter } from './actions/index';



const App = ({dispatch}) => {

  return(
    <React.Fragment>
    <TheNavbar/>
    <Container>
      <div>
        <Counters/>
      </div>
      <Button color="success" className="m-2" onClick={() => dispatch(resetCounter())}>Reset</Button>
    </Container>
  </React.Fragment>
  )
}


export default connect()(App);
