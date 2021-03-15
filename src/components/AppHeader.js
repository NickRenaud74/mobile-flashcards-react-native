import React from 'react'
import { Header } from 'react-native-elements'
import { blue, white } from '../utils/colors'

function AppHeader({ headerText }) {
    return (
        <Header 
            placement='center'
            centerComponent={{
                text: headerText, 
                style: {
                 color: white,
                 fontSize: 28
                }
            }}
            containerStyle={{backgroundColor: blue }}
        />
    )
}

export default AppHeader