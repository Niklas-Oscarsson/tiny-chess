/*
pawn = "fas fa-chess-pawn"
rook = "fas fa-chess-rook"
knight = "fas fa-chess-knight"
bishop = "fas fa-chess-"
queen = "fas fa-chess-queen"
king = "fas fa-chess-king"
 */

const rows = ['A','B','C','D','E','F','G','H']
let Sq = {}
for (let i=1;i<9;i++){
    for (let r=0;r<8;r++){
        Sq[`${rows[r]}${i}`] = document.querySelector(`.${rows[r]}${i}`)
    }
}


class game{
    board:any;
    constructor() {
        this.board = new boards();

    }
    createPieces(yourColor, opponent){
        let set = {
            //Create white pieces
            //pawns
            wPawn1: new pawn('pawn', yourColor, 0, 1, ['fas','fa-chess-pawn']),
            wPawn2: new pawn('pawn', yourColor, 1, 1, ['fas','fa-chess-pawn']),
            wPawn3: new pawn('pawn', yourColor, 2, 1, ['fas','fa-chess-pawn']),
            wPawn4: new pawn('pawn', yourColor, 3, 1, ['fas','fa-chess-pawn']),
            wPawn5: new pawn('pawn', yourColor, 4, 1, ['fas','fa-chess-pawn']),
            wPawn6: new pawn('pawn', yourColor, 5, 1, ['fas','fa-chess-pawn']),
            wPawn7: new pawn('pawn', yourColor, 6, 1, ['fas','fa-chess-pawn']),
            wPawn8: new pawn('pawn', yourColor, 7, 1, ['fas','fa-chess-pawn']),
            //rooks
            wRook1: new rook('rook', yourColor, 0, 0, ['fas','fa-chess-rook']),
            wRook2: new rook('rook', yourColor, 7, 0, ['fas','fa-chess-rook']),
            //knights
            wKnight1: new knight('knight', yourColor, 1, 0, ['fas','fa-chess-knight']),
            wKnight2: new knight('knight', yourColor, 6, 0, ['fas','fa-chess-knight']),
            //bishops
            wBishop1: new bishop('bishop', yourColor, 2, 0, ['fas','fa-chess-bishop']),
            wBishop2: new bishop('bishop', yourColor, 5, 0, ['fas','fa-chess-bishop']),
            //king and queen
            wQueen1: new queen('queen', yourColor, 3, 0, ['fas','fa-chess-queen']),
            wKing: new king('king', yourColor, 4, 0, ['fas','fa-chess-king']),

            //Create black pieces
            //pawns
            bPawn1: new pawn('pawn', opponent, 0, 6, ['fas','fa-chess-pawn']),
            bPawn2: new pawn('pawn', opponent, 1, 6, ['fas','fa-chess-pawn']),
            bPawn3: new pawn('pawn', opponent, 2, 6, ['fas','fa-chess-pawn']),
            bPawn4: new pawn('pawn', opponent, 3, 6, ['fas','fa-chess-pawn']),
            bPawn5: new pawn('pawn', opponent, 4, 6, ['fas','fa-chess-pawn']),
            bPawn6: new pawn('pawn', opponent, 5, 6, ['fas','fa-chess-pawn']),
            bPawn7: new pawn('pawn', opponent, 6, 6, ['fas','fa-chess-pawn']),
            bPawn8: new pawn('pawn', opponent, 7, 6, ['fas','fa-chess-pawn']),
            //rooks
            bRook1: new rook('rook', opponent, 0, 7, ['fas','fa-chess-rook']),
            bRook2: new rook('rook', opponent, 7, 7, ['fas','fa-chess-rook']),
            //knights
            bKnight1: new knight('knight', opponent, 1, 7, ['fas','fa-chess-knight']),
            bKnight2: new knight('knight', opponent, 6, 7, ['fas','fa-chess-knight']),
            //bishops
            bBishop1: new bishop('bishop', opponent, 2, 7, ['fas','fa-chess-bishop']),
            bBishop2: new bishop('bishop', opponent, 5, 7, ['fas','fa-chess-bishop']),
            //king and queen
            bQueen1: new queen('queen', opponent, 3, 7,['fas','fa-chess-queen']),
            bKing: new king('king', opponent, 4, 7, ['fas','fa-chess-king']),
        }
        return set
    }
    setBoard(yourColor, opponent){
        const boards = this.board.board
        let set = this.createPieces(yourColor, opponent)
        console.log()

        //Set your pieces
        boards[set.wPawn1.positionY][set.wPawn1.positionX].push(set.wPawn1);
        boards[set.wPawn2.positionY][set.wPawn2.positionX].push(set.wPawn2);
        boards[set.wPawn3.positionY][set.wPawn3.positionX].push(set.wPawn3);
        boards[set.wPawn4.positionY][set.wPawn4.positionX].push(set.wPawn4);
        boards[set.wPawn5.positionY][set.wPawn5.positionX].push(set.wPawn5);
        boards[set.wPawn6.positionY][set.wPawn6.positionX].push(set.wPawn6);
        boards[set.wPawn7.positionY][set.wPawn7.positionX].push(set.wPawn7);
        boards[set.wPawn8.positionY][set.wPawn8.positionX].push(set.wPawn8);
        boards[set.wRook1.positionY][set.wRook1.positionX].push(set.wRook1);
        boards[set.wRook2.positionY][set.wRook2.positionX].push(set.wRook2);
        boards[set.wKnight1.positionY][set.wKnight1.positionX].push(set.wKnight1);
        boards[set.wKnight2.positionY][set.wKnight2.positionX].push(set.wKnight2);
        boards[set.wBishop1.positionY][set.wBishop1.positionX].push(set.wBishop1);
        boards[set.wBishop2.positionY][set.wBishop2.positionX].push(set.wBishop2);
        boards[set.wQueen1.positionY][set.wQueen1.positionX].push(set.wQueen1);
        boards[set.wKing.positionY][set.wKing.positionX].push(set.wKing);
        //Set opponents pieces
        //Set White pieces
        boards[set.bPawn1.positionY][set.bPawn1.positionX].push(set.bPawn1);
        boards[set.bPawn2.positionY][set.bPawn2.positionX].push(set.bPawn2);
        boards[set.bPawn3.positionY][set.bPawn3.positionX].push(set.bPawn3);
        boards[set.bPawn4.positionY][set.bPawn4.positionX].push(set.bPawn4);
        boards[set.bPawn5.positionY][set.bPawn5.positionX].push(set.bPawn5);
        boards[set.bPawn6.positionY][set.bPawn6.positionX].push(set.bPawn6);
        boards[set.bPawn7.positionY][set.bPawn7.positionX].push(set.bPawn7);
        boards[set.bPawn8.positionY][set.bPawn8.positionX].push(set.bPawn8);
        boards[set.bRook1.positionY][set.bRook1.positionX].push(set.bRook1);
        boards[set.bRook2.positionY][set.bRook2.positionX].push(set.bRook2);
        boards[set.bKnight1.positionY][set.bKnight1.positionX].push(set.bKnight1);
        boards[set.bKnight2.positionY][set.bKnight2.positionX].push(set.bKnight2);
        boards[set.bBishop1.positionY][set.bBishop1.positionX].push(set.bBishop1);
        boards[set.bBishop2.positionY][set.bBishop2.positionX].push(set.bBishop2);
        boards[set.bQueen1.positionY][set.bQueen1.positionX].push(set.bQueen1);
        boards[set.bKing.positionY][set.bKing.positionX].push(set.bKing);

        this.setPieces(set, boards)

        return boards
    }
    setPieces(set, boards){
        boards.forEach(columns => columns.forEach(square =>{
            if(square[1]){
                square[1].model.forEach(classes => square[0].classList.add(classes))
                square[0].classList.add(square[1].color)
            }
            console.log(square)
        }))
    }
}

