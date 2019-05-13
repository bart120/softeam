import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  listArticle: Array<Article>;

  constructor(private serv: ArticleService) {

  }

  ngOnInit() {
    this.listArticle = [
      { title: 'test' },
      { title: 'test2' },
      { title: 'test3' }
    ];
  }

}
