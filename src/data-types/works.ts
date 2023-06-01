export type worksList =
  | 'workboard'
  | 'email'
  | 'interpark'
  | 'dooin'
  | 'cosmos'
  | 'stars';

interface WorkJsonType {
  jsonId: worksList;
  title: string;
  year: string;
  skills: string[];
  place: string;
  isOngoing: boolean;
}

export type WorksType = WorkJsonType[];
