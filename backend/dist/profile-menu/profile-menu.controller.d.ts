import { ProfileMenuService } from './profile-menu.service';
export declare class ProfileMenuController {
    private readonly profileMenuService;
    constructor(profileMenuService: ProfileMenuService);
    create(body: any): Promise<any>;
    findAll(body: any, query: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
