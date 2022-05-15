export interface SendMailData {
  from: string;
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail(data: SendMailData): Promise<void>;
}
