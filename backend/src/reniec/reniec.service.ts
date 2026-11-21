import { HttpService } from '@nestjs/axios';
import { BadGatewayException, GatewayTimeoutException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ReniecService {
    
    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService
    ) { }
    
    private readonly apiUrl = this.configService.get<string>('RENIEC_API_URL');

    private readonly token = this.configService.get<string>('RENIEC_TOKEN');

    async findDNI(dni: string) {
        if (!/^\d{8}$/.test(dni)) {
            throw new BadGatewayException('El DNI debe contener 8 dígitos');
        }

        if (!this.token) {
            throw new BadGatewayException(
                'No se encuentra configurado el token de RENIEC'
            );
        }

        const url = `${this.apiUrl}/api/v1/dni/${encodeURIComponent(dni)}`;

        try {
            const response = await firstValueFrom(
                this.httpService.get(url, {
                    params: {
                        token: this.token
                    },
                    headers: {
                        Accept: 'application/json'
                    }
                })
            );

            return response.data;

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (
                    error.code === 'ECONNABORTED' ||
                    error.code === 'ETIMEDOUT'
                ) {
                    throw new GatewayTimeoutException(
                        'El servicio de RENIEC tardó demasiado en responder'
                    );
                }

                throw new BadGatewayException(
                    'No fue posible consultar los datos en RENIEC'
                );
            }

            throw error;
        }
    }

    async findRUC(ruc: string) {
        if (!/^\d{11}$/.test(ruc)) {
            throw new BadGatewayException('El RUC debe contener 8 dígitos');
        }

        if (!this.token) {
            throw new BadGatewayException(
                'No se encuentra configurado el token de RENIEC'
            );
        }

        const url = `${this.apiUrl}/api/v1/ruc/${encodeURIComponent(ruc)}`;

        try {
            const response = await firstValueFrom(
                this.httpService.get(url, {
                    params: {
                        token: this.token
                    },
                    headers: {
                        Accept: 'application/json'
                    }
                })
            );

            return response.data;

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (
                    error.code === 'ECONNABORTED' ||
                    error.code === 'ETIMEDOUT'
                ) {
                    throw new GatewayTimeoutException(
                        'El servicio de RENIEC tardó demasiado en responder'
                    );
                }

                throw new BadGatewayException(
                    'No fue posible consultar los datos en RENIEC'
                );
            }

            throw error;
        }
    }

    
}
