import { generateRandomString } from '../../constants';

export interface NewUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  code: string;
  documentType: string;
  username: string;
  password: string;
  status: boolean;
}

export class NewUserBuilder {
  private data: Partial<NewUserPayload> = {};

  fromForm(form: any): this {
    this.data.firstName = form.firstName;
    this.data.lastName = form.lastName;
    this.data.email = form.email;
    this.data.code = form.code;
    this.data.documentType = form.documentType;
    return this;
  }

  withGeneratedCredentials(): this {
    this.data.username = this.data.email!;
    this.data.password = generateRandomString(8);
    return this;
  }

  withDefaultStatus(): this {
    this.data.status = false;
    return this;
  }

  build(): NewUserPayload {
    if (!this.data.email || !this.data.code) {
      throw new Error('NewUserBuilder: faltan campos obligatorios');
    }
    return this.data as NewUserPayload;
  }
}