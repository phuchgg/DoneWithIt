import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image, SafeAreaView, Button, Alert, Platform, Dimension, Dimensions, SafeAreaViewBase, ImageBackground, TextInput } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/Text';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/Button';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import {useState} from 'react';
import AppTextInput from './app/components/TextInput';
import AppPicker from './app/components/Picker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {

  return (
   <ListingEditScreen/>
  );
}