class boards{
    board: any[][][]
    constructor() {
        this.board = [
            [[boardSquares['A1']],[boardSquares['B1']],[boardSquares['C1']],[boardSquares['D1']],[boardSquares['E1']],[boardSquares['F1']],[boardSquares['G1']],[boardSquares['H1']]],
            [[boardSquares['A2']],[boardSquares['B2']],[boardSquares['C2']],[boardSquares['D2']],[boardSquares['E2']],[boardSquares['F2']],[boardSquares['G2']],[boardSquares['H2']]],
            [[boardSquares['A3']],[boardSquares['B3']],[boardSquares['C3']],[boardSquares['D3']],[boardSquares['E3']],[boardSquares['F3']],[boardSquares['G3']],[boardSquares['H3']]],
            [[boardSquares['A4']],[boardSquares['B4']],[boardSquares['C4']],[boardSquares['D4']],[boardSquares['E4']],[boardSquares['F4']],[boardSquares['G4']],[boardSquares['H4']]],
            [[boardSquares['A5']],[boardSquares['B5']],[boardSquares['C5']],[boardSquares['D5']],[boardSquares['E5']],[boardSquares['F5']],[boardSquares['G5']],[boardSquares['H5']]],
            [[boardSquares['A6']],[boardSquares['B6']],[boardSquares['C6']],[boardSquares['D6']],[boardSquares['E6']],[boardSquares['F6']],[boardSquares['G6']],[boardSquares['H6']]],
            [[boardSquares['A7']],[boardSquares['B7']],[boardSquares['C7']],[boardSquares['D7']],[boardSquares['E7']],[boardSquares['F7']],[boardSquares['G7']],[boardSquares['H7']]],
            [[boardSquares['A8']],[boardSquares['B8']],[boardSquares['C8']],[boardSquares['D8']],[boardSquares['E8']],[boardSquares['F8']],[boardSquares['G8']],[boardSquares['H8']]]
        ]
    }
}

class piece{
    color: string;
    positionX: number;
    positionY: number;
    type: string;
    model: string[];

    constructor(type, color, positionX, positionY, model) {
        this.type = type
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.model=model;
    }
}

class pawn extends piece{
    moved: boolean;


    constructor(type, color, positionX, positionY, model, moved=false) {
        super(type, color, positionX, positionY, model)
        this.moved=moved;
    }
    movement(){
        //if (this.color==="white" && !this.moved && ){  //Movement logic

        //}
    }

}
class rook extends piece{
    moved: boolean;


    constructor(type, color, positionX, positionY, model, moved=false) {
        super(type, color, positionX, positionY, model)
        this.moved=moved;
    }
    movement(){
        //if (this.color==="white" && !this.moved &&  &&){  //Movement logic

        //}
    }
}
class knight extends piece{

}
class bishop extends piece{

}
class queen extends piece{

}
class king extends piece{
    moved: boolean;


    constructor(type, color, positionX, positionY, model, moved=false) {
        super(type, color, positionX, positionY, model)
        this.moved=moved;
    }
    movement(){
        //if (this.color==="white" && !this.moved &&  &&){  //Movement logic

        //}
    }
}

let chessBoard = new game()

let games = chessBoard.setBoard('white', 'black');

/*
console.log(boardSquares)
console.log(chessBoard)*/
