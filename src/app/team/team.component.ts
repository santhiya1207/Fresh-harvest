import { Component,OnInit } from '@angular/core';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  Icon1 = faTractor;
  Icon2=faPhone;
  Icon3=faAward;
  Icon4=faSeedling;
  Icon5=faLeaf;
  constructor() { }
  ngOnInit() {
  }
}
