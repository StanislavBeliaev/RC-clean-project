// Global types
export interface User {
  id: string;
  name: string;
  email: string;
}

export type Theme = 'light' | 'dark';

export interface AppContextType {
  user: User | null;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
