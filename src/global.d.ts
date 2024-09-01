declare global {
  interface Window {
    onTelegramAuth?: (user: TelegramUser) => void;
  }
}

export {};
