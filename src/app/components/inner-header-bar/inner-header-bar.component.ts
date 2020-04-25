import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-inner-header-bar',
  templateUrl: './inner-header-bar.component.html',
  styleUrls: ['./inner-header-bar.component.scss']
})
export class InnerHeaderBarComponent implements OnInit {

  @Output() editMode = new EventEmitter;
  onEditFlag: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.onEditFlag = !this.onEditFlag;
    this.editMode.emit(this.onEditFlag);
  }
}
