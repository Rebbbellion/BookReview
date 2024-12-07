export interface UserDetails {
  country: string;
  dob: string;
  gender: string;
  id: string;
}

export interface User {
  displayName: string;
  photoURL: string;
  email: string;
  emailVerified: boolean;
  id: string;
  details: UserDetails;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  displayName: string;
  photoURL: string | null;
}
