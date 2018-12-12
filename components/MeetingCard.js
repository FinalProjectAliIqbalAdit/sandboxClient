import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, WebView, TouchableOpacity, TouchableHighlight, Modal, Button} from 'react-native';

export default class ArticleCard extends Component {

    state = {
        modalVisible : false
    }

    pressHandler = () => {
        this.toggleModal()
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            modalVisible : !this.state.modalVisible
        })
    }

    render() {
        return (
            <>
                <View style={styles.box}>
                    <View style={styles.boxHeader}>
                        <TouchableHighlight
                            onPress={() => {
                                this.props.showDetail(this.props.meeting.title, this.props.meeting)
                            }}>
                            <Text style={{fontSize: 15, fontWeight:'bold'}}> { this.props.meeting.title } </Text>
                        </TouchableHighlight>
                        <TouchableOpacity onPress={this.pressHandler}>
                            <View style={styles.boxHeader}>
                                <Text> {this.props.meeting.host.name} </Text>
                                <Image
                                    style={{width: 30, height: 30}}
                                    source={{uri: this.props.meeting.host.avatar || 'https://storage.googleapis.com/h8ikestore.adishare.online/User-placeholder.png' }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
      
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        console.log('Modal has been closed.');
                    }}
                    >
                    <View style={{ flex: 1 ,flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <View style={{ height: "50%" ,width: '100%', backgroundColor:"#fff" , alignItems: 'center'}}>
                            <Image
                                style={{width: 150, height: 150}}
                                source={{uri: this.props.meeting.host.avatar || 'https://storage.googleapis.com/h8ikestore.adishare.online/User-placeholder.png' }}
                            />
                            <Text> {this.props.meeting.host.name} </Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.toggleModal()
                                }}>
                                <Button title={'Back'} onPress={ () => this.toggleModal() }/>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </>
        );
    }
}

const styles = StyleSheet.create({
    box : {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        width : '95%',
        padding : 10
    },
    boxHeader : {
        justifyContent :'space-between',
        flexDirection : 'row',
        alignItems : 'center'
    },
    modalWrapper : {
        flex: 5,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        width : '95%',
        height : '50%',
        padding : 10
    }
});
