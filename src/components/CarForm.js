import { useState } from 'react';

import Field from './Field';

const emptyCarObject = {
    model: '',
    make: '',
    colour: '',
    regNum: '',
    owner: '',
    address: ''
  };

// Provide a default empty car object in case no carData prop is passed in
const CarForm = ({ carData = emptyCarObject, onSubmit, action }) => {


    // Empty car object initalised
    const [car, setCar] = useState(carData);

    // Clears the form fields 
    function resetForm() {
        setCar(emptyCarObject);
    }

    // Declare a function here to handle changes to all the form fields
    function handleChange(event) {
        const { name, value } = event.target;
        // Using spread syntax to copy the existing car object and then update the value of the field that has changed
        // (Nice short code that does a lot of work in one line)
        setCar({ ...car, [name]: value });
    };

    const handleSubmit = (event) => {
        // Prevent the page reloading
        event.preventDefault();

        // Input validation for empty fields 
        if (!car.model || !car.make || !car.colour || !car.regNum || !car.owner || !car.address) {
            alert('Please fill in all fields');
        } else {
            onSubmit(car)
                .then(({ data, status }) => {
                    if (status === 201) {
                        alert('Car added successfully');
                        resetForm();
                    } else if (status === 204) {
                        alert('Car updated successfully');
                        resetForm();
                    } else {
                        alert('Error adding car');
                    }
                })
        }

    };

    // useEffect(() => {
    //     // Autofill the form fields if a car object is passed in
    //     if (initialCar) {
    //         setCar(car);
    //     }
    // }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Field label="Model" type="number" id={car._id} name="model" value={car.model} onChange={handleChange} />
            <Field label="Make" type="text" name="make" value={car.make} onChange={handleChange} />
            <Field label="Colour" type="text" name="colour" value={car.colour} onChange={handleChange} />
            <Field label="RegNum" type="text" name="regNum" value={car.regNum} onChange={handleChange} />
            <Field label="Owner" type="text" name="owner" value={car.owner} onChange={handleChange} />
            <Field label="Address" type="text" name="address" value={car.address} onChange={handleChange} />
            <button type="submit">{action}</button>
        </form>
    );
};

export default CarForm;