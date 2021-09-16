import { Component, OnInit, Input } from '@angular/core';
// Input looks for props passed into app-button from parent

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  //using Input to have access to the props
  @Input() text: string | undefined;
  @Input() color: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  //add in events
  onClick() {
    console.log('add')
  }


}
