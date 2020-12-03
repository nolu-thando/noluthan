import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MyblogService {
  register_url = "http://10.1.0.96:5500/user_reg";
   login_url="";
   
  constructor(private http: HttpClient) {}
  
  public register(name, email, password) {
    return this.http.post(this.register_url, { name, email, password });
  }
  public login(email,password)
  {
    return this.http.post(this.login_url, { email, password });
  }
}
