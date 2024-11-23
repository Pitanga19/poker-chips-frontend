import { StyleSheet } from "react-native";
import globalStyles from "../../styles/global";
import containerStyles from "../../styles/container";
import inputStyles from "../../styles/input";
import buttonStyles from "../../styles/button";
import listStyles from "../../styles/list";

const playerSelectStyles = StyleSheet.create({
    background: {
        ... globalStyles.background,
    },
    
    main: {
        ... globalStyles.main,
        paddingVertical: 12,
        gap: 12,
        justifyContent: 'space-between',
    },

    mainContainer: {
        width: 280,
        gap: 12,
    },

    mainFormContainer: {
        width: 280,
        gap: 12,
    },

    mainText: {
        ... globalStyles.text,
        fontSize: 14,
    },

    sectionContainer: {
        ... containerStyles.container,
        ... containerStyles.sectionContainer,
        gap: 8,
    },

    sectionTitle: {
        ... globalStyles.title,
        fontSize: 14,
    },

    newPlayerUserInput: {
        ... inputStyles.textInput,
        margin: 0,
        width: '100%',
    },

    newPlayerChipSection: {
        flexDirection: 'row',
        width: '100%',
        gap: 10,
    },

    newPlayerChipInput: {
        ... inputStyles.textInput,
        minWidth: 112,
    },

    newPlayerButton: {
        ... buttonStyles.button,
        justifyContent: 'center',
        flexGrow: 1,
        paddingVertical: 4,
        paddingHorizontal: 16,
    },

    newPlayerButtonText: {
        ... buttonStyles.buttonText,
        fontSize: 12,
    },

    sectionPlayerListContainer: {
    },

    playerListContainer: {
        ... listStyles.listContainer,
    },

    playerListElementContainer: {
        ... containerStyles.container,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 12,
        padding: 4,
    },

    playerListTitle: {
        ... globalStyles.title,
    },

    submitButton: {
        ... buttonStyles.button,
        ... buttonStyles.mainButton,
    },

    submitButtonText: {
        ... buttonStyles.buttonText,
        ... buttonStyles.mainButtonText,
    },
})

export default playerSelectStyles;