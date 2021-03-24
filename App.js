import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image, SafeAreaView, Button, Alert, Platform, Dimension, Dimensions, SafeAreaViewBase, ImageBackground } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen'
 
export default function App() {
  return (
    <MessagesScreen/>
  );
}
