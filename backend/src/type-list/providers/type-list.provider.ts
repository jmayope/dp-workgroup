import { Connection } from 'mongoose';
import { TypeList } from '../schemas/type-list.schema';

export const TypeListProvider = [
  {
    provide: 'TYPE_LIST_MODEL',
    useFactory: (connection: Connection) => connection.model('typelists', TypeList),
    inject: ['DATABASE_CONNECTION']
  }
]