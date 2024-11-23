import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    title: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    },

    text: {
        color: '#fff',
        fontSize: 12,
    },
});

export default globalStyles;
