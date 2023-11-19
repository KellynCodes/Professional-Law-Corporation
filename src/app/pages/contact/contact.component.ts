import { CommonModule } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'plc-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public contactForm!: FormGroup;
  public isSending: boolean = false;
  public errorMessage: string | null | unknown = null;
  public successMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]],
      date: [new Date().toDateString(), Validators.required],
      message: ['', [Validators.required, Validators.minLength(100)]],
    });
  }

  async onSubmit(): Promise<void> {
    if (!this.contactForm.valid) {
      this.errorMessage = 'Please fill all the fields';
      this.setMessageState(5000);
      return;
    }
    try {
      this.isSending = true;
      const response = await emailjs.send(
        'service_emnblen',
        'template_pc53t6b',
        {
          to_name: 'there',
          ...this.contactForm.value,
        },
        'IANMnCbipO_NGY3LK'
      );
      if (response.status != HttpStatusCode.Ok) {
        this.isSending = false;
        this.errorMessage =
          'Something unexpected happened while sending the message.Please try again.';
        this.setMessageState(5000);
        return;
      }
      if (response.status == HttpStatusCode.Ok) {
        this.isSending = false;
        this.successMessage = 'We have received your message.';
        this.setMessageState(5000);
        return;
      }
    } catch (error: any) {
      if (error?.status != HttpStatusCode.Ok) {
        this.isSending = false;
        this.errorMessage = 'Message not sent. Try again.';
        this.setMessageState(5000);
        return;
      }
    }
  }

  setMessageState(ms: number): void {
    setTimeout(() => {
      this.errorMessage = null;
      this.successMessage = null;
    }, ms);
    return;
  }
}
