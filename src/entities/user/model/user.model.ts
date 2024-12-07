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
