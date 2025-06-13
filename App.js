// import SplashScreen from "./SplashScreen";
// import SignInScreen from "./Screens/SignInScreen";
// import { useEffect, useState } from "react";
// import HomeScreen from "./Screens/HomeScreen";

// export default function App() {
//   const [isShowSplash, setIsShowSplash] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsShowSplash(false);
//     }, 3000);
//   }, []);
//   if (isShowSplash) {
//     return <SplashScreen />;
//   }

//   if (!isLoggedIn) {
//     return <SignInScreen onLoginSucess={() => setIsLoggedIn(true)} />;
//   }
//   return <HomeScreen />;
// }






import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./Screens/SignInScreen";
import ReportListScreen from "./Screens/ReportListScreen";
import ReportDetailsScreen from "./Screens/ReportDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isShowSplash) {
    return <SplashScreen />;
  }

  if (!isLoggedIn) {
    return <SignInScreen onLoginSucess={() => setIsLoggedIn(true)} />;
  }

  // Show reports after login
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reports">
        <Stack.Screen name="Reports" component={ReportListScreen} />
        <Stack.Screen name="Details" component={ReportDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
