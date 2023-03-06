import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import searchScreen from "./.expo/src/screens/searchScreen";

const navigator = createStackNavigator(
  {
    Search: searchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
