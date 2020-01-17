/**
 * View von movie
 * @param {*} movies Array mit Objekten 
 */
function render(movies) {
return `
  <!doctype html>
    <head>
      <meta charset="utf-8">
      <title>Movie list</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <table>
        <thead>
          <tr>
            <th>ID</td>
            <th>Title</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${movies.map(movie=> `
            <tr>
              <td>${movie.id}</td>
              <td>${movie.title}</td>
              <td><a href="/movie/delete/${movie.id}">löschen</a></td>
              <td><a href="/movie/form/${movie.id}">bearbeiten</a></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <a href="/movie/form">neu</a>
    </body>
`;
}

module.exports = {render}