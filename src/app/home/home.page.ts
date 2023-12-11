import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string | undefined;
  password: string | undefined;

  constructor(public authService: AuthenticationService,
    public router: Router,
    private toastController: ToastController) {}

  signIn() {
    // Agrega aquí la lógica de inicio de sesión
    console.log('Iniciando sesión con:', this.username, this.password);
  }

  logIn(email: any, password: any) {
    this.authService
      .SignIn(email.value, password.value)
      .then((): any => {
        console.log('DATA',this.authService.isEmailVerified)
        if (this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);
          this.presentToast("Se accedio correctamente")
        } else {
          this.presentToast("El usuario no existe")
          return false;
        }
      })
      .catch((error) => {
        this.presentToast("Ocurrio un error al acceder" + error.message)
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
