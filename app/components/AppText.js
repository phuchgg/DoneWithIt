import React from 'react';
import { Text, StyleSheet} from 'react-native';

function AppText({children}) {
    return (
        <Text styles={styles.text}>{children}</Text>
    );
}

export default AppText;