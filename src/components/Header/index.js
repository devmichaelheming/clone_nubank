import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Top, Logo, Title } from './style'

import logo from '../../assets/Nubank_Logo.png'

export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Michael Heming</Title>
            </Top>
            <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                color="#FFFFFF"
            />
        </Container>
    )
}
