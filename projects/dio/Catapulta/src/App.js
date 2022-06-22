import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    Pressable,
    Linking,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/101351309?v=4';

const urlToMyGitHub = 'https://github.com/RosanaTSF';

const App = () => {
    const handlePressGoToGitHub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGitHub);
        if (res) {
            console.log('Link aprovado!');
            console.log('Abrindo link...');
            await Linking.openURL(urlToMyGitHub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barbarStyle="light-content" />
            <View style={style.content}>
                <Image
                    accessibilityLabel="Rosana de blusa amarela de gola alta, fundo paisagem verde e branca."
                    style={style.avatar}
                    source={{ uri: imageProfileGitHub }}
                />
                <Text
                    accessibilityLabel="Nome: Rosana TSF"
                    style={[style.defaultText, style.name]}>Rosana TSF</Text>
                <Text
                    accessibilityLabel="Nickname: RosanaTSF"
                    style={[style.defaultText, style.nickname]}>RosanaTSF</Text>
                <Text
                    accessibilityLabel="Descrição: Lawyer | Web Developer | rosanatsf@gmail.com</Text>"
                    style={[style.defaultText, style.description]}>Lawyer | Web Developer | rosanatsf@gmail.com
                </Text>

                <Pressable onPress={handlePressGoToGitHub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in GitHub
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //Column
        backgroundColor: 'colorGitHub',
        flex: 1, // Expande para a tela inteira.
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGitHub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colorDarkFontGitHub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
