import signUp from './signUp';

describe('SignUpPageValidation', () => {
  const validData = {
    email: 'hello@and.digital',
    password: 'password',
  };

  it('should not throw an error when all mandatory fields valid', async () => {
    const valid = await signUp.isValid(validData);
    expect(valid).toBeTruthy();
  });

  it('should throw an error when email is not valid', async () => {
    const data = {
      ...validData,
      email: 'email.com',
    };
    const valid = await signUp.isValid(data);
    expect(valid).toBeFalsy();

    await signUp.validate(data).catch((errors) => {
      expect(errors.errors).toEqual(['Invalid email address']);
    });
  });

  it('should throw an error when password is too short', async () => {
    const data = {
      ...validData,
      password: 'passwor',
    };
    const valid = await signUp.isValid(data);
    expect(valid).toBeFalsy();

    await signUp.validate(data).catch((errors) => {
      expect(errors.errors).toEqual([
        'Password must be at least 8 characters long',
      ]);
    });
  });
});
