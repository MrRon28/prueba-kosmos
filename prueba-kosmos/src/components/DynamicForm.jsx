import React, {useState} from 'react';
import fields from './fields.json';


export const DynamicForm = () => {
    const [formFields, setFormFields] = useState(fields.fields);


    let removeFields = (index) => {
        let cloneFormFields = [...formFields];
        cloneFormFields.splice(index, 1);
        setFormFields(cloneFormFields);
    }

  return (
    <>
    <div className='border-container'>
        <div className='title-container'>
            <h2>Formulario Dinamico</h2>
        </div>
        <div className='form-elements'>
            <div>
            <form className='form-style' action="">
                {
                    formFields.map( (field, index) => {
                     return (
                        <>
                        <input type={field.type} label={field.label} placeholder={field.label}/>
                        <button type="button" onClick={() => removeFields(index)}>Borrar</button>
                        </>
                     )
                    })
                }
            </form>
            </div>
        </div>
    </div>
    </>
  )
}
