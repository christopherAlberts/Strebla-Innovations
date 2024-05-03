import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var Email: any;
declare global {
  interface Window { Email: any; }
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})


export class ContactUsPage {

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private alertController: AlertController, private http: HttpClient) { }


  sendEmail() {
    const endpoint = 'https://api.web3forms.com/submit';
    const body = {
      access_key: "602101fd-3303-4787-a88f-95129b6ca77b",
      name: this.contactData.name,
      email: this.contactData.email,
      message: this.contactData.message
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    this.http.post(endpoint, body, { headers: headers })
      .subscribe(
        response => {
          console.log('Email sent successfully', response);
          this.showAlert('Email sent successfully!');
        },
        error => {
          console.error('Failed to send email:', error);
          this.showAlert('Failed to send email.');
        }
      );
  }

  async showAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Notification',
      subHeader: 'Important Message',
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }


}
