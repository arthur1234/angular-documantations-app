import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

import {ReqResService} from '../../services/req-res.service';
import {Post} from '../../shared/interfaces';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})

export class EditDocumentComponent implements OnInit, OnDestroy {

  @Input()  postData: Post;

  form: FormGroup;
  post: Post;
  uSub: Subscription;
  editorStyle: object = {
    height: '250px',
    backgroundColor: 'lightgray'
  }

  constructor(
    private route: ActivatedRoute,
    private reqResService: ReqResService
  ) { }

  selectValue( newValue : any ) {
    this.postData.code=newValue;
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(null, Validators.required ),
      text: new FormControl(null, Validators.required ),
      author: new FormControl(null, Validators.required)
    });
    this.post = this.postData;

  }

  submit() {

    if (this.form.invalid) {
      return;
    }

    this.post= {
      _id: null,
      title: this.form.value.title,
      author: this.form.value.author,
      code: this.postData.code,
      text: this.form.value.text
    };

    this.uSub = this.reqResService
      .create(this.post)
      .subscribe(() => {
        this.form.reset();
       })

    console.log(this.post);
  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }


}
