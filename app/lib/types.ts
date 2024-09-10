export type Session = {
  id: string;
  userId: string;
  expires: string;
  sessionToken: string;
};

export type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken: string;
  accessToken: string;
  expiresAt: number;
  idToken: string;
  scope: string;
  sessionState: string;
  tokenType: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  image: string;
  hash: string;
  entries: number;
  joined: string;
};

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};
