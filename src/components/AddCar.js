import CarForm from "./CarForm";


function AddCar({ addCar }) {

    return (
        <>
            <h2>Add Car</h2>

            <CarForm onSubmit={addCar} action={'Add'} />

        </>
    )
}

export default AddCar;