export type Payment = {
  code: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  client: string
}

export const data: Payment[] = [
  {
    code: 'm5gr84i9',
    amount: 316,
    status: 'success',
    client: 'ken99@yahoo.com',
  },
  {
    code: '3u1reuv4',
    amount: 242,
    status: 'success',
    client: 'Abe45@gmail.com',
  },
  {
    code: 'derv1ws0',
    amount: 837,
    status: 'processing',
    client: 'Monserrat44@gmail.com',
  },
  {
    code: '5kma53ae',
    amount: 874,
    status: 'success',
    client: 'Silas22@gmail.com',
  },
  {
    code: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    client: 'carmella@hotmail.com',
  },
  {
    code: '1',
    amount: 150.0,
    status: 'pending',
    client: 'alice@example.com',
  },
  {
    code: '2',
    amount: 200.5,
    status: 'processing',
    client: 'bob@example.com',
  },
  {
    code: '3',
    amount: 99.99,
    status: 'success',
    client: 'charlie@example.com',
  },
  {
    code: '4',
    amount: 120.0,
    status: 'failed',
    client: 'dave@example.com',
  },
  {
    code: '5',
    amount: 300.0,
    status: 'pending',
    client: 'eve@example.com',
  },
  {
    code: '6',
    amount: 75.75,
    status: 'processing',
    client: 'frank@example.com',
  },
  {
    code: '7',
    amount: 250.0,
    status: 'success',
    client: 'grace@example.com',
  },
  {
    code: '8',
    amount: 175.0,
    status: 'failed',
    client: 'hecodei@example.com',
  },
  {
    code: '9',
    amount: 50.0,
    status: 'pending',
    client: 'ivan@example.com',
  },
  {
    code: '10',
    amount: 60.0,
    status: 'processing',
    client: 'judy@example.com',
  },
  {
    code: '11',
    amount: 90.0,
    status: 'success',
    client: 'mallory@example.com',
  },
  {
    code: '12',
    amount: 110.0,
    status: 'failed',
    client: 'oscar@example.com',
  },
  {
    code: '13',
    amount: 80.0,
    status: 'pending',
    client: 'peggy@example.com',
  },
  {
    code: '14',
    amount: 130.0,
    status: 'processing',
    client: 'trent@example.com',
  },
  {
    code: '15',
    amount: 140.0,
    status: 'success',
    client: 'victor@example.com',
  },
  {
    code: '16',
    amount: 160.0,
    status: 'failed',
    client: 'walter@example.com',
  },
  {
    code: '17',
    amount: 180.0,
    status: 'pending',
    client: 'xander@example.com',
  },
  {
    code: '18',
    amount: 190.0,
    status: 'processing',
    client: 'yolanda@example.com',
  },
  {
    code: '19',
    amount: 210.0,
    status: 'success',
    client: 'zach@example.com',
  },
  {
    code: '20',
    amount: 220.0,
    status: 'failed',
    client: 'zoe@example.com',
  },
]
