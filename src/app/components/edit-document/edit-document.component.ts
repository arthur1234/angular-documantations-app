import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ReqResService} from '../../services/req-res.service';
import {Post} from '../../shared/interfaces';



@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {

  @Input()  postData: Post;

  form: FormGroup;
  post: Post;
  submitted: boolean;
  uSub: Subscription;
  editorStyle: object = {
    height: '250px',
    backgroundColor: 'lightgray'
  }

  constructor(
    private route: ActivatedRoute,
    private reqResService: ReqResService
    /*,
    private postsService: PostsService,
    private alert: AlertService*/
  ) { }

  selectValue( newValue : any ) {
    this.postData.code=newValue;
    console.log(newValue);
  }

  ngOnInit(): void {



    this.form = new FormGroup({
      title: new FormControl(null, Validators.required ),
      text: new FormControl(null, Validators.required ),
      author: new FormControl(null, Validators.required)
    });
    this.post = this.postData;

    console.log(this.post.title)

    // this.route.params.pipe(
    //   switchMap( ( Params) => {
    //     console.log(Params);
    //     return '';
    //   })
    // )
  }

  submit() {
    console.log(this.postData.code)
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
        // this.alert.success('Post created.');
       })

    console.log(this.post);
  }


}
