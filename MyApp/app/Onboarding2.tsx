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
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  onNext?: () => void;
  hero?: ImageSourcePropType; // main image (bg_removal [Background removed].png)
};

const { width: SCREEN_W } = Dimensions.get('window');

// Design artboard size
const DESIGN_W = 393;
const DESIGN_H = 852;

// scale helper to keep pixel-proportions relative to design width
const s = SCREEN_W / DESIGN_W;
const calc = (n: number) => Math.round(n * s);

export default function Onboarding2({ onNext, hero }: Props) {
  const heroSource =
    hero || require('../assets/images/Onboarding2.png'); // replace with your asset

  // computed positions (approximate from the original CSS)
  const heroLeft = calc(16); // approx of calc(50% - 358px/2 - 1.5px)
  const heroTop = calc(88); // approx of calc(50% - 358px/2 - 159px)

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Background rotated blurred groups (approximate) */}
        <View
          style={[
            styles.bgGroup,
            {
              transform: [{ rotate: '13.03deg' }],
            },
          ]}
        >
          <View
            style={[
              styles.bgCircle,
              {
                left: calc(208.63),
                top: calc(-235.72),
                width: calc(697.27),
                height: calc(697.27),
                borderRadius: calc(697.27) / 2,
              },
            ]}
          />
          <View
            style={[
              styles.bgEllipse,
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

        {/* Hero image centered-ish */}
        <Image
          source={heroSource}
          style={[
            styles.hero,
            {
              width: calc(358),
              height: calc(358),
              left: heroLeft,
              top: heroTop,
            },
          ]}
          resizeMode="cover"
          blurRadius={0}
        />

        {/* Left circular group (search icon cluster) */}
        <View
          style={[
            styles.circleGroup,
            {
              left: calc(44),
              top: calc(370),
              width: calc(152),
              height: calc(152),
            },
          ]}
        >
          <LinearGradient
            colors={['rgba(2,72,255,0.29)', 'rgba(2,72,255,0)']}
            style={[
              StyleSheet.absoluteFill,
              {
                borderRadius: calc(152) / 2,
                opacity: 0.1,
                borderWidth: 1,
                borderColor: 'rgba(2,72,255,0.24)',
              },
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
            {/* search icon approximation */}
            <View
              style={{
                width: calc(32),
                height: calc(32),
                borderRadius: calc(16),
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.9,
              }}
            >
              <LinearGradient
                colors={['#91AFFF', '#0248FF']}
                style={{ width: calc(22), height: calc(22), borderRadius: calc(11) }}
              />
            </View>
          </View>
        </View>

        {/* Right frosted pill group (top-right) */}
        <View
          style={[
            styles.frostPill,
            {
              left: calc(235),
              top: calc(96),
              width: calc(125),
              height: calc(32),
              borderTopRightRadius: calc(9),
              borderTopLeftRadius: calc(9),
              borderBottomLeftRadius: calc(9),
              borderBottomRightRadius: 0,
            },
          ]}
        >
          <LinearGradient colors={['#91AFFF', '#0248FF']} style={styles.iconDot} />
          <Text style={styles.pillText}>Total Customer</Text>
        </View>

        {/* smaller frosted pill near search cluster (right of it) */}
        <View
          style={[
            styles.frostPill,
            {
              left: calc(209),
              top: calc(430),
              width: calc(128),
              height: calc(32),
              borderTopRightRadius: calc(9),
              borderTopLeftRadius: calc(9),
              borderBottomLeftRadius: calc(9),
              borderBottomRightRadius: 0,
            },
          ]}
        >
          <LinearGradient colors={['#91AFFF', '#0248FF']} style={styles.iconDot} />
          <Text style={styles.pillText}>Total Male User</Text>
        </View>

        {/* Progress / dots (center top area) */}
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
              backgroundColor: '#91AFFF',
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

        {/* Title and subtitle */}
        <View
          style={{
            position: 'absolute',
            width: calc(343),
            left: (SCREEN_W - calc(343)) / 2,
            top: calc(570),
          }}
        >
          <Text style={styles.title}>Smart Search & Instant Insights</Text>
        </View>

        <View
          style={{
            position: 'absolute',
            width: calc(273),
            left: (SCREEN_W - calc(273)) / 2 - calc(42),
            top: calc(661),
          }}
        >
          <Text style={styles.subtitle}>
            Fetch customer details or CRM records with just your voice. Find the right data in seconds.
          </Text>
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
            shadowColor: '#0248FF',
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 3,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  bgGroup: {
    position: 'absolute',
    width: calc(1280.51),
    height: calc(939.24),
    left: calc(-235.37),
    top: calc(-338.45),
    opacity: 0.49,
  },
  bgCircle: {
    position: 'absolute',
    backgroundColor: '#3A5EF3',
  },
  bgEllipse: {
    position: 'absolute',
    backgroundColor: '#A4BDFE',
  },
  hero: {
    position: 'absolute',
    borderRadius: calc(10),
    overflow: 'hidden',
  },
  circleGroup: {
    position: 'absolute',
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
  iconDot: {
    width: calc(24),
    height: calc(24),
    borderRadius: calc(12),
    marginRight: calc(8),
  },
  pillText: {
    fontFamily: 'NunitoSans-Regular',
    fontWeight: '500',
    fontSize: calc(12),
    color: 'rgba(0,20,72,0.6)',
  },
  title: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: calc(32),
    lineHeight: calc(40),
    color: '#001448',
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: calc(16),
    lineHeight: calc(22),
    color: 'rgba(0,20,72,0.9)',
    opacity: 0.6,
    textAlign: 'center',
  },
});