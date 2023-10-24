export function passwordValidate(str: string) {
  return /((?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,})/.test(str)
}
