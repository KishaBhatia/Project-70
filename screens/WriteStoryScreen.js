import React from 'react';
import { TextInput, View,TouchableOpacity,Header } from 'react-native';

export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            story:'',
        }   
    }
    getTitle=async(id)=>{
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions:status==='granted',
            buttonState:id,
        })
    }
    render(){
        return (
            <View>
                <View>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'WRITE A STORY', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                </View>
                <View>
                    <TextInput
                        placeHolder="Title of the Story"
                    />
                </View>
                <View>
                    <TextInput
                        placeHolder="Author of The Story"
                    />
                </View>
                <View>
                    <TextInput
                        multiline={true}
                        placeHolder="Write Story"
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={this.submitStory}>
                        <Text>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}