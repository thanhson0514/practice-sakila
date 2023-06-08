export class ErrorResponse extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}
