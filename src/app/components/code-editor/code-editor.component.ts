
import {Component, ViewChild, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import 'brace/theme/github';
import 'brace/mode/sql';
import {ControlValueAccessor} from '@angular/forms';
declare let ace: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements AfterViewInit {

  @Input() codeStr: string;
  @Output() onSelectValue = new EventEmitter;


  @ViewChild('highlight') highlight;
  @ViewChild('editorInfinity') editorInfinity;

  onRuleChange(e) {
    console.log(e);
    this.onSelectValue.emit( e );
  }

  ngAfterViewInit() {
    const Range = ace.require('ace/range')['Range'];

   /* this.highlight
      .getEditor()
      .session.addMarker(new Range(0, 0, 2, 1), 'myMarker', 'fullLine');
*/
    /*this.firstEditor
      .getEditor()
      .session
      .setOption('useWorker', true);*/
  }
}
