import React from 'react';
import {View, StyleSheet, Platform, TextInput, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyle from '../config/styles'
import AppText from './Text'
import {useState} from 'react';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon,items ,placeholder, onSelectItem, selectedItem, PickerItemComponent = PickerItem, numberOfColumns=1}) {
    const [modalVisible, setModalVisible] =  useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                {icon && (<MaterialCommunityIcons name={icon} size={20} color={defaultStyle.colors.medium} style={styles.icon}/>)}
                {selectedItem ? (<AppText style={styles.text}>{selectedItem.label}</AppText>) : (<AppText style={styles.placeholder}>{placeholder}</AppText>)}
                <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyle.colors.medium} />
            </View> 
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
        <Screen>
            <Button title="Close" onPress={() => setModalVisible(false)}/>
                <FlatList
                    numColumns={numberOfColumns}
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({item}) => 
                    (<PickerItemComponent
                        item={item}
                        label={item.label}
                        onPress={() => {
                            setModalVisible(false);
                            onSelectItem(item);
                        }}
                    />)
                    }
                />
        </Screen>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyle.colors.lightgrey,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon:{
        marginRight: 10,
    },
    placeholder:{
        color: defaultStyle.colors.medium,
        flex: 1,
    },
    text:{
        flex: 1
    },
    

})

export default AppPicker;