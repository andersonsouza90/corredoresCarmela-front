import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minhas-incricoes',
  templateUrl: './minhas-incricoes.component.html',
  styleUrls: ['./minhas-incricoes.component.css']
})
export class MinhasIncricoesComponent implements OnInit {

  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
