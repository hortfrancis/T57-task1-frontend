

const Field = ( { label, type, name, value, onChange} ) => {
    return (
        <div className="field">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange}
            />
        </div>
    );
};

export default Field;