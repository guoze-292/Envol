import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardItem, Text, Body, Button } from 'native-base';
import { Icon } from 'expo';
import Colors from '../constants/Colors';

export default class EventDetail extends React.Component {

  render() {
  const { labels, title, time, location, detail, eventId } = this.props;
  const { slabels, stitle, stime, slocation, 
          modalCard, sdetail, bottomButtonCancel, bottomButtonSave 
        } = styles;

  return (
      <Card style={modalCard}>
        <CardItem button style={{paddingBottom: 0, paddingTop: 5}}>
          <Text style={stitle}>{title}</Text>
        </CardItem>
        <CardItem style={{alignItems: 'flex-start'}}>
          <Text style={stime}>{time} </Text>
          <Text style={slocation}>{location} </Text>
        </CardItem>
        <CardItem>
          <Text style={sdetail}>{detail} </Text>
        </CardItem>
        <CardItem button onPress={this.props.save} style={bottomButtonCancel}>
          <Text style={{textAlign:'center', color: 'white'}}> Cancel </Text>
        </CardItem>
        <CardItem button onPress={this.props.save} style={bottomButtonSave}>
          <Text 
          style={{textAlign:'center', color: 'white'}}> Save </Text>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  modalCard: {
    top: '20%',
    width: '80%',
    height: '50%',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    shadowColor: '#4a4a4a'
  },
  stitle: {
    marginTop: 30, 
    fontSize: 18,
    fontWeight: '500'
    },
  stime: {
    fontSize: 12,
    fontWeight: '300'
  },
  slocation: {
    fontSize: 12,
    fontWeight: '300',
  },
  sdetail: {
    fontSize: 12,
    fontWeight: '300',
    height: 200
    },
  bottomButtonCancel: {
    position: 'absolute', 
    bottom: 40,
    width: '100%',
    backgroundColor: 'gray',
    justifyContent:  'center' 

  },
  bottomButtonSave:{
    position: 'absolute', 
    bottom: 0,
    width: '100%',
    backgroundColor: 'gray',
    justifyContent:  'center' 
  }
}
