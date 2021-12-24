export class UserUnavailableError extends Error {
  constructor() {
    super('Usuários não podem ser buscados fora de horário comercial');
    this.name = 'UserUnavailableError';
  }
}
