import React, { Component } from 'react';
import Form from '../component/Form';
import api from '../utils/api';
import Card from '../component/card';


class searchPage extends Component {
  state = {
    books: [],
    query: '',
  };

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
    console.log(this.state.query);
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    api.getBooks(this.state.query).then((res) => {
      this.setState({
        books: res.data.items,
      });
      console.log(this.state.books);
    });
  };



  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <div className='row'>
          <div className='col-5'></div>
          <div className='col-2'>
            <Form
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              query={this.state.query}
            />
          </div>
          <div className='col-5'></div>
        </div>
        <br/>
        {this.state.books && this.state.books.length >0 ? this.state.books.map((book) => (
          <Card key={book.id} book={book} />
        )):<h1>No books to display!</h1>}
      </div>
    );
  }
}

export default searchPage;
