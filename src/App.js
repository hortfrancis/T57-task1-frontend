import React, { useEffect, useState } from 'react';

import AddCar from './components/AddCar';

import { findAllCars, addCar } from './fetchRequests';

function App() {

  const [data, setData] = useState(null);
  
  useEffect(() => {

    // Display data for all cars in the database 
    findAllCars()
      .then(({ data, status }) => setData(data))

  }, []);


  return (
    <div className="App">
      <h1>T57 Task 1</h1>

      <AddCar addCar={addCar} />


      <ul>
        {data && data.map((car) => (
          <li key={car._id}>
            {car.make} {car.model} - {car.owner}
          </li>
        ))}
      </ul>


    </div>
  );
}

export default App;
