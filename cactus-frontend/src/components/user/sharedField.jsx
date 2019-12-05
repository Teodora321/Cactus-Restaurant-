import React from 'react';
import { Field } from "react-final-form";

const InputField = ({ name, label, type,}) => {
    return (<Field name={name} >
        {({ input, meta }) => (
            <div className="form-group">
                <label className="text-uppercase">{label}</label>
                <input className="form-control" {...input} type={type} />
                <div className='some'>  {meta.error && meta.touched ? `${meta.error}` : ""}</div>
            </div>
        )}
    </Field>)
}

export default InputField;