import { Connection } from 'mongoose';
import { KardexMaster } from '../schemas/kardex-master.schema';

export const KardexMasterProvider = [
  {
    provide: 'KARDEX_MASTER_MODEL',
    useFactory: (connection: Connection) => connection.model('kardexmasters', KardexMaster),
    inject: ['DATABASE_CONNECTION']
  }
]