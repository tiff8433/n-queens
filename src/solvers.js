/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

var findRookSolution = function(board, startRow, rows, callback) {
  if( startRow === rows ) {
    return callback(board);
  }

  for( var i = 0; i < rows; i++ ) {
    board.togglePiece(startRow, i);
    if( !board.hasAnyRooksConflicts() ) {
      var result = findRookSolution(board, startRow+1, rows, callback);
      if( result ){ return result; }
    }
    board.togglePiece(startRow, i);
  }
};

window.findNRooksSolution = function(n) {

  var solution;
  var board = new Board({n:n});

  findRookSolution(board, 0, n, function(board) {
    return solution = board.rows();
  });
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = 0;
  var board = new Board({n:n});

  findRookSolution(board, 0, n, function(board) {
    solutionCount++;
  });
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



var findQueenSolution = function(board, startRow, rows, callback) {
  if( startRow === rows ) {
    return callback(board);
  }

  for( var i = 0; i < rows; i++ ) {
    board.togglePiece(startRow, i);
    if( !board.hasAnyQueensConflicts() ) {
      var result = findQueenSolution(board, startRow+1, rows, callback);
      if( result ){ return result; }
    }
    board.togglePiece(startRow, i);
  }
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var board = new Board({n:n});
  var solution = board.rows();
  // If no solution exists, function will return the original unaltered board

  findQueenSolution(board, 0, n, function(board) {
    return solution = board.rows();
  });
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var solutionCount = 0;
  var board = new Board({n:n});

  findQueenSolution(board, 0, n, function(board) {
    solutionCount++;
  });
  
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
