import React from 'react';

function Card(props) {
  console.log(props);

  return (
    <div className='card'>
      <div className='row'>
        <div className='col-3'>
          <h3>{props.book.volumeInfo.title}</h3>
          <br />
          <h5>By: {props.book.volumeInfo.authors.join(', ')}</h5>
          <br />
        </div>

        <div className='col-6'></div>
        <div className='col-3'>
          <button>Save</button>
          <button>
            <a href={props.book.volumeInfo.canonicalVolumeLink} target='_blank'>
              View
            </a>
          </button>
        </div>
      </div>

      <div className='row'>
        <div className='col-3'>
          <img src={props.book.volumeInfo.imageLinks && props.book.volumeInfo.imageLinks.thumbnail} />
        </div>
        <div className='col-9'>
          <p>{props.book.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
