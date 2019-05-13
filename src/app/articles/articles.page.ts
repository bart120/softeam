import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  listArticle: Array<Article>;

  constructor(private serv: ArticleService, private router: Router) {

  }

  ngOnInit() {
    /* this.listArticle = [
       { title: 'test' },
       { title: 'test2' },
       { title: 'test3' }
     ];*/

    this.serv.getAllArticle().subscribe(
      data => this.listArticle = data,
      err => console.error(err)
    );
  }

  detailArticle(id: number): void {
    this.router.navigate([`/articles/detail/${id}`]);
  }

}
