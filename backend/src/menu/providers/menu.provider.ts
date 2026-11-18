import { Connection } from 'mongoose';
import { Menu } from '../schemas/menu.schema';

export const MenuProvider = [
  {
    provide: 'MENU_MODEL',
    useFactory: (connection: Connection) => connection.model('menus', Menu),
    inject: ['DATABASE_CONNECTION']
  }
]