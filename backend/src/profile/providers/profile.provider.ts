import { Connection } from 'mongoose';
import { Profile } from '../schemas/profile.schema';

export const ProfileProvider = [
  {
    provide: 'PROFILE_MODEL',
    useFactory: (connection: Connection) => connection.model('profiles', Profile),
    inject: ['DATABASE_CONNECTION']
  }
]