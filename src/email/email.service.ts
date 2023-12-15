import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';
import { EMAIL_CONFIG } from '../config';

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: EMAIL_CONFIG.HOST,
      port: EMAIL_CONFIG.PORT,
      secure: false,
      auth: {
        user: EMAIL_CONFIG.USER,
        pass: EMAIL_CONFIG.PASS,
      },
    });
  }

  async sendMail({ to, subject, text }) {
    await this.transporter.sendMail({
      from: {
        name: EMAIL_CONFIG.FROM_NAME,
        address: EMAIL_CONFIG.USER,
      },
      to,
      subject,
      text,
    });
  }
}
