import React, { useState } from 'react';
import { DynamicForm } from './DynamicForm';
import fields from './fields.json';

export const TestContainer = () => {
    const [listFields, setListFields] = useState(fields.fields);


  return (
    <>
    <div className='test-container'>
        <div className='border-container'>
            <div className='title-container'>
                <h2>Campos disponibles para agregar</h2>
            </div>
            <div className='list-elements'>
                <ul>
                {
                    listFields.map((field, index) => <li key={index}>{`Tipo: ${field.type}, Etiqueta: ${field.label}`}</li>)
                }
                </ul>
            </div>
        </div>
        <div>
            <DynamicForm listFields={listFields} setListFields={setListFields}/>
        </div>
    </div>
    </>
  )
}
