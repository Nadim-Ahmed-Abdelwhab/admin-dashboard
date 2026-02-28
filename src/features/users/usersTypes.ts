export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  address: {
    city: string;
  };
}

export interface UsersResponse {
  users: Users[];
  total: number;
  skip: number;
  limit: number;
}

export interface UserState {
  userData: Users[] | null;
  dBUserData: Users[] | null;
  isLoading: boolean;
  isLoadingDashboard: boolean;
  isError: boolean;
}
