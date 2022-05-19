
const FormInput = ({name, id, value, type, label, onChange, error}) => {
    return ( 

            <div className="form-group m-2">
                <label htmlFor={name}><h5>{label}</h5></label>
                <input 
                onChange={onChange}
                type={type}
                id={id}
                name={name}
                value={value}
                className="form-control"
                style={{padding: "12px"}}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
     );
}
 
export default FormInput;