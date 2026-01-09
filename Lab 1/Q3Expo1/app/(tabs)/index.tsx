import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text,Button  } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react';

export default () => {
    const [pressCount, setPressCount] = useState(0);

    return(
        <View style={{alignItems: "center", marginTop: 200}}>
            <Text>You've passed the button: {pressCount} time(s)</Text>
            <Button title="Press me" onPress={() => setPressCount(pressCount + 1)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
