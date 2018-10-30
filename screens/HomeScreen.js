import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import { Container, Content, Button } from 'native-base';
import { MonoText } from '../components/StyledText';
import EventCard from '../components/EventCard';
import EventDetail from '../components/EventDetail';

export default class HomeScreen extends React.Component {
  state = {
    modalVisible: false,
  };

  static navigationOptions = {
    title:'Explore',
  };

  toggleModal(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Container>
        <Content>
        <EventCard  onPress={() => {
                  this.setState({modalVisible: !this.state.modalVisible});
                }}
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <EventCard 
        labels={['music','business']} title={'Music Festival - Global Broncos 2018'}
        time={'11.30pm'} location={'Vari Hall'}>
        </EventCard>
        <Modal 
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
          >
          <EventDetail 
            labels={['music','business', 'professor']}
            title={'SCU Leavy School Professor Concert & Dance 2018'}
            time={'18:00'}
            location={'Lucas Hall'}
            detail={'Professor Libai is going to held an annual event at SCU asdkjfaklsdjflaksdjfklasdjfoaiu adfjailsdfj a kasjdfkladjfl ajdlfkj akldsfj aildf aoidjf ioajfio ajdiof jaiodfj ioajf q2jrk jiojvko nqkhzojdfqkejrfko jvio jk jkofjgj kjfgpaojfk2j op[aejfg'}
            eventId={'112318845'}
            cancel={()=>{this.setState({modalVisible: !this.state.modalVisible})}}
            save={()=>{this.setState({modalVisible: !this.state.modalVisible})}}
            />
        </Modal>
        </Content>
      </Container>
    );
  }

}

const styles = StyleSheet.create({

});
