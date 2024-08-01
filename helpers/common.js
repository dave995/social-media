import { dimensions } from "react-native";

const {width: deviceWidth, height: deviceHeight} = Dimenssions.get('window');

const hp = percentage=>{
    return (percentage*deviceHeight) / 100;
}
const wp = percentage=>{
    return (percentage*deviceWidth) / 100;
}