export class Mail {
  name: string;
  send: boolean;
  rc: number;

  constructor() {
    this.name = '';
    this.send = false;
    this.rc = -1;
  }
}
