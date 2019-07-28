
function validPosition (position) {
  if (this.queens.indexOf(position.y) != -1) return false;
  for (var index=1, length=this.queens.length; index<=length; index++) {
    var queenY = this.queens[index-1];
    if (position.y + (position.x-index) == queenY) return false;
    if (position.y - (position.x-index) == queenY) return false;
  };
  return true;
}

var ChessBoard = new Class({
  pieces: [],
 
  initialize: function(container) {
    this.container = container;
    this.element = new Element('div', {'class': 'board'});
    for (var row=8; row>0; row–) {
      for (var col=1; col<9; col++) {
        var square = new Element('div', {'class': 'square'});
        square.id = "square" + String.fromCharCode(96+col) + row;
        square.addClass(this.isDarkSquare(row,col)?'dark':'light');
        this.element.grab(square);
      }
    }
    this.container.grab(this.element);
  },
 
  isDarkSquare: function(row,col) {
    return ((row%2==0 && col%2==0) || (row%2==1 && col%2==1));
  },
 
  addPiece: function(options) {
    var piece = new Piece(options);
    this.pieces.push(piece);
    this.element.grab(piece.element);
  },
 
  removePiece: function(position) {
    var piece;
    $A(this.pieces).each(function(item) {
      if (item.square.x == position.x && item.square.y == position.y)
        piece = item;
    });
    $A(this.pieces).erase(piece);
    piece.destroy();
  },
 
  removeAll: function() {
    while (this.pieces.length > 0) {
      var piece = this.pieces[this.pieces.length-1];
      piece.destroy();
      this.pieces.length–;
    }
  }
});
 
 
var Piece = new Class({
  Extends: Sprite,
  square: {col:1, row:1},
 
  initialize: function(options) {
    this.options.size = {x:32,y:32};
    this.parent(options);
    this.setFigurine();
    this.moveTo(this.options.square);
  },
 
  setFigurine: function() {
    this.setImage('media/images/icons/chess/'+
            this.options.color + '_' +
            this.options.kind + '_32.png');
  },
 
  moveTo: function(position) {
    if (typeof position == 'string') {
      var parts = position.split("");
      parts[0] = parts[0].charCodeAt(0) – 96;
      this.square.x = parts[1];
      this.square.y = parts[0];
    }
    else if (position instanceof Object) {
      this.square = position;
    }
 
    this.options.position.x = ((this.square.x-1) * 38) + 3;
    this.options.position.y = ((8-this.square.y) * 38) + 3;
    this.animate(this);
  }
});
 
 
var EightQueens = new Class({
  Extends: Thread,
  queens: [],
 
  initialize: function(options) {
    this.parent(options);
    this.board = new ChessBoard($('content'));
    this.currentRow = Random.get(1,8);
    this.logbox = new Element('div', {'class':'log'}).inject($('content'));
 
    this.chkLog = $('chk-log');
 
    $('btn-restart').addEvent('click', function(){
      this.restart();
    }.bind(this));
  },
 
  execute: function() {
    this.addQueen();
    if (this.queens.length == 8) {
      this.stop();
      this.log('Done.');
    }
  },
 
  addQueen: function() {
    var queenAdded = false;
   
    for (var row=this.currentRow; row<=8; row++) {
      var position = {x:this.queens.length+1, y:row};
 
      if (this.validPosition(position)) {
        this.addToBoard(position);
        queenAdded = true;
        this.currentRow = 1;
        break;
      }
    }
   
    if (!queenAdded) {
      this.currentRow = this.queens[this.queens.length-1] + 1;
      this.board.removePiece({x:this.queens.length,y:this.queens[this.queens.length-1]});
      this.queens.length -= 1;
      if (this.queens.length == 0) this.currentRow = Random.get(1,8);
    }
  },
 
  validPosition: function(position) {
    this.log('Testing position: ' + position.x + ',' + position.y);
    if (this.queens.indexOf(position.y) != -1) return false;
    for (var index=1, l=this.queens.length; index<=l; index++) {
      var queenY = this.queens[index-1];
      if (position.y + (position.x-index) == queenY) return false;
      if (position.y – (position.x-index) == queenY) return false;
    };
    return true;
  },
 
  addToBoard: function(position) {
    this.log('Queen added: ' + position.x + ',' + position.y +' – '+ this.queens.toString());
    this.queens.push(position.y);
    this.board.addPiece({kind:'Q', square:position, color:'Yellow'});
  },
 
  log: function(text) {
    if (!this.chkLog.get('checked')) return;
    var p = new Element('p', {'text': text});
    this.logbox.grab(p);
    this.logbox.scrollTop = p.getPosition(this.logbox).y – 296;
  },
 
  restart: function() {
    this.stop();
    this.queens.length = 0;
    this.board.removeAll();
    this.currentRow = Random.get(1,8);
    this.options.interval = $('field-interval').get('value');
    this.logbox.empty();
    this.start();
  }
 
});
 
window.addEvent('domready', function() {
  new EightQueens({interval: $('field-interval').get('value'), autostart: true});
});