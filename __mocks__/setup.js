
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
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-fbsdk');
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({ navigate: jest.fn() }),
  useRoute: () => ({
    params: {
      item: 'item',
      item: 'item',
    }
  }),
}));
jest.mock('@react-native-google-signin/google-signin', () => {});

global.__reanimatedWorkletInit = jest.fn();