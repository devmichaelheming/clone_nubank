import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import { Container, TabsContainer, TabItem, TabText } from './style'

export default function Tabs() {
    return (
        <Container>
            <TabsContainer>
                <TabItem>
                    <MaterialIcons
                        name="person-add"
                        size={24}
                        color="#FFFFFF"
                    />
                    <TabText>Indicar amigos</TabText>
                </TabItem>

                <TabItem>
                    <MaterialIcons
                        name="chat-bubble-outline"
                        size={24}
                        color="#FFFFFF"
                    />
                    <TabText>Cobrar</TabText>
                </TabItem>

                <TabItem>
                    <MaterialIcons
                        name="arrow-downward"
                        size={24}
                        color="#FFFFFF"
                    />
                    <TabText>Depositar</TabText>
                </TabItem>

                <TabItem>
                    <MaterialIcons
                        name="arrow-upward"
                        size={24}
                        color="#FFFFFF"
                    />
                    <TabText>Transferir</TabText>
                </TabItem>

                <TabItem>
                    <MaterialIcons
                        name="lock"
                        size={24}
                        color="#FFFFFF"
                    />
                    <TabText>Bloquear</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}