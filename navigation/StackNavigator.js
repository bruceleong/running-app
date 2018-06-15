import { createStackNavigator} from 'react-navigation'
import MapScreen from '../screens/MapScreen'

const StackNav = createStackNavigator({
    Map: { screen: MapScreen }
})

export default StackNav
