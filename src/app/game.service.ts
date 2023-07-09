import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Game} from "./game";
import {environment} from "../environments/environment";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(
    private http: HttpClient
  ) {
  }

  getGames(brandid: number, country: string) {
    return this.http.post<Game[]>(environment.apiUrl + environment.gamesPath, {
      brandid: brandid,
      country: country
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        alert(error.error.message);
        return throwError(() => new Error(error.error.message));
      })
    );
  }
}
