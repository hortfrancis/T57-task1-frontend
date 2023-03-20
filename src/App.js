import React, { useEffect, useState } from 'react';

import AddCar from './components/AddCar';
import Car from './components/Car';

import { findAllCars, addCar, updateCar } from './fetchRequests';

function App() {

  // Stateful varaibles
  const [data, setData] = useState(null);
  const [addCar, setAddCar] = useState(false);


  // Event handler functions
  function toggleAddCar() {
    // Using implicit parameter for accurate state handling  
    setAddCar(prevAddCar => !prevAddCar);
  }


  useEffect(() => {
    // Display data for all cars in the database on page load
    findAllCars()
      .then(({ data, status }) => setData(data))

  }, []);


  return (
    <div className="App">
      <h1>T57 Task 1</h1>

      {/* Conditional rendering on Boolean toggle: `addCar` */}
      {addCar
        ? <>
          <AddCar addCar={addCar} />
          <button onClick={toggleAddCar}>Cancel</button>
        </>
        : <button onClick={toggleAddCar}>Add New Car</button>}



      <ul>
        {data && data.map((car) => (
          <li className="car-li" key={car._id} >
            <Car carData={car} updateCar={updateCar} />
            {/* {car.make} {car.model} - {car.owner} */}
          </li>
        ))}
      </ul>


    </div>
  );
}

export default App;
