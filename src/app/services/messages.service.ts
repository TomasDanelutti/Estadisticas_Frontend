import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  toast: HTMLIonToastElement;

  constructor(private toastController: ToastController, private alertController: AlertController) { }

  async showMessage(header: string, message: string, duration: number) {

    if (this.toast) {
      // Si ya existe un toast lo cierro, para mostrar el nuevo.
      this.toast.dismiss();
    }

    this.toast = await this.toastController.create({
      header,
      message,
      duration,
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });

    this.toast.present();
  }

  async showAlert(header: string, message: string, handler: any) {

    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Aceptar',
          handler,
        }, {
          text: 'Cancelar',
        }
      ]
    });

    await alert.present();
  }
}
