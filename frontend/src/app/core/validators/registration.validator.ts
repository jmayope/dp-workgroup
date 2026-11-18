// src/app/core/validators/registration.validator.ts
export interface RegistrationValidator {
  validate(form: any): string | null; // null = ok, string = mensaje error
}

export class BaseValidator implements RegistrationValidator {
  constructor(private next?: RegistrationValidator) {}
  validate(form: any): string | null {
    return this.next ? this.next.validate(form) : null;
  }
}

export class PasswordMatchValidator extends BaseValidator {
  override validate(form: any): string | null {
    if (form.password !== form.confirmPassword)
      return 'Las contraseñas no son iguales. Verifique por favor.';
    return super.validate(form);
  }
}

export class RequiredFieldsValidator extends BaseValidator {
  override validate(form: any): string | null {
    if (!form.firstName || !form.lastName || !form.email)
      return 'Complete todos los campos obligatorios.';
    return super.validate(form);
  }
}