import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#c22',
        borderRadius: 4,
        alignItems: 'center',
    },

    mainButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    mainButtonText: {
        fontSize: 20,
    },

    unselected: {
        backgroundColor: 'rgb(44, 44, 44)',
        alignItems: 'center',
    },

    unselectedText: {
        color: '#ddd',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default buttonStyles;
