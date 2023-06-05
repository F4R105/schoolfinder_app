import { StyleSheet } from "react-native";

export default FilterStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#050811ff'
      },
      headerContainer: {
        paddingTop: 40,
        paddingBottom: 10,
      },
      header: {
        fontSize: 25,
        fontWeight: "Bold", 
        color: "white"
      },
      subheader: {
        fontSize: 15,
        color: "white",
        textTransform: "uppercase",
        paddingVertical: 5
      },
      dropdown: {
        width: "100%",
        backgroundColor: "blue"
      },
      category: {
        paddingBottom: 18,
        paddingTop: 10,
        flexDirection: "row"
      },
      option: {
        minWidth: 120,
        minHeight: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 100,
        padding: 8,
        marginRight: 10,
      },
      text: {
        color: "white",
        fontWeight: "bold"
        },
      filterBtnContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        elevation: 8
      },
      button: {
        width: "90%",
        height: "60%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }
})