import signUp from './signUp';

describe('SignUpPageValidation', () => {
  const validData = {
    email: 'hello@and.digital',
    password: 'password',
    passwordConfirm: 'password',
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
      passwordConfirm: 'passwor',
    };
    const valid = await signUp.isValid(data);
    expect(valid).toBeFalsy();

    await signUp.validate(data).catch((errors) => {
      expect(errors.errors).toEqual([
        'Password must be at least 8 characters long',
      ]);
    });
  });

  it('should throw an error when password confirmation does not match original', async () => {
    const data = {
      ...validData,
      password: 'password',
      passwordConfirm: 'password1',
    };
    const valid = await signUp.isValid(data);
    expect(valid).toBeFalsy();

    await signUp.validate(data).catch((errors) => {
      expect(errors.errors).toEqual(['Passwords do not match']);
    });
  });

  it('should throw an error when any field is empty', async () => {
    let data = {
      ...validData,
      password: '',
    };
    let valid = await signUp.isValid(data);
    expect(valid).toBeFalsy();

    data = {
      ...validData,
      email: '',
    };
    valid = await signUp.isValid(data);
    expect(valid).toBeFalsy();

    data = {
      ...validData,
      passwordConfirm: '',
    };
    valid = await signUp.isValid(data);
    expect(valid).toBeFalsy();
  });
});
