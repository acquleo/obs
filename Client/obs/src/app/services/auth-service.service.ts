import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  constructor(private router: Router, private http: HttpClient,private toastr: ToastrService) { 

    

  }

  currentcode:string;
  isauthenticated:boolean=false;

  public logout()
  {
    this.isauthenticated=false;

    this.router.navigate(['/search'], {})
  }

  query(code: string): Observable<any> {
    let queryURL = `Obs/CheckCode?code=${code}`;
    //let queryURL = `http://www.thomas-bayer.com/sqlrest/`;
    
    let headers = new HttpHeaders();
    //headers = headers.set('Authorization',`Digest username="postman ", realm="Users", nonce="Nf9vpPghJTrtgQC6lFRTuH68YW1X8mFG", uri="/CheckCode", algorithm="MD5", response="6e77949e62d049dfbef42e0647cee4fb"`);
    headers = headers.set('Content-type', `application/json; charset=UTF-8`);
    //headers = headers.set('Access-Control-Allow-Origin', `*`);
    
          
    const options = {
      headers: headers
    };

    return this.http.get(queryURL,options);
  }

  public getcurrentcode():string
  {
    return this.currentcode;
  }

  public isAuthenticated():boolean
  {
      return this.isauthenticated;
  }

  querychannels(code: string): Observable<any> {
    let queryURL = `https://localhost:5001/Obs/GetChannels`;
    //let queryURL = `http://www.thomas-bayer.com/sqlrest/`;
    
    let headers = new HttpHeaders();
    //headers = headers.set('Authorization',`Digest username="postman ", realm="Users", nonce="Nf9vpPghJTrtgQC6lFRTuH68YW1X8mFG", uri="/CheckCode", algorithm="MD5", response="6e77949e62d049dfbef42e0647cee4fb"`);
    headers = headers.set('Content-type', `application/json; charset=UTF-8`);
    //headers = headers.set('Access-Control-Allow-Origin', `*`);
    
          
    const options = {
      headers: headers
    };

    return this.http.get(queryURL,options);
  }

  public checkCode(val:string)
  {
    this.query(val).subscribe(
      (result:any)=>{

        this.currentcode=val;
        this.querychannels(val).subscribe(
          (result:any)=>{
            
          }
        )
        let url = '';
        switch(result.control)
        {
          case 'operator':
            url=`/search/${result.control}`;
            break;
            default:
              this.toastr.error("Code not acceted","", {timeOut:3000});
              return;
        }
        
        this.isauthenticated=true;

        this.router.navigate([`/search/${result.control}`], {});

        this.toastr.success("Code acceted","", {timeOut:3000});
      }

    );
    //var arr_from_json = JSON.parse(  answer.body );
    //if(query(val).=="123")
    //{
    //  this.router.navigate(['/search/operator'], {});
    //}
  }

  ngOnInit() {
    
  }

}
