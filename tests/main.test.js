import { verifyPassword } from '..';

describe('Veryfing if provided password is correct', () => {
  test('Too short password "pass" returns code: 1 and description', () => {
    expect(verifyPassword('pass')).toEqual({
      code: 1,
      description: "Password is too short"
    })
  })

  test('Too short password "password" returns code: 2 and description', () => {
    expect(verifyPassword('password')).toEqual({
      code: 2,
      description: "Password doesn't consist of at leat one special character"
    })
  })

  test('Too short password "!password" returns code: 3 and description', () => {
    expect(verifyPassword('!password')).toEqual({
      code: 3,
      description: "Password doesn't consist of at leat one number"
    })
  })

  test('Too short password "!pass4word" returns code: 4 and description', () => {
    expect(verifyPassword('!pass4word')).toEqual({
      code: 4,
      description: "Password doesn't consist of at leat capital letter"
    })
  })

  test('Correct pasword returns code 0 and no description', () => {
    expect(verifyPassword('!paSs4word')).toEqual({code: 0})
  })
})