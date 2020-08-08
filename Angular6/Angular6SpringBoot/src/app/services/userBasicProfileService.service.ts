import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
  export class UserBasicProfileService {
   
    private baseUrl = 'http://localhost:8085/marathalagnyog';

    constructor(private http: HttpClient) { }

    getUserBasicProfileList(): Observable<any> {  
      return this.http.get(this.baseUrl+ '/getUserBasicProfiles');
    }
     
    getUserBasicProfileByProfileId(profileId): Observable<any> {  
      return this.http.get(this.baseUrl+ '/getUserBasicProfile/'+  profileId);
    }  
  }