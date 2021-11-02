### Button:

```jsx
import { Fragment } from 'react';

import TableContainer from 'components/Table';
import { TextDisplayCell, BoldTextDisplayCell, StatusCell, NavigationCell } from 'components/Table/TableCels';

import withPagination from 'utils/withPagination';

const ordersRows = [
  { text: 'Order Id' },
  { text: 'Client Name' },
  { text: 'Service' },
  { text: 'Status' },
  { text: 'Price' },
];

const content = [
  {
    id: 'O1',
    items: [
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Jill Jeffries',
    total: 15.75,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O2',
    items: [
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 20,
        quantity: 2,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Jill Jeffries',
    total: 50.15,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O3',
    items: [
      {
        name: 'Sal',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Jake Smith',
    total: 10,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O4',
    items: [
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 31.5,
        quantity: 2,
      },
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Michelle Jordan',
    total: 32.75,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O5',
    items: [
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 13.6,
        quantity: 2,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Joe Jacobs',
    total: 28,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O6',
    items: [
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 20,
        quantity: 2,
      },
    ],
    service: 'Doordash',
    name: 'Jack Wayne',
    total: 26.8,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O7',
    items: [
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 10.4,
        quantity: 2,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Jessica Wayne',
    total: 37.4,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O8',
    items: [
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Jill Winters',
    total: 32.45,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O9',
    items: [
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Jill Smith',
    total: 15.75,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O10',
    items: [
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Michelle Cooper',
    total: 1.25,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O11',
    items: [
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 20,
        quantity: 2,
      },
    ],
    service: 'Doordash',
    name: 'Jessica Smith',
    total: 42.55,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O12',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Michael Winters',
    total: 27.75,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O13',
    items: [
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Michelle Jefferson',
    total: 17,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O14',
    items: [
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
    ],
    service: 'Grubhub',
    name: 'Jane Jeffries',
    total: 22.55,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O15',
    items: [
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 20,
        quantity: 2,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
    ],
    service: 'Grubhub',
    name: 'Joe Williams',
    total: 41.2,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O16',
    items: [
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 30,
        quantity: 3,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Joe Jordan',
    total: 44.4,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O17',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 35.5,
        quantity: 2,
      },
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Joe Smith',
    total: 52.5,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O18',
    items: [
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 31.5,
        quantity: 2,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 20,
        quantity: 2,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Jack Winters',
    total: 56.7,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O19',
    items: [
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Paul Wayne',
    total: 14.4,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O20',
    items: [
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Joe Cooper',
    total: 5.2,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O21',
    items: [
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 10.4,
        quantity: 2,
      },
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Jake Jordan',
    total: 29.4,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O22',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Jessica Cooper',
    total: 37.35,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O23',
    items: [
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Jill Smithers',
    total: 63.1,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O24',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Jack Winters',
    total: 17.75,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O25',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Jack Smith',
    total: 17.75,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O26',
    items: [
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Jake Jordan',
    total: 5.2,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O27',
    items: [
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 13.6,
        quantity: 2,
      },
    ],
    service: 'UberEats',
    name: 'George Jefferson',
    total: 13.6,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O28',
    items: [
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 10.4,
        quantity: 2,
      },
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Paul Wayne',
    total: 32.85,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O29',
    items: [
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Jane Jacobs',
    total: 51.55,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O30',
    items: [
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Paul Jeffries',
    total: 13.25,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O31',
    items: [
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 10.4,
        quantity: 2,
      },
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Jill Wayne',
    total: 43.9,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O32',
    items: [
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Michelle Smith',
    total: 20.95,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O33',
    items: [
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'George Jefferson',
    total: 10,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O34',
    items: [
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 28.8,
        quantity: 2,
      },
    ],
    service: 'Grubhub',
    name: 'Jessica Smith',
    total: 28.8,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O35',
    items: [
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Jake Williams',
    total: 30.95,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O36',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 28.8,
        quantity: 2,
      },
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Joe Jordan',
    total: 54.6,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O37',
    items: [
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 43.2,
        quantity: 3,
      },
    ],
    service: 'Doordash',
    name: 'Jack Jefferson',
    total: 43.2,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O38',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Jessica Jordan',
    total: 17.75,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O39',
    items: [
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Jake Wayne',
    total: 38.2,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O40',
    items: [
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 20,
        quantity: 2,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Joe Wayne',
    total: 55.35,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O41',
    items: [
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 2.5,
        quantity: 2,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Paul Smith',
    total: 33.45,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O42',
    items: [
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 20,
        quantity: 2,
      },
    ],
    service: 'Postmates',
    name: 'Michelle Smith',
    total: 39.6,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O43',
    items: [
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 1.25,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Jane Jordan',
    total: 11.25,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O44',
    items: [
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Michelle Jordan',
    total: 48.95,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O45',
    items: [
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
    ],
    service: 'Postmates',
    name: 'Jill Williams',
    total: 10,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O46',
    items: [
      {
        name: 'Soda',
        description: 'Carbonated soda that always hits the spot',
        price: 3.75,
        quantity: 3,
      },
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 13.6,
        quantity: 2,
      },
    ],
    service: 'Postmates',
    name: 'Jack Jeffries',
    total: 17.35,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O47',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 14.4,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'George Jordan',
    total: 42.15,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O48',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
      {
        name: 'Pasta',
        description: 'Delicious, cheesy pasta',
        price: 28.8,
        quantity: 2,
      },
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Salad',
        description: 'Healthy salad for a healthy life',
        price: 10,
        quantity: 1,
      },
    ],
    service: 'UberEats',
    name: 'Jake Wayne',
    total: 63.35,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O49',
    items: [
      {
        name: 'Mozzerella Sticks',
        description: 'Fried to perfection!',
        price: 6.8,
        quantity: 1,
      },
      {
        name: 'Cheese Pizza',
        description: 'Super cheesy pizza',
        price: 15.75,
        quantity: 1,
      },
    ],
    service: 'Doordash',
    name: 'Jack Smith',
    total: 22.55,
    status: 'ACTIVE',
    userId: '1',
  },
  {
    id: 'O50',
    items: [
      {
        name: 'Pepperoni Pizza',
        description: 'Delectable pepperoni pizza',
        price: 17.75,
        quantity: 1,
      },
      {
        name: 'Beer',
        description: 'Refreshing and fulfilling',
        price: 5.2,
        quantity: 1,
      },
    ],
    service: 'Grubhub',
    name: 'Jane Jeffries',
    total: 22.95,
    status: 'ACTIVE',
    userId: '1',
  },
];

<TableContainer
  colsTemplate="1fr 1fr 1fr 1fr 1fr"
  headerCols={ordersRows}
  pagination={{
    pageNavigationData: { currentPage: 0, elementsPerPage: 10, totalElements: 100 },
    changePage: console.log,
    changeElementsPerPage: console.log,
  }}
>
  {withPagination(content, 10, 0).map((order) => (
    <Fragment key={order.id}>
      {/* Order ID */}
      <NavigationCell text={order.id} link={`/${order.id}`} />

      {/* Client Name */}
      <TextDisplayCell text={order.name} />

      {/* Service */}
      <BoldTextDisplayCell text={order.service} />

      {/* Status */}
      <StatusCell status={order.status} />

      {/* Price */}
      <TextDisplayCell text={order.total} />
    </Fragment>
  ))}
</TableContainer>;
```