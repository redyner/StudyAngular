import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string = 'X';
  winner: string = '';
  turno: number = 0;
  board: string[][] = 
  [
    ['','',''],
    ['','',''],
    ['','','']
  ]

  processPlay(line: number, column: number){
    if(this.board[line][column] == '' && this.winner == '')
    {
      this.turno++;

      this.board[line][column] = this.currentPlayer;

      this.winner = this.checkWinner(this.currentPlayer);

      if(this.currentPlayer==='X')
        this.currentPlayer = 'O'
      else
        this.currentPlayer = 'X'
    }
  }

  reset()
  {
    this.currentPlayer = 'X';
    this.winner = '';
    this.turno = 0;
    this.board = 
    [
      ['','',''],
      ['','',''],
      ['','','']
    ]
  }

  checkWinner(player: string)
  {
    for(let i = 0; i< this.board.length; i++)
    {
      if(this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player)      
        return `${player} venceu!`;
      if(this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player)
        return `${player} venceu!`;
    }
    
    if(this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player)
      return `${player} venceu!`;
    if(this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player)
      return `${player} venceu!`;

    if(this.turno == 9)
        return 'Empate';

    return '';
  }


}
