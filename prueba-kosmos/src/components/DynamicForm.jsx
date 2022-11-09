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
            <form action="">
                {formFields.map( (field, index) => {
                    return (
                        <div className='test-container'>
                            {   field.type === "text" &&
                                    <div>
                                        <input type={field.type} label={field.label} placeholder={field.label}/>
                                        <button type="button" onClick={() => removeFields(index)}>Borrar</button> 
                                    </div>
                            }

                            {   field.type === "radio" && 
                                    <div>
                                        <input type="radio" id={field._uid} name={field.label} value={field.label}/>
                                        <label for={field.uid}>{field.label}</label>
                                        <button type="button" onClick={() => removeFields(index)}>Borrar</button>
                                    </div>
                            }
                            {   field.type === "checkbox" && 
                                    <div>
                                        <input type="checkbox" id={field._uid} name={field.label} value={field.label}/>
                                        <label for={field.uid}>{field.label}</label>
                                        <button type="button" onClick={() => removeFields(index)}>Borrar</button>
                                    </div>
                            }
                        </div>
                    )
                })}
            </form>
            </div>
        </div>
    </div>
    </>
  )
}
