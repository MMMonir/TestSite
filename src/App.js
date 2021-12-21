import './App.css';
import './css/bootstrap.min.css';
import './css/style.min.css';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Service />
    </div>
  );
}

export default App;
