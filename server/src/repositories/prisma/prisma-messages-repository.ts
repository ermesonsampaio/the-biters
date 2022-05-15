import { prisma } from '../../prisma';
import { MessageCreateData, MessagesRepository } from '../messages-repository';

export class PrismaMessagesRepository implements MessagesRepository {
  async create({ content, authorName, authorEmail }: MessageCreateData) {
    await prisma.message.create({
      data: {
        content,
        authorName,
        authorEmail,
      },
    });
  }
}
