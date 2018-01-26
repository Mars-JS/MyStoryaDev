import axios from "axios";

export default {

  createBook: function(data) {
    return axios("/api/books/create", data);
  },

  getAll: function() {
    return axios("/api/books/all");
  },

  getByGenre: function(data) {
    return axios("/api/books/genre", data);
  },

  getByUser: function(data) {
    return axios("/api/books/user/" + data);
  },

  getById: function(data) {
    return axios("/api/books/bookid/" + data);
  },

  getByViews: function() {
    return axios("/api/books/popular");
  }

};
