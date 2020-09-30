import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type AuthParamList = {
    Buttons?: undefined;
    Others?: undefined
}

export type AuthNavList<T extends keyof AuthParamList> = {
    navigation: StackNavigationProp<AuthParamList, T>;
    route:  RouteProp<AuthParamList, T>

}

export interface NavParams {
    navigation: any;
    route: any;
}

