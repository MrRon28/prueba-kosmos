import React, {useState} from 'react';
import fields from './fields.json';


export const DynamicForm = ({listFields, setListFields }) => {
    
    const [openModal, setOpenModal] = useState(false);
    const [formNewInput, setFormNewInput] = useState({
        label: "",
        type: "text"
    });


    const removeFields = (index) => {
        let clonelistFields = [...listFields];
        clonelistFields.splice(index, 1);
        setListFields(clonelistFields);
    }

    const handleOnChange = (event) =>{

        const {name, value} = event.target;

        if(name == "name"){
            setFormNewInput({...formNewInput, label: value});
        }
       
        if(name === "types"){
            console.log(name)
            console.log(value)
            setFormNewInput({...formNewInput, type: value});
        }
        
    }
    
    const handleSubmit = () =>{
        
        setOpenModal(false);

        let newObj = { 
            component: formNewInput.label, 
            label: formNewInput.label, 
            type: formNewInput.type,
            _uid: Math.random()
        };
        setListFields(current => [...current, newObj])
    }


  return (
    <>
    <div className='border-container'>
        <div className='title-container'>
            <h2>Formulario Dinamico</h2>
        </div>
        <div>
            <button onClick={() => setOpenModal(true)}>Agregar campo</button>
            <dialog className='dialog-style' id="addField" open = {openModal}>
                <form onSubmit={handleSubmit} method="dialog">
                    <div>
                        <div>
                            <label htmlFor="name">Nombre de Campo: </label>
                            <input required name="name" onChange={handleOnChange} value={formNewInput.label} id='name' type="text" placeholder="Nombre de campo" />
                        </div>
                        <div>
                            <label htmlFor="types">Tipo: </label>
                            <select required name='types' onChange={handleOnChange} value={formNewInput.type} id='types' placeholder="Escoge tipo de campo">
                                <option value="text">Texto</option>
                                <option value="select">Seleccion</option>
                                <option value="radio">Radial</option>
                                <option value="checkbox">Checkbox</option>
                            </select>
                        </div>
                    </div>
                    <menu>
                        <button onClick={() => setOpenModal(false)} id="cancel" type="reset">Cancel</button>
                        <button type="submit">Confirm</button>
                    </menu>
                </form>
            </dialog>
        </div>
        <div className='form-elements'>
            <div>
            <form action="">
                {listFields.map( (field, index) => {
                    return (
                        <div key={index} className='test-container'>
                            {   field.type === "text" &&
                                    <>
                                        <input type={field.type} label={field.label} placeholder={field.label}/>
                                        <button type="button" onClick={() => removeFields(index)}>Borrar</button> 
                                    </>
                            }

                            {   field.type === "radio" && 
                                    <>
                                        <input type="radio" id={field._uid} name={field.label} value={field.label}/>
                                        <label htmlFor={field.uid}>{field.label}</label>
                                        <button type="button" onClick={() => removeFields(index)}>Borrar</button>
                                    </>
                            }
                            {   field.type === "checkbox" && 
                                    <>
                                        <input type="checkbox" id={field._uid} name={field.label} value={field.label}/>
                                        <label htmlFor={field.uid}>{field.label}</label>
                                        <button type="button" onClick={() => removeFields(index)}>Borrar</button>
                                    </>
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
