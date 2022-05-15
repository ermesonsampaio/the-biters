import { MessagesRepository } from '../repositories/messages-repository';
import { MailAdapter } from '../adapters/mail-adapter';

export interface SubmitMessageUseCaseRequest {
  content: string;
  authorName: string;
  authorEmail: string;
}

export class SubmitMessageUseCase {
  constructor(
    private messagesRepository: MessagesRepository,
    private mailAdapter: MailAdapter,
  ) {}
  
  async execute(request: SubmitMessageUseCaseRequest) {
    const { content, authorName, authorEmail } = request;

    if (!content) throw new Error('Content is required.');
    if (!authorName) throw new Error('Author name is required.');
    if (!authorEmail) throw new Error('Author email is required.');

    await this.messagesRepository.create({
      content,
      authorName,
      authorEmail,
    });

    await this.mailAdapter.sendMail({
      from: `${authorEmail} <${authorEmail}>`,
      subject: 'Nova mensagem!',
      body: [
        '<!DOCTYPE html>',
        '<html lang="pt-br">',
        '<body>',
          '<div style="font-family:sans-serif;font-size:16px;color:#111;">',
            `<p>Mensagem: ${content}</p>`,
            `<p>Autor: ${authorName}</p>`,
            `<p>Email: ${authorEmail}</p>`,
          '</div>',
        '</body>',
        '</html>',
      ].join('\n'),
    });
  }
}
