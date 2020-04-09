import { Component, OnInit, Input } from '@angular/core';
import {ItemsValues, MenuItems} from '../../shared/interfaces';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  items: any;
  menuArray: any[];
  private data: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {


    this.items = [
      new MenuItems('animals', [
       new ItemsValues('fish', 'Fishes'),
       new ItemsValues('amphibians', 'Amphibians')
      ]),
      new MenuItems('animals1')
    ];

    this.menuArray = [
      {
        "key":"something.front_page",
        "title":"First Item",
        "link":"http://dev.something.com/",
      },
      {
        "key":"something.front_page",
        "title":"Second item",
        "link":"http://dev.something.com/",
      },
      {
        "key":"78dc07e5-399a-46b3-86a5-f7141c55579e",
        "title":"Third able to render a list",
        "link":"/articles",
        "below":[
          {
            "key":"a7f279d6-7664-4adf-8a0f-25da95502143",
            "title":"Grid34 in materialc1 I was able to render a list5",
            "link": "/articles/grid",

          },
          {
            "key":"456b0042-eb0f-4bf9-8d9a-a6c85d3e9e71",
            "title":"List34 in materialc1 I was able to render a list5",
            "link": "/articles/list",
            "below":[
              {
                "key":"a7f279d6-7664-4adf-8a0f-25da95502143",
                "title":"Grid34in materialc1 I was able to render a list 5",
                "link": "/articles/grid",

              },
              {
                "key":"456b0042-eb0f-4bf9-8d9a-a6c85d3e9e71",
                "title":"List34 buttons inside my material menu as below:5",
                "link": "/articles/list",
              },
              {
                "key":"a7f279d6-7664-4adf-8a0f-25da95502143",
                "title":"Grid3 buttons inside my material menu as below:45",
                "link": "/articles/grid",

              },
              {
                "key":"456b0042-eb0f-4bf9-8d9a-a6c85d3e9e71",
                "title":"List3 buttons inside my material menu as below: 45",
                "link": "/articles/list",
              }
            ]
          },

        ]
      }
    ];
  }

}

