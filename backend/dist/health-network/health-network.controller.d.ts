import { HealthNetworkService } from './health-network.service';
export declare class HealthNetworkController {
    private readonly healthNetworkService;
    constructor(healthNetworkService: HealthNetworkService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
