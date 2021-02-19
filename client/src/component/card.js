import React from 'react';
import api from '../utils/api';
function Card(props) {
  console.log(props);


 const handleSave = ()=>{
   console.log(props.book)
   const bookData ={
     title:props.book.volumeInfo.title,
     authors: props.book.volumeInfo.authors.join(', '),
     description: props.book.volumeInfo.description,
     thumbnail: props.book.volumeInfo.imageLinks.thumbnail,
     link: props.book.volumeInfo.canonicalVolumeLink
    }
    api.saveBook(bookData).then(res => console.log('saved'))
  }

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
          <button className='m-1' onClick={handleSave}>Save</button>
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
