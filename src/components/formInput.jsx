
const FormInput = ({name, id, type, label, onChange, error}) => {
    return ( 

            <div className="form-group m-2">
                <label htmlFor={name}><h3>{label}</h3></label>
                <input 
                onChange={onChange}
                type={type}
                id={id}
                name={name}
                className="form-control"
                style={{padding: "12px"}}/>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
     );
}
 
export default FormInput;