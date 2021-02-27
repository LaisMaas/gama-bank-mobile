import React from "react";
import {useNavigation} from "@react-navigation/native";
import ButtonPrimary from "../../components/ButtonPrimary";
import {InputLoginRegister, LinksBottom} from "./styles";
import WhiteCardLoginRegister from "../../components/WhiteCardLoginRegister";
import Feather from "react-native-vector-icons/Feather";
import ContainerViewLoginRegister from "../../components/ContainerViewLoginRegister";
import ContainerScroll from "../../components/ContainerScrollView";
import ContainerLogoGama from "../../components/LogoGama";

export default function ForgotPasswd() {

    const navigation = useNavigation();

    function navLogin() {
        navigation.navigate('Login')
    }

    function navCreateAccount() {
        navigation.navigate('CreateAccount')
    }

    return (
        <ContainerScroll>
            <ContainerLogoGama mTop="50px" mBottom="20px"/>
            <ContainerViewLoginRegister>
                <WhiteCardLoginRegister title="Redefinir senha" subtitle={null}>
                    <InputLoginRegister placeholder="Digite seu E-mail"/>
                    <InputLoginRegister _mTop="60px" placeholder="Digite seu Login"/>
                    <ButtonPrimary title="Continuar" iconName="arrow-right" iconColor="#FFF" iconSize={25} marginTop="60px" marginBottom="30px" />
                    {/*<LinksBottom onPress={navRedefinePassword}>Continuar <Feather name="chevron-right" size={13} color="#8C52E5" /></LinksBottom>*/}
                    <LinksBottom onPress={navLogin}>Ir para Login <Feather name="chevron-right" size={13} color="#8C52E5" /></LinksBottom>
                    <LinksBottom onPress={navCreateAccount}>Ainda não sou cliente <Feather name="chevron-right" size={13} color="#8C52E5" /></LinksBottom>
                </WhiteCardLoginRegister>




                {/*<ButtonPrimary*/}
                {/*    title="Esqueci senha"*/}
                {/*    onPress={() => navigation.navigate("ForgotPasswd")}*/}
                {/*/>*/}
                {/*<ButtonPrimary*/}
                {/*    title="Criar Conta"*/}
                {/*    onPress={() => navigation.navigate("CreateAccount")}*/}
                {/*/>*/}
                {/*<ButtonPrimary*/}
                {/*    title="Ir para dashboard"*/}
                {/*    onPress={() => navigation.navigate("DashboardTabNavigator")}*/}
                {/*/>*/}
                {/*<ButtonPrimary*/}
                {/*    title="Ir para o login"*/}
                {/*    onPress={() => navigation.navigate("Login")}*/}
                {/*/>*/}

            </ContainerViewLoginRegister>
        </ContainerScroll>
    );
}
