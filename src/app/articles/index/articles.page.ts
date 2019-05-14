import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  listArticle: Array<Article>;

  constructor(private serv: ArticleService, private router: Router, private cal: Calendar) {

  }

  ngOnInit() {
    /* this.listArticle = [
       { title: 'test' },
       { title: 'test2' },
       { title: 'test3' }
     ];*/

    this.serv.getAllArticle().subscribe(
      data => this.listArticle = data,
      err => alert(err)
    );
  }

  detailArticle(id: number): void {
    this.router.navigate([`/articles/detail/${id}`]);
  }

  doRefresh(ev: any): void {
    this.serv.getAllArticle().subscribe(
      data => {
        this.listArticle = data;
        ev.target.complete();
      },
      err => {
        console.error(err);
        ev.target.complete();
      }
    );
  }

  addCalendar(item: Article) {

    this.cal.createEvent(item.title, '', '', new Date(2019, 5, 14), new Date(2019, 5, 15)).then(
      data => console.log('evenement créé')
    ).catch(
      err => console.error(err)
    );
  }

}
