import { Component, OnInit } from "@angular/core";
import { MyblogService } from "../Services/myblog.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private service: MyblogService) {}

  ngOnInit() {}

  login_user(email, password) {
    this.service.login(this.email, this.password).subscribe(info => {
      console.log(info);
    });
  }
}
