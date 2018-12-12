import React, {Component} from 'react';
import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import { connect } from 'react-redux'

import { fetchMeetings } from "../store/meetingsAction";

import MeetingCard from '../components/MeetingCard'

class Meetings extends Component {

    componentDidMount(){
      // this.props.fetchMeetings()
    }

    showDetail = (title, meeting) => {
      this.props.navigation.navigate('MeetingDetail', { title, meeting })
    }
    
    render(){
      if(this.props.loading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
  
      return(
        <View style={{flex: 1}}>
          <Text> {JSON.stringify(this.props)} </Text>
          <FlatList
            data={this.props.meetings}
            renderItem={({item}) => {
              return (<MeetingCard
                key={item._id}
                meeting={item}
                showDetail={ this.showDetail }
              ></MeetingCard>)}
            }
            keyExtractor={({_id}, index) => _id}
          />
        </View>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    loading : state.meetings.loading,
    meetings : state.meetings.meetings,
    error : state.meetings.error
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMeetings: () => {dispatch(fetchMeetings())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Meetings)
