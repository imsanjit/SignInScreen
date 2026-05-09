import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    console.log("Sign in pressed", { email, password });
  };

  const handleSocialLogin = (provider) => {
    console.log({ provider });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>✚</Text>
        </View>

        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subheading}>
          Let's experience the joy of telecare AI.
        </Text>

        <Text style={styles.label}>Email Address</Text>
        <View style={[styles.inputWrapper, styles.inputFocusedBorder]}>
          <Text style={styles.inputIcon}>✉️</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email..."
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <Text style={styles.label}>Password</Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>🔒</Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password..."
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            activeOpacity={0.6}
          >
            <Text style={styles.eyeIcon}>{showPassword ? "👁️" : "🙈"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={handleSignIn}
          activeOpacity={0.85}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.socialRow}>
          {[
            { label: "f", provider: "Facebook" },
            { label: "G", provider: "Google" },
            { label: "📷", provider: "Instagram" },
          ].map(({ label, provider }) => (
            <TouchableOpacity
              key={provider}
              style={styles.socialButton}
              onPress={() => handleSocialLogin(provider)}
              activeOpacity={0.7}
            >
              <Text style={styles.socialButtonText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{"  "}
            <Text style={styles.link} onPress={() => console.log("Sign up")}>
              Sign Up
            </Text>
          </Text>

          <TouchableOpacity onPress={() => console.log("Forgot password")}>
            <Text style={styles.link}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    alignItems: "center",
  },

  logoContainer: {
    marginBottom: 12,
  },
  logoIcon: {
    fontSize: 40,
    color: "#4CAF50",
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  subheading: {
    fontSize: 14,
    color: "#888",
    marginBottom: 32,
    textAlign: "center",
  },

  label: {
    alignSelf: "flex-start", // left-align inside the centered container
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
    marginTop: 4,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 52,
  },

  inputFocusedBorder: {
    borderColor: "#4CAF50",
  },

  inputIcon: {
    fontSize: 16,
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },

  eyeIcon: {
    fontSize: 18,
    paddingLeft: 8,
  },

  signInButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#4CAF50",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 28,
    // Shadow (iOS)
    shadowColor: "#4CAF50",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    // shadow on Android
    elevation: 6,
  },

  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1.5,
  },

  socialRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 28,
  },

  socialButton: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },

  socialButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#444",
  },

  footer: {
    alignItems: "center",
    gap: 8,
  },

  footerText: {
    fontSize: 13,
    color: "#888",
  },

  link: {
    color: "#5fc562",
    fontWeight: "600",
    textDecorationLine: "underline",
    fontSize: 13,
  },
});
