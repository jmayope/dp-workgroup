"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const allowedOrigins = [
        'http://localhost:4200',
        'http://localhost:4300',
        'https://dp-workgroup-npuw.vercel.app',
        process.env.FRONTEND_URL,
        process.env.FRONTEND_PREVIEW_URL
    ].filter((origin) => Boolean(origin));
    const CORS = {
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error(`Origen no permitido por CORS: ${origin}`));
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'app-type'
        ],
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors(CORS);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map