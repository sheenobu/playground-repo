/**
 * Javascript API client that references stubs hosted in the
 * current directory. 
 */

var boardData = {

  'boards':
      [
        'board1',
        'board2',
        'board3'
      ],

  'columns':
      {
        'board1': [
          'column1',
          'column2',
          'column3'
        ],
        'board2': [],
        'board3': ['column4', 'column1'],
      },

  'items': 
    {
      'column1': [
        'item1',
        'item2'],

      'column2': [],
      'column3': ['item1','item3'],
      'column4': ['item5','item6']
    },
     
  'comments': 
    {
      'item1': ['comment1', 'comment2']
    }

};


var KboardRestClientClz = function() {
  
  /**
   * Authentication function, sending two arguments
   * to the callback, true and undefined to indicate a successful authentication,
   * and false and dictionary of errors for a failed authentication.
   */
  var authenticate = function authenticateF(callback) {
    callback(true,undefined);
  };

  /**
   * Gets the boards available to the user. 
   */
  var getBoards = function getBoardsF(callback) {
    callback(boardData.boards, undefined);
  };
 
  /** 
   * Gets the columns related to a specific board.
   */
  var getColumnsForBoard = function getColumnsForBoardF(board, callback) {
    callback(boardData.columns[board], undefined);
  };

  /**
   * Gets the items related to a specific column.
   */
  var getItemsForColumn = function getItemsForBoardF(column, callback) {
    callback(boardData.items[column], undefined);
  };

  this.authenticate = authenticate;
  this.getBoards = getBoards;
  this.getColumnsForBoard = getColumnsForBoard;
  this.getItemsForColumn = getItemsForColumn;

  return this;
};

var KboardRestClient = new KboardRestClientClz();

