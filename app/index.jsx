import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Button } from 'react-native-web';
import ScreenWrapper from '../components/ScreenWrapper';

export default function index() {
    const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="welcome" onPress={()=> router.push('welcome')} />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})