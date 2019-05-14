import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response.model';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private authSubject = new BehaviorSubject(false);

    get auth(): Observable<boolean> {
        return this.authSubject.asObservable();
    }

    constructor(private http: HttpClient, private storage: Storage) { }

    login(login: string, password: string): Observable<AuthResponse> {
        return this.http.post(`${environment.urlAuth}?grant_type=password&username=${login}&password=${password}`, '').pipe(
            tap(async (resp: AuthResponse) => {
                console.log(`resp: ${resp}`);
                await this.storage.set('ACCESS_TOKEN', 'resp.access_token');
                await this.storage.set('EXPIRES_IN', resp.expires_in);
                this.authSubject.next(true);
            })
        );
    }

    async logout() {
        await this.storage.remove('ACCESS_TOKEN');
        await this.storage.remove('EXPIRES_IN');
        this.authSubject.next(false);
    }

}
