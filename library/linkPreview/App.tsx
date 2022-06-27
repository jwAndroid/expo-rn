import { View } from 'react-native';
import { LinkPreview } from '@flyerhq/react-native-link-preview';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LinkPreview text="http://json.parser.online.fr/" />
    </View>
  );
}
