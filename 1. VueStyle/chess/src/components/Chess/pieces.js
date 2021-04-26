export class pawn{
  constructor(pos){
    this.img = 'fas fa-chess-pawn'
    this.pos = pos
    this.moved = false
  }
  say(){
    
    return 'Morning your lordship'
  }
  setup(){
    console.log(this.pos);
  }
}

