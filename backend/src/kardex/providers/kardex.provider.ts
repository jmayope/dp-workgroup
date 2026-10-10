import { Connection } from 'mongoose';
import { Kardex } from '../schemas/kardex.schema';

export const KardexProvider = [
  {
    provide: 'KARDEX_MODEL',
    useFactory: (connection: Connection) => connection.model('kardexs', Kardex),
    inject: ['DATABASE_CONNECTION']
  }
]