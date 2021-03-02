import React from "react";
import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
//
import DashboardHome from "../screens/DashboardHome";
import DrawerContentView from "../components/DrawerContentView";
import DrawerContentInformation from "../components/DrawerContentInformation";
import { SeparatorBorder } from "../components/DrawerContentView/styles";

export type DrawerParamList = {
    DashboardHome: undefined;
    Login: undefined;
};

function DrawerInfoUser() {
    return (
        <DrawerContentScrollView>
            <DrawerContentView>
                <DrawerContentInformation title="Seu nome:" description="Nome do Usuário"/>
                <DrawerContentInformation title="E-mail:" description="email@email.com"/>
                <DrawerContentInformation title="Username:" description="UserName"/>
                <DrawerContentInformation title="CPF:" description="000.000.000-00"/>
                <SeparatorBorder />
                <DrawerContentInformation title="Você tem" description="4 planos de conta"/>
            </DrawerContentView>
        </DrawerContentScrollView>
    )
}

const {Navigator, Screen} = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
    return (
        <Navigator drawerContent={DrawerInfoUser} drawerPosition="right">
            <Screen name="DashboardHome" component={DashboardHome}/>
        </Navigator>
    )
}