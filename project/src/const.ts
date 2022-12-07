import { SortName, Offer } from './types/types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NOAUTH',
  Unknown = 'UNKNOWN',
}

export enum HeaderTitle {
  '6Cities' = '6 Cities:',
  Main = 'Главная cтраница',
  Authorization = 'Авторизуйтись',
  Favorites = 'Избранное',
  Offers = 'Предложение',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const cities = [
  {
    name: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },
  {
    name: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 13,
  },
  {
    name: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 13,
  },
  {
    name: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 13,
  },
  {
    name: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 13,
  },
  {
    name: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 13,
  },
];

export const DEFAULT_CITY = 'Paris';
export const TIMEOUT_SHOW_ERROR = 2000;

export enum NameSpace {
  Data = 'DATA',
  Process = 'PROCESS',
  User = 'USER',
}

export enum Sorting {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  TopRated = 'Top rated first',
}

export const Sorter: {
  [key in SortName]: (a: Offer, b: Offer) => number;
} = {
  Popular: () => 0,
  PriceIncrease: (a, b) => a.price - b.price,
  PriceDecrease: (a, b) => b.price - a.price,
  TopRated: (a, b) => b.rating - a.rating,
};
