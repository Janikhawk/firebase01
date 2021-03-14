export interface User {
  $key?: string;
  name?: string;
  email: string;
  contact?: number;
  uid: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
