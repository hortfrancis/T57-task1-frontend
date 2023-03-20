import Detail from './Detail';


export default function CarDisplay({ car }) {

    return (
        <>
            <Detail label="Model" value={car.model} />
            <Detail label="Make" value={car.make} />
            <Detail label="Colour" value={car.colour} />
            <Detail label="RegNum" value={car.regNum} />
            <Detail label="Owner" value={car.owner} />
            <Detail label="Address" value={car.address} />
        </>
    )
}