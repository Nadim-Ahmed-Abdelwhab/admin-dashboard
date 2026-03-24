export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Adress;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}
interface Hair {
  color: string;
  type: string;
}
interface Adress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}
interface Coordinates {
  lat: number;
  lng: number;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Adress;
}
interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface UsersResponse {
  users: Users[];
  total: number;
  skip: number;
  limit: number;
}
export interface Props {
  params: {
    id: string;
  };
}
export interface UserState {
  userData: Users[] | null;
  isLoading: boolean;
  isError: boolean;
  appData: UsersResponse | null;
}
