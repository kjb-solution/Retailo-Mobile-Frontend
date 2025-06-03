import SplashScreen from "./SplashScreen";
import SignInScreen from "./Screens/SignInScreen";
import { useEffect, useState } from "react";
import HomeScreen from "./Screens/HomeScreen";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  }, []);
  if (isShowSplash) {
    return <SplashScreen />;
  }

  if (!isLoggedIn) {
    return <SignInScreen onLoginSucess={() => setIsLoggedIn(true)} />;
  }
  return <HomeScreen />;
}
