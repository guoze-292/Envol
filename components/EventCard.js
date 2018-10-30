import React from 'react';
import { Card, CardItem, Text } from 'native-base';
import { Icon } from 'expo';
import Colors from '../constants/Colors';

export default class EventCard extends React.Component {

  renderLabels() {
    let labelItem = this.props.labels.map( (i,k) => {
      return (
        <Text style={{fontSize: 11, fontWeight: '100', marginRight: 5}}
              key={k}>
         {i}
         </Text>)
    });
    return labelItem;
    // this.props.labels.forEach(function(value){
    //   console.log(value);
    //   return <Text style={{fontSize: 11, fontWeight: '199'}}>{value}</Text>;
    // });
  }

  render() {
  const { labels, title, time, location } = this.props;
  const { slabels, stitle, stime, slocation } = styles;

  return (
      <Card  >
        <CardItem  style={{paddingBottom: 0, paddingTop: 5, paddingLeft: 20}}>
          {this.renderLabels()}
        </CardItem>
        <CardItem button onPress={this.props.onPress} style={{paddingBottom: 0, paddingTop: 5}}>
          <Text style={stitle}> {title}</Text>
        </CardItem>
        <CardItem >
          <Text style={stime}> {time} </Text>
          <Text style={slocation}> {location} </Text>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  stitle: {

    },
  slabels: {
    fontSize: 11,
    fontWeight: '100'
  },
  stime: {
    position: 'absolute',
    left: 20,
    fontSize: 10,
    fontWeight: '100'
  },
  slocation: {
    position: 'absolute',
    right: 20,
    fontSize: 12,
    fontWeight: '100',
    marginTop: 10
    
  }
};
