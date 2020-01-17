/**
 * Modell von movie
 */
let data = [
  {id:1, title: 'Iron Man', year: '2008'},
  {id:2, title: 'Thor', year: '2011'},
  {id:3, title: 'Captain America', year: '2011'}
];

function getAll() {
  return data;
}

function deleteMovie(id) {
  data = data.filter(movie => movie.id !== id);
}

function get(id){
  return data.find(movie => movie.id===id);
}

module.exports = {
  getAll, deleteMovie, get
}