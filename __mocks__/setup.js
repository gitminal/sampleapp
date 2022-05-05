
import 'react-native-gesture-handler/jestSetup';
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = async() => {};

  return Reanimated;
});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-safe-area-view', () => 'react-native-safe-area-view');
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')
jest.mock('react-native-gesture-handler')

// Add commonly used methods and objects as globals


global.__reanimatedWorkletInit = jest.fn();