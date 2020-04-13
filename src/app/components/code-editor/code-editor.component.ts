
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import 'brace/theme/github';
import 'brace/mode/sql';
declare let ace: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements AfterViewInit {


  contentAutoUpdate = '';

  @ViewChild('highlight') highlight;
  @ViewChild('editorInfinity') editorInfinity;

  onRuleChange(e) {
    console.log(e);
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
