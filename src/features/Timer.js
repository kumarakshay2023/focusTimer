import React, { useState } from 'react';
import { View, StyleSheet, Text,Vibration } from 'react-native';
import { Countdown } from '../components/CountDown';
import {useKeepAwake} from 'expo-keep-awake'
import { RoundedButton } from '../components/RoundedButton';
import {ProgressBar} from 'react-native-paper';
import { spacing } from '../utils/sizes';
import {Timing} from './Timing'
import { colors } from '../utils/colors';
const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];
export const Timer = ({ focusSubject,clearSubject,onTimerEnd }) => {
  useKeepAwake()
  const [isStarted, setIsStarted] = useState(false);
  const [progress,setProgress] = useState(1);
  const [minutes,setMinutes] = useState(0.1)
  const onEnd = ()=>{
  Vibration.vibrate(PATTERN);
  setIsStarted(false);
  setProgress(1);
  setMinutes(0.1);
  onTimerEnd(focusSubject);
}
  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={setProgress}
          minutes={minutes}
          onEnd={onEnd}
        />
        <View style={{ padding: spacing.xxl }}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject} </Text>
        </View>
      </View>
   <View style={{padding:spacing.sm}}>
    <ProgressBar progress={progress} color={colors.progressBar} style={{height:spacing.sm}}/>
   </View>
     <View style={styles.timmingWraper}>
       <Timing onChangeTime={setMinutes}/>
      </View>
      <View style={styles.buttonWraper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
          <RoundedButton size={50} title="-" onPress={clearSubject}/>
      </View>
 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWraper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  clearSubjectWrapper:{
   flexDirection:'row',
   justifyContent:'center'
  },
  timmingWraper:{
    flex:0.1,
    flexDirection:'row',
    paddingTop:spacing.md
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  },
});
