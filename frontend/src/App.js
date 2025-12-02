import './App.css';
import Header from './components/header.js'
import StackWrapper from "./components/StackWrapper";
import ScrollProvider from './components/ScrollProvider.js';

function App() {
  return (
    //  <div className='App'>
    //      <Header />
    //      <StackWrapper />
    //  </div>
    <div className="App">
      <ScrollProvider>
        <Header />
        <StackWrapper />
      </ScrollProvider>
    </div>

  );
}

export default App;
