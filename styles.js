import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
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
        marginBottom: 10,
        width : '97%',
        padding : 10
    },
    boxHeader : {
        justifyContent :'space-between',
        flexDirection : 'row',
        alignItems : 'center'
    },
    inline : {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    input: {
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
        submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 5,
        height: 40,
    },
        submitButtonText:{
        color: 'white'
    }
});