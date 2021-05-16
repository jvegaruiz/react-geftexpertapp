import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputvalue, setinputvalue] = useState('');

    const handleTextValue = (e) =>{
        setinputvalue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputvalue.trim().length > 2){
            setCategories((cate)=>[inputvalue, ...cate]);
            setinputvalue('');   
        }  
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar categoría</h2>
            <input 
                type="text"
                value={inputvalue}
                onChange={handleTextValue}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}