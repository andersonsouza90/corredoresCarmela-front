import { Component, OnInit } from '@angular/core';
import { faBookOpen, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faBookOpen = faBookOpen;
  faPencilAlt = faPencilAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
