export interface User {
  id?: number;
  name: string;
  phone: string;
  email: string;
  created_at?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  users?: User[];
  user?: User;
  count?: number;
}