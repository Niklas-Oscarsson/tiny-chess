class chessBoard{
    constructor(){
        this.board = [
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]],
            [[],[],[],[],[],[],[],[]]
        ]
        this.pos = {
            A1:this.board[1][1],
            A2:this.board[2][1],
            A3:this.board[3][1],
            A4:this.board[4][1],
            A5:this.board[5][1],
            A6:this.board[6][1],
            A7:this.board[7][1],
            A8:this.board[8][1],

            B1:this.board[1][2],
            B2:this.board[2][2],
            B3:this.board[3][2],
            B4:this.board[4][2],
            B5:this.board[5][2],
            B6:this.board[6][2],
            B7:this.board[7][2],
            B8:this.board[8][2],

            C1:this.board[1][3],
            C2:this.board[2][3],
            C3:this.board[3][3],
            C4:this.board[4][3],
            C5:this.board[5][3],
            C6:this.board[6][3],
            C7:this.board[7][3],
            C8:this.board[8][3],

            D1:this.board[1][4],
            D2:this.board[2][4],
            D3:this.board[3][4],
            D4:this.board[4][4],
            D5:this.board[5][4],
            D6:this.board[6][4],
            D7:this.board[7][4],
            D8:this.board[8][4],

            E1:this.board[1][5],
            E2:this.board[2][5],
            E3:this.board[3][5],
            E4:this.board[4][5],
            E5:this.board[5][5],
            E6:this.board[6][5],
            E7:this.board[7][5],
            E8:this.board[8][5],

            F1:this.board[1][6],
            F2:this.board[2][6],
            F3:this.board[3][6],
            F4:this.board[4][6],
            F5:this.board[5][6],
            F6:this.board[6][6],
            F7:this.board[7][6],
            F8:this.board[8][6],

            G1:this.board[1][7],
            G2:this.board[2][7],
            G3:this.board[3][7],
            G4:this.board[4][7],
            G5:this.board[5][7],
            G6:this.board[6][7],
            G7:this.board[7][7],
            G8:this.board[8][7],

            H1:this.board[1][8],
            H2:this.board[2][8],
            H3:this.board[3][8],
            H4:this.board[4][8],
            H5:this.board[5][8],
            H6:this.board[6][8],
            H7:this.board[8][8],
            H8:this.board[9][8],
        }
        
    };
  }
  
  export {chessBoard}