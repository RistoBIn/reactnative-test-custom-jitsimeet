import React, { useEffect } from 'react';
import {
    View,
    StatusBar,
} from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            const userInfo = { displayName: 'Risto Binovski', email: 'risto@example.com', avatar: 'https:/gravatar.com/avatar/abc123' };
            JitsiMeet.call("https://meet.jit.si/abcd123", userInfo);
        }, 2000);
    })

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" hidden />
            <View style={{ flex: 1 }}>
                <JitsiMeetView
                    onConferenceTerminated={() => {}}
                    onConferenceJoined={() => {}}
                    onConferenceWillJoin={() => {}}
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        height: '100%',
                        width: '100%'
                    }}
                />
            </View>
        </View>
    );
};

export default App;