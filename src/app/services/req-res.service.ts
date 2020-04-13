import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Post} from '../shared/interfaces';


@Injectable({providedIn: 'root'})
export class ReqResService {
  constructor(private http: HttpClient) {
  }


  getById(id: string){

  }

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.hostURL}/users/create_document`, post)
      .pipe(map((response: any) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        };
      }));


  }

  save(post: Post) {

  }
}


/*


 public  register(user: TokenPayload) {
    const base = this.http.post(`${environment.hostURL}/users/register`, user);
    const  request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
      })
    );
    return request;
  }


 */
