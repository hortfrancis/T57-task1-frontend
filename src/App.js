import React, { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data))
      // .then(data => console.log(data))
      .catch((error) => console.error('Error fetching car data:', error));
  }, []);

  return (
    <div className="App">
      <h1>T57 Task 1</h1>

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
