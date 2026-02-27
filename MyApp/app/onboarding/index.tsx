import React, { useRef, useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, SafeAreaView, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";

const PAGES = 3;

export default function OnboardingRoute() {
  const router = useRouter();
  const scrollRef = useRef<ScrollView | null>(null);
  const { width } = useWindowDimensions();
  const [page, setPage] = useState(0);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(PAGES - 1, i));
    setPage(clamped);
    scrollRef.current?.scrollTo({ x: clamped * width, animated: true });
  };

  const next = () => {
    if (page < PAGES - 1) goTo(page + 1);
    else router.replace("/home");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => setPage(Math.round(e.nativeEvent.contentOffset.x / width))}
        >
          <View style={{ width }}><Onboarding1 /></View>
          <View style={{ width }}><Onboarding2 /></View>
          <View style={{ width }}><Onboarding3 /></View>
        </ScrollView>

        <View style={styles.footer}>
          <View style={styles.dots}>
            {Array.from({ length: PAGES }).map((_, i) => (
              <View key={i} style={[styles.dot, i === page ? styles.dotActive : styles.dotInactive]} />
            ))}
          </View>

          <TouchableOpacity activeOpacity={0.85} onPress={next} style={styles.btnWrap}>
            <LinearGradient colors={["#91AFFF", "#0248FF"]} style={styles.btn}>
              <Text style={styles.btnText}>{page === PAGES - 1 ? "Get Started" : "Next"}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F9F9F9" },
  container: { flex: 1, backgroundColor: "#F9F9F9" },

  footer: { position: "absolute", left: 0, right: 0, bottom: 28, alignItems: "center" },
dots: {
  position: "absolute",
  top: 530, // 👈 move dots under image
  flexDirection: "row",
},  dot: { height: 8, borderRadius: 12, marginHorizontal: 6 },
  dotActive: { width: 33, backgroundColor: "#0248FF" },
  dotInactive: { width: 8, backgroundColor: "rgba(0,20,72,0.12)" },

  btnWrap: { width: 357, height: 56, borderRadius: 12, overflow: "hidden" },
  btn: { flex: 1, alignItems: "center", justifyContent: "center" },
  btnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});