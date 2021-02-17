import React from 'react';

function Form(props) {
  return (
    <form className='m-3'>
      <input
        className='form-control'
        type='text'
        placeholder='animal farm'
        value={props.query}
        onChange={props.handleInputChange}
        required
      ></input>
      <button className='m-3' onClick={props.handleFormSubmit} type='submit'>Search</button>
    </form>
  );
}

export default Form;
