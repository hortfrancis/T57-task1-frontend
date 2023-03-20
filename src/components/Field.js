

const Field = ( { label, type, name, id, value, onChange} ) => {
    return (
        <div className="Field">
            {/* Generating a unique id value to link the <label> and the <input>
                The id comes from the _id value created by MongoDB */}
            <label htmlFor={name + id}>{label}</label>
            <input 
                type={type} 
                name={name} 
                value={value} 
                id={name + id}
                onChange={onChange}
            />
        </div>
    );
};

export default Field;