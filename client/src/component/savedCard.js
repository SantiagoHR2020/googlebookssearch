import React from 'react';
import api from '../utils/api';
function savedCard(props) {
  console.log(props);

  const handleDelete = () => {
    console.log(props.book);

    api.deleteBook(props.book.id).then((res) => console.log('deleted'));
  };

  return (
    <div className='card m-4'>
      <div className='row'>
        <div className='col-3'></div>

        <div className='col-6'>
          <h3>{props.book.title}</h3>
          <h5>By: {props.book.authors.join(', ')}</h5>
        </div>
        <div className='col-3'>
          <button className='m-1' onClick={handleDelete}>
            Delete
          </button>
          <button className='m-1'>
            <a href={props.book.Link} target='_blank'>
              View
            </a>
          </button>
        </div>
      </div>

      <div className='row'>
        <div className='col-3'>
          <img className='m-4' src={props.book && props.book.thumbnail} />
        </div>
        <div className='col-9'>
          <p className='text-start'>{props.book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default savedCard;
