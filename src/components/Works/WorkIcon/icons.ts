import { worksList } from '../WorkItem/WorkItem';

type iconList = 'board' | 'email' | 'ticket' | 'map' | 'home' | 'star';

export type iconType = {
  icon: iconList;
  color: string;
};

export const workIcons: Record<worksList, iconType> = {
  workboard: {
    icon: 'board',
    color: '#232D64'
  },
  email: {
    icon: 'email',
    color: '#FDF5D1'
  },
  interpark: {
    icon: 'ticket',
    color: '#A5D0FE'
  },
  dooin: {
    icon: 'map',
    color: '#9CD6B3'
  },
  cosmos: {
    icon: 'home',
    color: '#525E9C'
  },
  stars: {
    icon: 'star',
    color: '#F8F8F8'
  }
};
