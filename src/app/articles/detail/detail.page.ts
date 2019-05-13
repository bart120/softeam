import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute, private serv: ArticleService) { }

  ngOnInit() {
    this.serv.getArticleByID(this.route.snapshot.params['id']).subscribe(
      data => this.article = data,
      err => console.warn(err)
    );
  }

}
