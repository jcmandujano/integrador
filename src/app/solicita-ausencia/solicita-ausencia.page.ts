import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AusenciaService } from '../services/ausencia.service';

@Component({
  selector: 'app-solicita-ausencia',
  templateUrl: './solicita-ausencia.page.html',
  styleUrls: ['./solicita-ausencia.page.scss'],
})
export class SolicitaAusenciaPage implements OnInit {
  bookingForm!: FormGroup;
  constructor(private aptService: AusenciaService,
    private router: Router,
    public fb: FormBuilder) { }

    ngOnInit() {
      this.bookingForm = this.fb.group({
        email: [''],
        ausenciaDate: [''],
      });
    }
    formSubmit() {
      if (!this.bookingForm.valid) {
        return false;
      } else {
        return this.aptService
          .createBooking(this.bookingForm.value)
          .then((res) => {
            console.log(res);
            this.bookingForm.reset();
            this.router.navigate(['/home']);
          })
          .catch((error) => console.log(error));
      }
    }

}
