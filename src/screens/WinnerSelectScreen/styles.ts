import { StyleSheet } from "react-native";
import globalStyles from "../../styles/global";
import containerStyles from "../../styles/container";
import listStyles from "../../styles/list";
import buttonStyles from "../../styles/button";

const winnerSelectStyles = StyleSheet.create({
    background: {
        ... globalStyles.background,
    },
    
    main: {
        ... globalStyles.main,
        paddingVertical: 12,
        gap: 12,
        justifyContent: 'space-between',
    },

    mainText: {
        ... globalStyles.text,
    },

    sectionContainer: {
        ... containerStyles.container,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        padding: 12,
        minWidth: 240,
    },

    sectionTitle: {
        ... globalStyles.title,
    },

    potListContainer: {
        ... listStyles.listContainer,
        width: '100%',
    },

    potListElementContainer: {
        ... containerStyles.container,
        ... listStyles.listElementContainer,
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
    },

    potListItemTitle: {
        ... globalStyles.title,
    },

    playerListContainer: {
        ... listStyles.listContainer,
    },

    playerListButton: {
        ... buttonStyles.unselected,
        marginVertical: 4,
        paddingVertical: 4,
        paddingHorizontal: 12,
    },

    playerListSelectedButton: {
        ... buttonStyles.button,
    },

    playerListButtonText: {
        ... buttonStyles.unselectedText,
    },

    playerListSelectedButtonText: {
        ... buttonStyles.buttonText,
    },

    submitButton: {
        ... buttonStyles.button,
        ... buttonStyles.mainButton,
    },

    submitButtonText: {
        ... buttonStyles.buttonText,
        ... buttonStyles.mainButtonText,
    },
});

export default winnerSelectStyles