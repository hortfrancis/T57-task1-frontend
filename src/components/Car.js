import { useState } from 'react';

import CarForm from './CarForm';
import CarDisplay from './CarDisplay';

// Car component handles whether to dislay static data or a form for editing

export default function Car( { carData, updateCar, deleteCar }) {

    const [editMode, setEditMode] = useState(false);

    function toggleEditMode() {
        // Using implicit parameter for accurate state handling  
        setEditMode(prevEditMode => !prevEditMode);
    };

    function handleDelete() {
        deleteCar(carData);
    }

    return (
        <div className="Car">

            {/* Ternary operator to toggle between displaying static data and a form for editing */}
            { editMode
            ? <CarForm carData={carData} onSubmit={updateCar} action={'Update'} />
            : <CarDisplay car={carData} /> }

            <button onClick={toggleEditMode}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}