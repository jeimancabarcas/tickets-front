import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FloatLabelModule, InputTextModule, ButtonModule, CardModule, PasswordModule, CheckboxModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loading = false;
  rememberMe = false;
  email = '';
  password = '';

  onLogin() {
    console.log('Login');
  }
}
