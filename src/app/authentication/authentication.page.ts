import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  formAuth: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.formAuth = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login(event: any): void {
    if (this.formAuth.valid) {
      this.authentication.login(this.formAuth.value.login, this.formAuth.value.password).subscribe(
        (data) => {
          this.router.navigate(['/home']);
        },
        (err) => console.error(err)
      );
    }
  }

}
