import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import {
    Container,
    Content,
    Card,
    CardHeader,
    CardContent,
    Title,
    Description,
    CardFooter,
    Annotation
} from './style'

export default function Main() {
    return (
        <Container>
            <Header />

            <Content>
                
                <Menu />

                <Card>
                    <CardHeader>
                        <MaterialIcons
                            name="attach-money"
                            size={28}
                            color="#666"
                        />
                        <MaterialIcons
                            name="visibility-off"
                            size={28}
                            color="#666"
                        />
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponivel</Title>
                        <Description>R$ 250.000.000.000</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>
                            Pix de R$ 207.000.000.000 recebido de ricardinho hoje às 16:50h
                        </Annotation>
                    </CardFooter>
                </Card>
            </Content>

            <Tabs />
        </Container>
    )
}
