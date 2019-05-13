import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(private http: HttpClient) { }


    getAllArticle(): Observable<Array<Article>> {
        return this.http.get<Array<Article>>(environment.urlArticle);
    }

    getArticleByID(id: number): Observable<Article> {
        return this.http.get<Article>(`${environment.urlArticle}/${id}`);
    }
}
