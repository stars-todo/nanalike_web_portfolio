import { worksList } from '@data-types/works';

export type iconType = {
  icon: worksList;
  color: string;
};

export const workIcons: Record<worksList, iconType> = {
  workboard: {
    icon: 'workboard',
    color: '#232D64'
  },
  email: {
    icon: 'email',
    color: '#FDF5D1'
  },
  interpark: {
    icon: 'interpark',
    color: '#A5D0FE'
  },
  dooin: {
    icon: 'dooin',
    color: '#9CD6B3'
  },
  cosmos: {
    icon: 'cosmos',
    color: '#525E9C'
  },
  stars: {
    icon: 'stars',
    color: '#F8F8F8'
  }
};
