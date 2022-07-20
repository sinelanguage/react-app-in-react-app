/* eslint-disable import/no-anonymous-default-export */
export const broadcastChannelDefaults = {
    channel: {
        id: 1,
        name: "ldp_channel"
    },
    parent: {
        pub: [{
            id: 1,
            message: 'Broadcast API Message origin: PARENT APP'
        }],
        sub: [{
            id: 2,
            message: 'Subcriber: PARENT APP, RECEIVED NOTIFCATION FROM BROWSER CHANNEL API: '
        }]
    },
    child: {
        pub: [{
            id: 1,
            message: 'Broadcast API Message origin: CHILD APP'
        }],
        sub: [{
            id: 2,
            message: 'Subcriber: CHILD APP, RECEIVED NOTIFCATION FROM BROWSER CHANNEL API: '
        }]
    }
}

export default {
    broadcastChannelDefaults
}


