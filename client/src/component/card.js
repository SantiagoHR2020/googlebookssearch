import React from 'react';

function Card(props) {
  console.log(props);

  return (
    <div className='card m-4'>
      <div className='row'>
        <div className='col-3'>
      
        </div>

        <div className='col-6'>
          <h3>{props.book.volumeInfo.title}</h3>
          <h5>By: {props.book.volumeInfo.authors.join(', ')}</h5>
        </div>
        <div className='col-3'>
          <button className='m-1'>Save</button>
          <button className='m-1'>
            <a href={props.book.volumeInfo.canonicalVolumeLink} target='_blank'>
              View
            </a>
          </button>
        </div>
      </div>

      <div className='row'>
        <div className='col-3'>
          <img className='m-4'
            src={
              props.book.volumeInfo.imageLinks &&
              props.book.volumeInfo.imageLinks.thumbnail
            }
          />
        </div>
        <div className='col-9'>
          <p className='text-start'>{props.book.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
