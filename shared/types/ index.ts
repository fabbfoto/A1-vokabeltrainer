// User Type
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  lastLogin: Date;
}

// Vokabel Type
export interface Word {
  id: string;
  german: string;
  english: string;
  artikel?: 'der' | 'die' | 'das';
  plural?: string;
}