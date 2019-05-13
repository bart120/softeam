import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  listArticle: Array<Article>;

  constructor() { }

  ngOnInit() {
    this.listArticle = [
      { title: 'test' },
      { title: 'test2' },
      { title: 'test3' }
    ];
  }

}
