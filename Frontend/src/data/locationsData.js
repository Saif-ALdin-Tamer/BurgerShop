import { Location } from '../core/entities/Location';

export const LOCATIONS_DATA = [
  new Location({
    id: 'loc-1',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    phone: '+1 (212) 555-0192',
    address: '450 5th Avenue, Manhattan'
  }),
  new Location({
    id: 'loc-2',
    city: 'Los Angeles',
    state: 'CA',
    country: 'USA',
    phone: '+1 (310) 555-0148',
    address: '9650 Wilshire Blvd, Beverly Hills'
  }),
  new Location({
    id: 'loc-3',
    city: 'Chicago',
    state: 'IL',
    country: 'USA',
    phone: '+1 (312) 555-0177',
    address: '233 S Wacker Dr, Loop District'
  }),
  new Location({
    id: 'loc-4',
    city: 'Miami',
    state: 'FL',
    country: 'USA',
    phone: '+1 (305) 555-0133',
    address: '701 Ocean Dr, South Beach'
  }),
  new Location({
    id: 'loc-5',
    city: 'London',
    state: '',
    country: 'UK',
    phone: '+44 20 7946 0912',
    address: '18 Regent Street, Soho'
  }),
  new Location({
    id: 'loc-6',
    city: 'Tokyo',
    state: '',
    country: 'JP',
    phone: '+81 3 5555 0143',
    address: '1-21-1 Jinnan, Shibuya-ku'
  })
];
