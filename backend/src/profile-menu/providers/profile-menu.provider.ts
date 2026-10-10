import { Connection } from 'mongoose';
import { ProfileMenu } from '../schemas/profile-menu.schema';

export const ProfileMenuProvider = [
  {
    provide: 'PROFILE_MENU_MODEL',
    useFactory: (connection: Connection) => connection.model('profilemenus', ProfileMenu),
    inject: ['DATABASE_CONNECTION']
  }
]