import { SubmitMessageUseCase } from './submit-message-use-case';

const createMessageSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitMessage = new SubmitMessageUseCase(
  { create: createMessageSpy },
  { sendMail: sendMailSpy },
);

describe('Submit message', () => {
  it('should be able to submit a message', async () => {
    await expect(
      submitMessage.execute({
        content: 'Quero criar um site.',
        authorName: 'Ermeson',
        authorEmail: 'ermeson@mail.com',
      }),
    ).resolves.not.toThrow();

    expect(createMessageSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should be not be able submit a message without content', async () => {
    await expect(
      submitMessage.execute({
        content: '',
        authorName: 'Ermeson',
        authorEmail: 'ermeson@mail.com',
      }),
    ).rejects.toThrow();

    expect(createMessageSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).not.toHaveBeenCalled();
  });

  it('should be not be able submit a message without author name', async () => {
    await expect(
      submitMessage.execute({
        content: 'Quero criar um site.',
        authorName: '',
        authorEmail: 'ermeson@mail.com',
      }),
    ).rejects.toThrow();

    expect(createMessageSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).not.toHaveBeenCalled();
  });

  it('should be not be able submit a message without author email', async () => {
    await expect(
      submitMessage.execute({
        content: 'Quero criar um site.',
        authorName: 'Ermeson',
        authorEmail: '',
      }),
    ).rejects.toThrow();

    expect(createMessageSpy).not.toHaveBeenCalled();
    expect(sendMailSpy).not.toHaveBeenCalled();
  });
});
