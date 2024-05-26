export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
  {
    id: '1',
    amount: 150.0,
    status: 'pending',
    email: 'alice@example.com',
  },
  {
    id: '2',
    amount: 200.5,
    status: 'processing',
    email: 'bob@example.com',
  },
  {
    id: '3',
    amount: 99.99,
    status: 'success',
    email: 'charlie@example.com',
  },
  {
    id: '4',
    amount: 120.0,
    status: 'failed',
    email: 'dave@example.com',
  },
  {
    id: '5',
    amount: 300.0,
    status: 'pending',
    email: 'eve@example.com',
  },
  {
    id: '6',
    amount: 75.75,
    status: 'processing',
    email: 'frank@example.com',
  },
  {
    id: '7',
    amount: 250.0,
    status: 'success',
    email: 'grace@example.com',
  },
  {
    id: '8',
    amount: 175.0,
    status: 'failed',
    email: 'heidi@example.com',
  },
  {
    id: '9',
    amount: 50.0,
    status: 'pending',
    email: 'ivan@example.com',
  },
  {
    id: '10',
    amount: 60.0,
    status: 'processing',
    email: 'judy@example.com',
  },
  {
    id: '11',
    amount: 90.0,
    status: 'success',
    email: 'mallory@example.com',
  },
  {
    id: '12',
    amount: 110.0,
    status: 'failed',
    email: 'oscar@example.com',
  },
  {
    id: '13',
    amount: 80.0,
    status: 'pending',
    email: 'peggy@example.com',
  },
  {
    id: '14',
    amount: 130.0,
    status: 'processing',
    email: 'trent@example.com',
  },
  {
    id: '15',
    amount: 140.0,
    status: 'success',
    email: 'victor@example.com',
  },
  {
    id: '16',
    amount: 160.0,
    status: 'failed',
    email: 'walter@example.com',
  },
  {
    id: '17',
    amount: 180.0,
    status: 'pending',
    email: 'xander@example.com',
  },
  {
    id: '18',
    amount: 190.0,
    status: 'processing',
    email: 'yolanda@example.com',
  },
  {
    id: '19',
    amount: 210.0,
    status: 'success',
    email: 'zach@example.com',
  },
  {
    id: '20',
    amount: 220.0,
    status: 'failed',
    email: 'zoe@example.com',
  },
]
