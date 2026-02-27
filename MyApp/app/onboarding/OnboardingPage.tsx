import React from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType, useWindowDimensions } from "react-native";

const FIGMA_W = 393;
const FIGMA_H = 852;

// Footer height (dots + button) used in app/onboarding/index.tsx
const FOOTER_SPACE = 140;

type Props = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
};

export default function OnboardingPage({ image, title, subtitle }: Props) {
  const { width, height } = useWindowDimensions();

  // scale factor based on figma width
  const s = width / FIGMA_W;

  // hero block height (Figma top area ~560px)
  const heroH = Math.min(height * 0.62, 560 * s);

  return (
    <View style={[styles.screen, { paddingBottom: FOOTER_SPACE }]}>
      <View style={[styles.heroWrap, { height: heroH }]}>
        <Image source={image} style={styles.hero} resizeMode="contain" />
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { fontSize: 32 * s, lineHeight: 40 * s }]}>
          {title}
        </Text>

        <Text style={[styles.subtitle, { fontSize: 16 * s, lineHeight: 22 * s }]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  heroWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  hero: {
    width: "100%",
    height: "100%",
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  title: {
    color: "#001448",
    fontWeight: "600",
    letterSpacing: -1,
    marginBottom: 12,
  },
  subtitle: {
    color: "rgba(0,20,72,0.6)",
    letterSpacing: -0.3,
  },
});