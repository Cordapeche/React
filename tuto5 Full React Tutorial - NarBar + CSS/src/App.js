
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Just a simple test message'
  return (
    <div className="App">
      <Navbar />
     <div className="content">
      <Home />
     </div>
    </div>
  );
}

export default App;
