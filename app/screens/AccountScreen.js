import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import { StyleSheet, View, FlatList} from 'react-native';
import Icon from '../components/Icon'
import colors from '../config/colors';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View>
                <ListItem
                    title ="Mosh Hamedani"
                    subTitle="programming@gmail.com"
                    image={require('../assets/mosh.jpg')}
                >
                </ListItem>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({item}) =>
                        <ListItem 
                        title={item.title}
                        IconComponent={
                            <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                        }
                        />
                    } 
                />
            </View>
            <ListItem
                title="Logout"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d"   
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20
    },
    screen:{
        backgroundColor: colors.lightgrey,
    }
})

export default AccountScreen;