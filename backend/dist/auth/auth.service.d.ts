import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
export declare class AuthService {
    private MedicalStaff;
    private jwtService;
    constructor(MedicalStaff: Model<any>, jwtService: JwtService);
    login(username: string, password: string): Promise<any>;
}
