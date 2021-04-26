class chessBoard{
  board: any[][][];
  constructor(){
    this.board = [
      [[document.querySelector('.A1')],['B1'],['C1'],['D1'],['E1'],['F1'],['G1'],['H1']],
      [['A2'],['B2'],['C2'],['D2'],['E2'],['F2'],['G2'],['H2']],
      [['A3'],['B3'],['C3'],['D3'],['E3'],['F3'],['G3'],['H3']],
      [['A4'],['B4'],['C4'],['D4'],['E4'],['F4'],['G4'],['H4']],
      [['A5'],['B5'],['C5'],['D5'],['E5'],['F5'],['G5'],['H5']],
      [['A6'],['B6'],['C6'],['D6'],['E6'],['F6'],['G6'],['H6']],
      [['A7'],['B7'],['C7'],['D7'],['E7'],['F7'],['G7'],['H7']],
      [['A8'],['B8'],['C8'],['D8'],['E8'],['F8'],['G8'],['H8']]
    ]
  };
  createVisualBoard(){
    const gameArea = document.querySelector('#gameArea');
    const newGame = document.createElement('DIV')
    newGame.innerHTML = `
      <div class="place-board">
          <div class="scale-board">
              <div id="board">
                  <div name="A8" id="A8"><i class="A8" ></i></div> <div name="B8" id="B8"><i class="B8" ></i></div> <div name="C8" id="C8"><i class="C8" ></i></div> <div name="D8" id="D8"><i class="D8" ></i></div> <div name="E8" id="E8"><i class="E8" ></i></div> <div name="F8" id="F8"><i class="F8" ></i></div> <div name="G8" id="G8"><i class="G8" ></i></div> <div name="H8" id="H8"><i class="H8" ></i></div>
                  <div name="A7" id="A7"><i class="A7" ></i></div> <div name="B7" id="B7"><i class="B7" ></i></div> <div name="C7" id="C7"><i class="C7" ></i></div> <div name="D7" id="D7"><i class="D7" ></i></div> <div name="E7" id="E7"><i class="E7" ></i></div> <div name="F7" id="F7"><i class="F7" ></i></div> <div name="G7" id="G7"><i class="G7" ></i></div> <div name="H7" id="H7"><i class="H7" ></i></div>
                  <div name="A6" id="A6"><i class="A6" ></i></div> <div name="B6" id="B6"><i class="B6" ></i></div> <div name="C6" id="C6"><i class="C6" ></i></div> <div name="D6" id="D6"><i class="D6" ></i></div> <div name="E6" id="E6"><i class="E6" ></i></div> <div name="F6" id="F6"><i class="F6" ></i></div> <div name="G6" id="G6"><i class="G6" ></i></div> <div name="H6" id="H6"><i class="H6" ></i></div>
                  <div name="A5" id="A5"><i class="A5" ></i></div> <div name="B5" id="B5"><i class="B5" ></i></div> <div name="C5" id="C5"><i class="C5" ></i></div> <div name="D5" id="D5"><i class="D5" ></i></div> <div name="E5" id="E5"><i class="E5" ></i></div> <div name="F5" id="F5"><i class="F5" ></i></div> <div name="G5" id="G5"><i class="G5" ></i></div> <div name="H5" id="H5"><i class="H5" ></i></div>
                  <div name="A4" id="A4"><i class="A4" ></i></div> <div name="B4" id="B4"><i class="B4" ></i></div> <div name="C4" id="C4"><i class="C4" ></i></div> <div name="D4" id="D4"><i class="D4" ></i></div> <div name="E4" id="E4"><i class="E4" ></i></div> <div name="F4" id="F4"><i class="F4" ></i></div> <div name="G4" id="G4"><i class="G4" ></i></div> <div name="H4" id="H4"><i class="H4" ></i></div>
                  <div name="A3" id="A3"><i class="A3" ></i></div> <div name="B3" id="B3"><i class="B3" ></i></div> <div name="C3" id="C3"><i class="C3" ></i></div> <div name="D3" id="D3"><i class="D3" ></i></div> <div name="E3" id="E3"><i class="E3" ></i></div> <div name="F3" id="F3"><i class="F3" ></i></div> <div name="G3" id="G3"><i class="G3" ></i></div> <div name="H3" id="H3"><i class="H3" ></i></div>
                  <div name="A2" id="A2"><i class="A2" ></i></div> <div name="B2" id="B2"><i class="B2" ></i></div> <div name="C2" id="C2"><i class="C2" ></i></div> <div name="D2" id="D2"><i class="D2" ></i></div> <div name="E2" id="E2"><i class="E2" ></i></div> <div name="F2" id="F2"><i class="F2" ></i></div> <div name="G2" id="G2"><i class="G2" ></i></div> <div name="H2" id="H2"><i class="H2" ></i></div>
                  <div name="A1" id="A1"><i class="A1" ></i></div> <div name="B1" id="B1"><i class="B1" ></i></div> <div name="C1" id="C1"><i class="C1" ></i></div> <div name="D1" id="D1"><i class="D1" ></i></div> <div name="E1" id="E1"><i class="E1" ></i></div> <div name="F1" id="F1"><i class="F1" ></i></div> <div name="G1" id="G1"><i class="G1" ></i></div> <div name="H1" id="H1"><i class="H1" ></i></div>
              </div>
          </div>
      </div>
    `
    gameArea.append(newGame)
  };
}

export {chessBoard}