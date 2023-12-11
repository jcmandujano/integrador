import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor( public authService: AuthenticationService,
    public router: Router,
    private toastController: ToastController) { }

  ngOnInit() {
    console.log('ESTAMOS EN REGISTRO')
  }

  signUp(email: any, password: any) {
    console.log('SIGNUP SERVICE')
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
          console.log('RESPONSE', res)
          this.presentToast("Se registro correctamente")
          this.router.navigate(['/'])
        // Do something here
      })
      .catch((error) => {
        this.presentToast("Ocurrio un error al crear el usuario" + error.message);
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }

}