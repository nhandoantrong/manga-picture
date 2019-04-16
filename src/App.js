import React, { Component } from 'react';
import Header from './components/Header'
import AllOfImage from './components/AllOfImage';

import data from './data/list.json';
import Modal from './components/Modal';
import UpdateImages from './components/updateImages';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UpdateImages />
        <AllOfImage data={data} />
        <Modal />
      </div>
    );
  }
}

export default App;
