import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
// import SignaturePanel from './src/screens/SignaturePanelScreen'
// import SignatureCanvas from './src/screens/SingnatureCanvasScreen'
// import NativeCanvasScreen from './src/screens/NativeCanvasScreen'
// import CanvasSketchScreen from './src/screens/CanvasSketchScreen'
import BasicOperationScreen from './src/screens/BasicOperationScreen'

const navigator = createStackNavigator(
  { 
    Home: HomeScreen,
    // SignPanel: SignaturePanel,
    // SignCanvas: SignatureCanvas,
    // NativeCanvas: NativeCanvasScreen,
    // CanvasSketch: CanvasSketchScreen,
    BasicOperation: BasicOperationScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
