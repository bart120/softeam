import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    opt = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    constructor(private http: HttpClient) { }


    getAllArticle(): Observable<Array<Article>> {

        return this.http.get<Array<Article>>(environment.urlArticle, this.opt);
    }

    getArticleByID(id: number): Observable<Article> {
        return this.http.get<Article>(`${environment.urlArticle}/${id}`, this.opt);
    }
}
