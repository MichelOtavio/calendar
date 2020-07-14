/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  View,
  Text, 
  StyleSheet
  
} from 'react-native';
import { Agenda } from 'react-native-calendars';




const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}

const Schedule: React.FC = () => {

  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {newItems[key] = items[key];});
      setItems(newItems);
    }, 1000);
  }

  return(
    <View style={styles.item}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2017-05-16'}
        />
    </View>
  );
};


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

export default Schedule;