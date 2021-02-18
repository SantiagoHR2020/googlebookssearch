import axios from 'axios';

export default {
    getBooks: function(query){
        return axios.get('https://www.googleapis.com/books/v1/volumes?q='+query)
    },
    saveBook: function(bookData){
        return axios.post('/api/books', bookData)
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
      },
}