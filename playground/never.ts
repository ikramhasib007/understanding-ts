function generateError(message: string, code: number): never {
  throw { message, errorCode: code }
}
try {
  const res = generateError('An error occurred!', 500)
  console.log('res: ', res);
} catch (error) {
  console.log('error: ', error);
}

console.log('Yes! I am doing somethings...');