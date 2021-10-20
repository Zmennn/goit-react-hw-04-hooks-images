import { ImageGallery } from './components/index';
import './App.css';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <ImageGallery />
        <ToastContainer />
      </>
    );
  }
}

export default App;
