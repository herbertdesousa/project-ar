type Message = Record<string, string> | string;

export class AppError {
  status: number;

  message: Message;

  constructor(status: number, message: Message) {
    this.status = status;
    this.message = message;
  }
}
