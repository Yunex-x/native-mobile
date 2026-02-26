import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ImageSourcePropType,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  onNext?: () => void;
  // optional small avatar/icon if you want to pass in assets for list items
  itemIcon?: ImageSourcePropType;
};

const { width: SCREEN_W } = Dimensions.get('window');
const DESIGN_W = 393;
const DESIGN_H = 852;
const s = SCREEN_W / DESIGN_W;
const calc = (n: number) => Math.round(n * s);

export default function Onboarding3({ onNext }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Background rotated blurred groups */}
        <View style={[styles.bgGroup, { transform: [{ rotate: '13.03deg' }] }]}>
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

        {/* top center circular accent */}
        <View
          style={[
            styles.centerCircles,
            {
              left: (SCREEN_W - calc(152)) / 2 + calc(0.5),
              top: calc(109),
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
              left: (calc(152) - calc(80.47)) / 2 + calc(0.74),
              top: calc(145 - 109), // approximate vertical offset inside group for smaller circle
              width: calc(80.47),
              height: calc(80.47),
              borderRadius: calc(21),
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#0248FF',
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 0.13,
              shadowRadius: 20,
              elevation: 6,
            }}
          >
            <LinearGradient colors={['rgba(2,72,255,0.17)', 'rgba(255,255,255,0.08)']} style={{ width: '100%', height: '100%' }} />
            <View style={{ width: calc(24), height: calc(24), borderRadius: calc(12), backgroundColor: '#fff', opacity: 0.9 }} />
          </View>
        </View>

        {/* stacked cards list (center-right cluster and left cluster as in design) */}
        <View
          style={[
            styles.cardsContainer,
            {
              left: (SCREEN_W - calc(517)) / 2 + calc(62),
              top: calc(109),
              width: calc(356),
              height: calc(140.31),
            },
          ]}
        >
          {/* Back-most blurred card */}
          <View style={[styles.cardBase, { left: calc(37.55), top: calc(276.83), width: calc(318.89), height: calc(84.65), backgroundColor: '#E3EBFF' }]} />
          {/* Middle subtle card */}
          <View style={[styles.cardBase, { left: calc(66.54), top: calc(304.66), width: calc(259.75), height: calc(84.65), backgroundColor: '#ECF1FF' }]} />

          {/* Foreground gradient card */}
          <View
            style={[
              styles.cardForeground,
              {
                width: calc(356),
                height: calc(84.65),
                left: 0,
                top: 0,
                borderRadius: calc(21),
              },
            ]}
          >
            <LinearGradient
              colors={['rgba(2,72,255,0.17)', 'rgba(255,255,255,0.08)']}
              style={StyleSheet.absoluteFill}
            />
            <View style={styles.cardContent}>
              {/* icon */}
              <View style={styles.docIconWrap}>
                <View style={styles.docIconCircle}>
                  <LinearGradient colors={['#91AFFF', '#0248FF']} style={styles.docIconDot} />
                </View>
              </View>

              {/* title and small bars (simulating chart bars on right) */}
              <View style={styles.cardTextWrap}>
                <Text style={styles.cardTitle}>Weekly Marketing Report</Text>
                <View style={styles.smallBars}>
                  {/* small bars represented by small Views */}
                  {[17, 11, 9, 7, 11, 10, 7, 9, 6, 8, 11, 9].map((w, i) => (
                    <View
                      key={i}
                      style={{
                        width: calc(3 + (i % 3)),
                        height: calc(8 + (i % 6)),
                        backgroundColor: '#001448',
                        opacity: 0.9,
                        marginRight: calc(2),
                        borderRadius: calc(2),
                      }}
                    />
                  ))}
                </View>
              </View>

              {/* date on the left inside the card near title (approx per design) */}
              <Text style={styles.cardDate}>12 Sep 2025</Text>
            </View>
          </View>
        </View>

        {/* smaller white card cluster to the right (opacity overlay like design) */}
        <View
          style={[
            styles.sideCard,
            {
              left: calc(210),
              top: calc(427),
              width: calc(307),
              height: calc(73),
              opacity: 0.23,
            },
          ]}
        >
          <View style={[StyleSheet.absoluteFill, { borderRadius: calc(15), backgroundColor: '#fff' }]} />
          <View style={[styles.sideContent]}>
            <View style={[styles.sideIconCircle, { width: calc(40.28), height: calc(40.28), borderRadius: calc(20.14) }]} />
            <View style={{ marginLeft: calc(10) }}>
              <Text style={styles.sideTitle}>Ahmed’s Data</Text>
              <Text style={styles.sideDate}>12 Sep 2025</Text>
            </View>
          </View>
        </View>

        {/* small top-left mini card cluster (Samantha’s) */}
        <View
          style={[
            styles.miniCard,
            {
              left: calc(0),
              top: calc(168),
              width: calc(182),
              height: calc(43.28),
              opacity: 0.13,
            },
          ]}
        >
          <View style={[StyleSheet.absoluteFill, { borderRadius: calc(8), backgroundColor: '#fff' }]} />
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: calc(8) }}>
            <View style={[styles.miniIconCircle, { width: calc(23.88), height: calc(23.88), borderRadius: calc(11.94) }]} />
            <View style={{ marginLeft: calc(8) }}>
              <Text style={[styles.sideTitle, { fontSize: calc(12) }]}>Samantha’s Data</Text>
            </View>
          </View>
        </View>

        {/* Title */}
        <View
          style={{
            position: 'absolute',
            width: calc(235),
            left: (SCREEN_W - calc(235)) / 2 - calc(61),
            top: calc(570),
          }}
        >
          <Text style={styles.title}>Seamless Logs & Memos</Text>
        </View>

        {/* Subtitle (full width) */}
        <View style={{ position: 'absolute', width: calc(357), left: calc(18), top: calc(661) }}>
          <Text style={styles.subtitle}>
            Keep track of every update and command automatically. Review history with filters and search anytime.
          </Text>
        </View>

        {/* top progress dots */}
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
          <View style={{ width: calc(33), height: calc(8), backgroundColor: '#91AFFF', borderRadius: calc(12), marginRight: calc(6) }} />
          <View style={{ width: calc(8), height: calc(8), backgroundColor: '#001448', opacity: 0.12, borderRadius: calc(12), marginRight: calc(6) }} />
          <View style={{ width: calc(8), height: calc(8), backgroundColor: '#001448', opacity: 0.12, borderRadius: calc(12) }} />
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
          <LinearGradient colors={['#91AFFF', '#0248FF']} style={{ flex: 1, borderRadius: calc(12), alignItems: 'center', justifyContent: 'center' }}>
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
  safe: { flex: 1, backgroundColor: '#F9F9F9' },
  container: { flex: 1, backgroundColor: '#F9F9F9' },

  bgGroup: {
    position: 'absolute',
    width: calc(1280.51),
    height: calc(939.24),
    left: calc(-235.37),
    top: calc(-338.45),
    opacity: 0.49,
  },
  bgCircle: { position: 'absolute', backgroundColor: '#3A5EF3' },
  bgEllipse: { position: 'absolute', backgroundColor: '#A4BDFE' },

  centerCircles: { position: 'absolute' },

  cardsContainer: { position: 'absolute' },
  cardBase: {
    position: 'absolute',
    borderRadius: calc(15),
    // subtle shadows
    shadowColor: '#0248FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    elevation: 3,
  },
  cardForeground: {
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: calc(21),
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: calc(16),
    paddingVertical: calc(12),
  },
  docIconWrap: {
    width: calc(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  docIconCircle: {
    width: calc(32),
    height: calc(32),
    borderRadius: calc(16),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  docIconDot: {
    width: calc(18),
    height: calc(18),
    borderRadius: calc(9),
  },
  cardTextWrap: {
    flex: 1,
    marginLeft: calc(10),
  },
  cardTitle: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: calc(14),
    color: '#001448',
    fontWeight: '600',
  },
  smallBars: {
    marginTop: calc(6),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  cardDate: {
    position: 'absolute',
    left: calc(90.21),
    top: calc(299.2 - 270.99), // relative offset inside the card container
    fontSize: calc(11),
    color: '#001448',
    opacity: 0.6,
  },

  sideCard: {
    position: 'absolute',
    borderRadius: calc(15),
    shadowColor: '#0248FF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.09,
    shadowRadius: 18,
    elevation: 4,
    overflow: 'hidden',
  },
  sideContent: { flexDirection: 'row', alignItems: 'center', padding: calc(12) },
  sideIconCircle: { backgroundColor: '#fff', opacity: 0.54 },
  sideTitle: { fontFamily: 'NunitoSans-SemiBold', color: '#001448', fontSize: calc(14), fontWeight: '600' },
  sideDate: { color: '#001448', opacity: 0.4, fontSize: calc(11), marginTop: calc(4) },

  miniCard: {
    position: 'absolute',
    borderRadius: calc(8),
    shadowColor: '#0248FF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.09,
    shadowRadius: 18,
    elevation: 3,
    overflow: 'hidden',
  },
  miniIconCircle: { backgroundColor: '#fff', opacity: 0.54 },

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
    textAlign: 'left',
  },
});