import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ from, body, subject }: SendMailData) {
    await transport.sendMail({
      from,
      to: process.env.MAIL_TARGET,
      subject,
      html: body,
    });
  }
}
