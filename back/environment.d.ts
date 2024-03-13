export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      CONNECTION_STRING: string;
      APP_HOST_EMAIL_PASSWORD: string;
    }
  }
}
