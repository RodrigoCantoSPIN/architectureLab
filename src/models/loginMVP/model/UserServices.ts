export class UserService {
  private validCredentials = {username: 'user', password: 'pass'};

  authenticate(username: string, password: string): boolean {
    return (
      username === this.validCredentials.username &&
      password === this.validCredentials.password
    );
  }
}
