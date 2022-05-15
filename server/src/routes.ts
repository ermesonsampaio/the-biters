import { Router } from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaMessagesRepository } from './repositories/prisma/prisma-messages-repository';
import { SubmitMessageUseCase } from './use-cases/submit-message-use-case';

export const routes = Router();

routes.post('/messages', async (req, res) => {
  try {
    const { content, authorName, authorEmail } = req.body;

    const prismaMessagesRepository = new PrismaMessagesRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
  
    const submitMessageUseCase = new SubmitMessageUseCase(
      prismaMessagesRepository,
      nodemailerMailAdapter,
    );
  
    await submitMessageUseCase.execute({
      content,
      authorName,
      authorEmail,
    });
  
    return res.status(201).send();
  } catch (error) {
    return res.status(400).json({error: (error as Error).message});
  }
});
