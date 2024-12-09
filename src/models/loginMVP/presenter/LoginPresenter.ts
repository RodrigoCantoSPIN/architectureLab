import {UserService} from '../model/UserServices';

export interface LoginView {
  showSuccess(): void;
  showError(): void;
}

export class LoginPresenter {
  constructor(private userService: UserService, private view: LoginView) {}

  login(username: string, password: string): void {
    if (this.userService.authenticate(username, password)) {
      this.view.showSuccess();
    } else {
      this.view.showError();
    }
  }
}
