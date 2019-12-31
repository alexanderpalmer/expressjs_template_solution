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
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <table>
        <thead>
          <tr>
            <th>ID</td>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          ${movies.map(movie=> `
            <tr>
              <td>${movie.id}</td>
              <td>${movie.title}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </body>
`;
}

module.exports = {render}