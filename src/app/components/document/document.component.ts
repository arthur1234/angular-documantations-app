import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { CodeEditorComponent} from '../code-editor/code-editor.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../shared/interfaces';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor() { }

  onEditFlag: boolean = false;
  response: HighlightResult;

  code = `function myFunction() {
            document.getElementById("demo1").innerHTML = "Hello there!";
            document.getElementById("demo2").innerHTML = "How are you?";

          }
          var xsdf= 'sdfsdf';`;

  images: any;
  postData: Post;

  ngOnInit(): void {

    this.postData = {
      _id: null,
      title: 'this.form.value.title',
      author: 'this.form.value.author',
      code: 'this.form.value.code',
      text: 'this.form.value.text'
    }
    this.images = [
      'http://tsidkilov.online/museit/wp-content/uploads/2019/01/3.5-11.png',

      'http://www.sirajalilm.com/wp-content/uploads/2019/12/slide_the-1.jpg',
      'http://tsidkilov.online/museit/wp-content/uploads/2019/01/3.6.png',
      'http://tsidkilov.online/museit/wp-content/uploads/2019/01/3.8.png',
      'http://www.sirajalilm.com/wp-content/uploads/2019/12/slide_the-1.jpg'
    ];



  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    };
  }

  editMode (openEditMode: boolean){
    this.onEditFlag = openEditMode;
  }
}
