import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    position: "relative",
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 11,
    marginBottom: 20,
  },
  largeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0D0D0D",
  },
  smallText: {
    fontSize: 12,
    color: "#7E7B7B",
    marginBottom: 15,
  },
  placeholderText: {
    fontSize: 16,
    color: "#7E7B7B",
    marginBottom: 7,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: "#7E7B7B",
    paddingHorizontal: 15,
    fontSize: 16,
  },
  passwordGroup: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: "#7E7B7B",
  },
  formGroup: {
    marginTop: 30,
  },
  forgotPasswordText: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "right",
    color: "#2B876E",
  },
  button: {
    backgroundColor: "#2B876E",
    height: 53,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    color: "white",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 25,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: "#C2C2C2",
    flex: 1,
  },
  dividerText: {
    fontSize: 16,
    color: "#C2C2C2",
  },
  socialMediaButton: {
    borderWidth: 1,
    borderColor: "#DCDCDC",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  socialMediaButtonText: {
    fontSize: 16,
    color: "#0D0D0D",
  },
  socialMediaButtonGroup: {
    marginTop: 0,
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  subText: {
    fontSize: 14,
    color: "#B5B5B5",
  },
  subTextJoin: {
    fontSize: 14,
    color: "#FFA800",
    fontWeight: "600",
    marginLeft: 5,
  },
});

export { styles };
