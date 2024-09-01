import { FC, useEffect } from "react";

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

interface TelegramLoginProps {
  botUsername: string;
  onAuth: (user: TelegramUser) => void;
  buttonSize?: "large" | "medium" | "small";
  cornerRadius?: number;
}

const TelegramLogin: FC<TelegramLoginProps> = ({
  botUsername,
  onAuth,
  buttonSize = "large",
  cornerRadius = 20,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", botUsername);
    script.setAttribute("data-size", buttonSize);
    script.setAttribute("data-radius", cornerRadius.toString());
    script.setAttribute("data-onauth", "onTelegramAuth(user)");

    window.onTelegramAuth = (user: TelegramUser) => {
      onAuth(user);
    };

    document.getElementById("telegram-login")?.appendChild(script);

    return () => {
      script.remove();
      window.onTelegramAuth = undefined;
    };
  }, [botUsername, onAuth, buttonSize, cornerRadius]);

  return <div id="telegram-login"></div>;
};

export default TelegramLogin;
