import { Component, OnInit } from "@angular/core";
import { MyblogService } from "../Services/myblog.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  registerData= {}
  name: string = " ";
  email: string = " ";
  password: string = " ";
 user_details: any;

  constructor(private service: MyblogService) {}

  ngOnInit() {

  }

  register_user() {
    this.service
      .register(this.name, this.email, this.password)
      .subscribe(data => {
        console.log(data);

      });
  }
}