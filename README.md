# Telegram Auth Button for React
This repository provides a simple component for integrating Telegram Login into your React application. The component allows users to authenticate via their Telegram account, making it easy to add social login functionality to your app.

```js
import "./App.css";
import TelegramLogin, { TelegramUser } from "./components/telegram-auth-btn";

function App() {
  const handleTelegramAuth = (user: TelegramUser) => {
    console.log("User authenticated:", user);
  };

  return (
    <TelegramLogin
      botUsername="my-auth-bot-name"
      onAuth={handleTelegramAuth}
    />
  );
}

export default App;
```

## Component Props
- `botUsername (string)`: The username of your Telegram bot.
- `onAuth (function)`: The function that handles the authenticated user's data.
- `buttonSize (optional, string)`: Size of the login button. Accepts "large", "medium", or "small". Default is "large".
- `cornerRadius (optional, number)`: The corner radius of the button. Default is 20.

## Important Notes
Domain Restrictions: If you encounter the error "Bot domain invalid" when running the app, this is expected behavior. The Telegram Login widget cannot be tested on localhost. You need to set up a valid domain for testing.
Global Declaration: The onTelegramAuth function is declared globally in the global.d.ts file. This ensures that TypeScript recognizes it as a global function.
