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
