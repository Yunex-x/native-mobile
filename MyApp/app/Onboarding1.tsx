import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  onNext?: () => void;
  hero?: ImageSourcePropType; // main image (bg_removal [Background removed].png)
};

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
// design artboard
const DESIGN_W = 393;
const DESIGN_H = 852;
// scale based on width (keeps pixel-perfect proportions)
const s = SCREEN_W / DESIGN_W;
const calc = (n: number) => Math.round(n * s);

export default function Onboarding1({ onNext, hero }: Props) {
  // Provide a fallback hero — user should replace with their asset
  const heroSource =
    hero ||
    // put a placeholder image in your assets and pass it as prop, this just avoids a crash
    require('../assets/images/Onboarding1.png');

  return (
    <View style={styles.container}>
      {/* blurred rotated big group behind */}
      <View
        style={[
          styles.group159,
          {
            // transform rotate & position from your CSS
            transform: [{ rotate: '13.03deg' }],
          },
        ]}
      >
        {/* Big blue circle */}
        <View
          style={[
            styles.ellipse34,
            {
              left: calc(208.63),
              top: calc(-235.72),
              width: calc(697.27),
              height: calc(697.27),
              borderRadius: calc(697.27) / 2,
            },
          ]}
        />
        {/* lighter ellipse */}
        <View
          style={[
            styles.ellipse35,
            {
              left: calc(-181),
              top: calc(-236),
              width: calc(479.91),
              height: calc(350.93),
              borderRadius: calc(479.91) / 2,
            },
          ]}
        />
      </View>

      {/* hero image centered */}
      <Image
        source={heroSource}
        style={[
          styles.hero,
          {
            width: calc(444),
            height: calc(444),
            left: (SCREEN_W - calc(444)) / 2 + calc(25.5),
            top: calc(79),
          },
        ]}
        resizeMode="cover"
        // simple blur to approximate background removal softness (iOS/Android difference)
        blurRadius={Platform.OS === 'android' ? 0 : 0}
      />

      {/* top-right microphone frosted pill */}
      <View
        style={[
          styles.frostPill,
          {
            left: calc(231),
            top: calc(107),
            width: calc(76),
            height: calc(32),
            borderTopRightRadius: calc(9),
            borderTopLeftRadius: calc(9),
            borderBottomLeftRadius: calc(9),
            borderBottomRightRadius: 0,
          },
        ]}
      >
        {/* icon placeholder: you can swap for SVG or Image */}
        <LinearGradient
          colors={['#91AFFF', '#0248FF']}
          style={styles.iconCircle}
        />
        <Text style={[styles.pillText]}>Deal</Text>
      </View>

      {/* left-top task frosted pill (mirrored) */}
      <View
        style={[
          styles.frostPill,
          {
            left: calc(40),
            top: calc(242),
            width: calc(76),
            height: calc(32),
            transform: [{ scaleX: -1 }],
            borderTopRightRadius: calc(9),
            borderTopLeftRadius: calc(9),
            borderBottomLeftRadius: calc(9),
            borderBottomRightRadius: 0,
          },
        ]}
      >
        <LinearGradient
          colors={['#91AFFF', '#0248FF']}
          style={styles.iconCircle}
        />
        <Text style={[styles.pillText]}>Task</Text>
      </View>

      {/* circular mic group */}
      <View
        style={[
          styles.micGroup,
          {
            left: (SCREEN_W - calc(152)) / 2 + calc(100.5),
            top: calc(301),
            width: calc(152),
            height: calc(152),
          },
        ]}
      >
        <LinearGradient
          colors={['rgba(2,72,255,0.29)', 'rgba(2,72,255,0)']}
          style={[
            StyleSheet.absoluteFill,
            { borderRadius: calc(152) / 2, opacity: 0.1, borderWidth: 1, borderColor: 'rgba(2,72,255,0.24)' },
          ]}
        />
        <View
          style={{
            position: 'absolute',
            left: (calc(152) - calc(109.53)) / 2,
            top: calc(21.24),
            width: calc(109.53),
            height: calc(109.53),
            backgroundColor: 'rgba(2,72,255,0.33)',
            opacity: 0.15,
            borderWidth: 1,
            borderColor: 'rgba(2,72,255,0.24)',
            borderRadius: calc(109.53) / 2,
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: (calc(152) - calc(80.47)) / 2,
            top: calc(35.76),
            width: calc(80.47),
            height: calc(80.47),
            borderRadius: calc(21),
            backgroundColor: 'transparent',
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#0248FF',
            shadowOffset: { width: 10, height: 10 },
            shadowOpacity: 0.13,
            shadowRadius: 20,
            elevation: 6,
          }}
        >
          <LinearGradient
            colors={['rgba(2,72,255,0.17)', 'rgba(255,255,255,0.08)']}
            style={{ width: '100%', height: '100%' }}
          />
          {/* microphone icon approximation */}
          <LinearGradient
            colors={['#91AFFF', '#0248FF']}
            style={{
              width: calc(36),
              height: calc(36),
              borderRadius: calc(18),
              position: 'absolute',
            }}
          />
        </View>
      </View>

      {/* Title & description block */}
      <View
        style={{
          position: 'absolute',
          width: calc(357),
          left: (SCREEN_W - calc(357)) / 2 - calc(6),
          top: calc(570),
        }}
      >
        <Text style={styles.title}>Voice-Powered CRM Updates</Text>
        <Text style={styles.subtitle}>
          Transform your spoken commands into structured CRM entries instantly. Add or update client data without typing.
        </Text>
      </View>

      {/* progress dots */}
      <View
        style={{
          position: 'absolute',
          left: (SCREEN_W - calc(65)) / 2,
          top: calc(536),
          width: calc(65),
          height: calc(8),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: calc(33),
            height: calc(8),
            // backgroundColor: 'linear-gradient( #91AFFF, #0248FF )', // removed invalid/duplicate property
            borderRadius: calc(12),
            backgroundColor: '#91AFFF',
            opacity: 1,
            marginRight: calc(6),
          }}
        />
        <View
          style={{
            width: calc(8),
            height: calc(8),
            backgroundColor: '#001448',
            opacity: 0.12,
            borderRadius: calc(12),
            marginRight: calc(6),
          }}
        />
        <View
          style={{
            width: calc(8),
            height: calc(8),
            backgroundColor: '#001448',
            opacity: 0.12,
            borderRadius: calc(12),
          }}
        />
      </View>

      {/* Next button */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onNext}
        style={{
          position: 'absolute',
          left: calc(18),
          top: calc(760),
          width: calc(357),
          height: calc(56),
          borderRadius: calc(12),
        }}
      >
        <LinearGradient
          colors={['#91AFFF', '#0248FF']}
          style={{
            flex: 1,
            borderRadius: calc(12),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontSize: calc(16), fontWeight: '700' }}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* bottom glow */}
      <View
        style={{
          position: 'absolute',
          left: calc(51),
          top: calc(820),
          width: calc(290),
          height: calc(9),
          backgroundColor: '#0248FF',
          opacity: 0.31,
          borderRadius: calc(9 / 2),
          transform: [{ translateY: 0 }],
          shadowColor: '#0248FF',
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 3,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  group159: {
    position: 'absolute',
    width: calc(1280.51),
    height: calc(939.24),
    left: calc(-235.37),
    top: calc(-338.45),
    opacity: 0.49,
    // approximate blur by lowering opacity; RN doesn't have CSS blur on Views (use Image blur if needed)
  },
  ellipse34: {
    position: 'absolute',
    backgroundColor: '#3A5EF3',
  },
  ellipse35: {
    position: 'absolute',
    backgroundColor: '#A4BDFE',
  },
  hero: {
    position: 'absolute',
    borderRadius: calc(8),
    overflow: 'hidden',
  },
  frostPill: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'rgba(255,255,255,0.19)',
    borderWidth: 0.2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 29,
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: calc(8),
  },
  iconCircle: {
    width: calc(24),
    height: calc(24),
    borderRadius: calc(12),
    marginRight: calc(6),
  },
  pillText: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '500',
    fontSize: calc(12),
    color: 'rgba(0,20,72,0.6)',
  },
  micGroup: {
    position: 'absolute',
  },
  title: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: calc(32),
    lineHeight: calc(40),
    color: '#001448',
    fontWeight: '600',
    marginBottom: calc(12),
  },
  subtitle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: calc(16),
    lineHeight: calc(22),
    color: 'rgba(0,20,72,0.9)',
    opacity: 0.6,
  },
});