import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  @Input() title: string = '';
  expanded?: boolean;

  changeExpanded()
  {
    if(this.expanded)
      this.expanded = false;
    else
      this.expanded = true;
  }

}
