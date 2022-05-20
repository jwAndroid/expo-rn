import React, { memo, useCallback, useMemo } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';
import { Theme } from 'react-native-calendars/src/types';
import { StatusBar } from 'expo-status-bar';
import styled from '@emotion/native';

import {
  dayNames,
  dayNamesShort,
  monthNames,
  monthNamesShort,
} from './src/calendars';

LocaleConfig.locales.ko = {
  monthNames,
  monthNamesShort,
  dayNames,
  dayNamesShort,
  today: 'today',
};

LocaleConfig.defaultLocale = 'ko';

const Header = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: 20,
});

const Month = styled.Text({
  includeFontPadding: false,
  textAlignVertical: 'center',
  fontSize: 20,
  color: '#303030',
  fontWeight: 'bold',
});

const Year = styled.Text({
  includeFontPadding: false,
  textAlignVertical: 'center',
  fontSize: 12,
  color: '#303030',
});

interface IDayContainer {
  isToday: boolean;
}

const DayContainer = styled.View<IDayContainer>(({ isToday }) => ({
  paddingVertical: 4,
  paddingHorizontal: 6,
  backgroundColor: isToday ? '#e0e0e0' : '#fff',
  borderRadius: 8,
}));

const Past = styled.Text({
  includeFontPadding: false,
  textAlignVertical: 'center',
  textAlign: 'center',
  fontSize: 12,
  color: '#30303033',
  fontWeight: '400',
});

const Sunday = styled.Text({
  includeFontPadding: false,
  textAlignVertical: 'center',
  textAlign: 'center',
  fontSize: 12,
  color: '#fc81b6',
  fontWeight: '400',
});

const Saturday = styled.Text({
  includeFontPadding: false,
  textAlignVertical: 'center',
  textAlign: 'center',
  fontSize: 12,
  color: '#00beff',
  fontWeight: '400',
});

const Day = styled.Text({
  includeFontPadding: false,
  textAlignVertical: 'center',
  textAlign: 'center',
  fontSize: 12,
  color: '#303030',
  fontWeight: '400',
});

const Today = styled.Text({
  includeFontPadding: false,
  textAlignVertical: 'center',
  textAlign: 'center',
  fontSize: 10,
  color: '#303030',
  fontWeight: '500',
  marginTop: 2,
});

const now = new Date();

const App = () => {
  const theme = useMemo<Theme>(() => {
    return {
      // @ts-ignore
      'stylesheet.calendar.header': {
        week: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        },
        dayTextAtIndex0: {
          color: '#fc81b6',
        },
        dayTextAtIndex6: {
          color: '#00beff',
        },
      },
      textDayHeaderFontSize: 12,
      textSectionTitleColor: '#999',
      textDayHeaderFontWeight: 'bold',
      dayTextColor: '#fff',
    };
  }, []);

  const style = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      marginTop: 50,
    };
  }, []);

  const calendarStyle = useMemo<ViewStyle>(() => {
    return {
      marginTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    };
  }, []);

  const renderHeader = useCallback((date: string) => {
    const originDate = new Date(date);
    const year = originDate.getFullYear();
    const month = originDate.getMonth() + 1;

    return (
      <Header>
        <Month>{`${month}월`}</Month>
        <Year>{year}</Year>
      </Header>
    );
  }, []);

  const dayComponent = useCallback(({ date, state }) => {
    const originDate = new Date(date.dateString);
    const isToday = state === 'today';
    const isSunday = originDate.getDay() === 0;
    const isSaturday = originDate.getDay() === 6;

    if (state === 'disabled') {
      return (
        <DayContainer isToday={isToday}>
          <Past>{date.day}</Past>
          <Today>{isToday ? '오늘' : ''}</Today>
        </DayContainer>
      );
    }

    if (isSunday) {
      return (
        <DayContainer isToday={isToday}>
          <Sunday>{date.day}</Sunday>
          <Today>{isToday ? '오늘' : ''}</Today>
        </DayContainer>
      );
    }

    if (isSaturday) {
      return (
        <DayContainer isToday={isToday}>
          <Saturday>{date.day}</Saturday>
          <Today>{isToday ? '오늘' : ''}</Today>
        </DayContainer>
      );
    }

    return (
      <DayContainer isToday={isToday}>
        <Day>{date.day}</Day>
        <Today>{isToday ? '오늘' : ''}</Today>
      </DayContainer>
    );
  }, []);

  return (
    <SafeAreaView>
      <StatusBar style="auto" backgroundColor="#fff" />

      <CalendarList
        theme={theme}
        style={style}
        calendarStyle={calendarStyle}
        minDate={now}
        pastScrollRange={0}
        futureScrollRange={11}
        renderHeader={renderHeader}
        dayComponent={dayComponent}
      />
    </SafeAreaView>
  );
};

export default memo(App);
