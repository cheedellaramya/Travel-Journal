import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import earth from './assets/images/earth-logo.jpg';
import location from './assets/images/location-logo.jpg';
import Data from './Components/Data';

function App() {
  const dataSet = Data.map((itemDetails)=>{
    return(
    <Card point={location}
          details={itemDetails}
    />
    )
  })
  return (
    <div className='container'>
      <div className='travel-container'>
        <Navbar img={earth}/>
      </div>
      <div className='app-container'>
          {dataSet}
      </div>
    </div>

  );
}

export default App;
