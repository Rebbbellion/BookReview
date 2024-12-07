import { Observable } from "rxjs";
import { RegisterCredentials, User, UserDetails } from "../model/user.model";

export interface UserService {
  register(
    credentials: RegisterCredentials,
    details: UserDetails
  ): Observable<User>;
}
