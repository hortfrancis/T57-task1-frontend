export default function Detail({ label, value }) {
    return (
        <div className="Detail">
            <span className="label">{label}</span>
            <span className="car-data" >{value}</span>
        </div>
    );
}