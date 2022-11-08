import React, { useState } from 'react';
import { DynamicForm } from './DynamicForm';
import fields from './fields.json';

export const TestContainer = () => {
    const [listFields, setListFields] = useState(fields.fields);
    console.log(listFields);




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
                    listFields.map(field => <li>{field.type}</li>)
                }
                </ul>
            </div>
        </div>
        <div>
            <DynamicForm/>
        </div>
    </div>
    </>
  )
}
