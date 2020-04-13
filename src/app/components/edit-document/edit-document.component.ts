import { Component, OnInit } from '@angular/core';

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

  form: FormGroup;
 // post: Post;
  submitted: boolean;
  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private reqResService: ReqResService
    /*,
    private postsService: PostsService,
    private alert: AlertService*/
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl(null, Validators.required ),
      text: new FormControl(null, Validators.required ),
      author: new FormControl(null, Validators.required)
    });





    // this.route.params.pipe(
    //   switchMap( ( Params) => {
    //     console.log(Params);
    //     return '';
    //   })
    // )
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date()
    };

    this.reqResService.create(post).subscribe(() => {
      this.form.reset();
      // this.alert.success('Post created.');
    })

    console.log(post);
  }


}
