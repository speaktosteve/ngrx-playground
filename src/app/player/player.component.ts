import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlayer } from '../store/player.entity';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  @Input() player!: IPlayer;
  @Output() pick = new EventEmitter<IPlayer>();
  @Output() unPick = new EventEmitter<IPlayer>();

  isChecked: boolean = false;

  pickButtonClicked() {
    this.isChecked
      ? this.pick.emit(this.player)
      : this.unPick.emit(this.player);
  }
}
