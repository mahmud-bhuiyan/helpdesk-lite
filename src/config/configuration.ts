import { config as loadEnv } from 'dotenv';

loadEnv();

export interface AppConfig {
  port: number;
}

export default (): AppConfig => ({
  port: parseInt(process.env.PORT ?? '3090', 10),
});
