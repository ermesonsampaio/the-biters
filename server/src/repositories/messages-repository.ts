export interface MessageCreateData {
  content: string;
  authorName: string;
  authorEmail: string;
}

export interface MessagesRepository {
  create(data: MessageCreateData): Promise<void>;
}
