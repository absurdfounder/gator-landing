import React from 'react';
import { ImageResponse } from 'next/og';
import { mergeBadgeIcons } from '@/lib/og/agentIcons';
import { loadOgFonts } from '@/lib/og/fonts';
import { formatOgDisplayUrl } from '@/lib/og/pageUrls';
import type { OgHeroContent } from '@/lib/og/types';

export const OG_SIZE = { width: 1200, height: 630 };

const BRAND_GREEN = '#3f6b00';
const BRAND_GREEN_LIGHT = '#8cc352';
const SLATE_200 = '#e2e8f0';
const SLATE_400 = '#94a3b8';

const GATOR_LOGO_URL = 'https://gator.so/images/gator-icon.png';
const GATOR_CHARACTER_URL = 'https://gator.so/images/characters/gator-laptop.png';

const FRAME_INSET = 32;
const FRAME_PAD_X = 44;
const FRAME_PAD_Y = 36;

const HERO_GRADIENT = [
  'radial-gradient(circle at 85% 50%, rgba(140, 195, 82, 0.22) 0%, transparent 55%)',
  'linear-gradient(135deg, #f4f9ec 0%, #eef6e0 45%, #f8faf6 100%)',
].join(', ');

function GatorBrandMark() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={GATOR_LOGO_URL} alt="" width={52} height={52} style={{ borderRadius: 12 }} />
      <span
        style={{
          fontSize: 34,
          lineHeight: 1,
          fontFamily: 'Silkscreen',
          color: '#0f172a',
          letterSpacing: '-0.02em',
        }}
      >
        gator
      </span>
    </div>
  );
}

function MissionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        border: '1px solid rgba(63, 107, 0, 0.28)',
        borderRadius: 999,
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '8px 16px',
      }}
    >
      <span
        style={{
          fontSize: 12,
          fontFamily: 'Silkscreen',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: SLATE_400,
        }}
      >
        [{index}]
      </span>
      <div style={{ width: 1, height: 12, background: 'rgba(63, 107, 0, 0.22)' }} />
      <span
        style={{
          fontSize: 12,
          fontFamily: 'Silkscreen',
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: BRAND_GREEN,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

function HeadlineBlock({ content }: { content: OgHeroContent }) {
  const singleLine = content.singleLineHeadline !== false;
  const headlineSize = content.headlineLead ? 52 : 60;
  const headlineStyle = {
    fontSize: headlineSize,
    lineHeight: 1.06,
    fontWeight: 700,
    letterSpacing: '-0.03em',
    fontFamily: 'Erode',
  } as const;

  const primaryAccent = (
    <>
      <span
        style={{
          ...headlineStyle,
          color: '#0f172a',
          marginRight: content.headlineAccent && singleLine ? 14 : 0,
        }}
      >
        {content.headlinePrimary}
      </span>
      {content.headlineAccent ? (
        <span style={{ ...headlineStyle, color: BRAND_GREEN }}>{content.headlineAccent}</span>
      ) : null}
    </>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 680 }}>
      {content.headlineLead ? (
        <div style={{ ...headlineStyle, color: '#0f172a' }}>{content.headlineLead}</div>
      ) : null}
      {singleLine ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            marginTop: content.headlineLead ? 8 : 0,
          }}
        >
          {primaryAccent}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: content.headlineLead ? 8 : 0 }}>
          <div style={{ ...headlineStyle, color: '#0f172a' }}>{content.headlinePrimary}</div>
          {content.headlineAccent ? (
            <div style={{ ...headlineStyle, color: BRAND_GREEN, marginTop: 6 }}>{content.headlineAccent}</div>
          ) : null}
        </div>
      )}
    </div>
  );
}

function BadgeRow({ badges }: { badges: NonNullable<OgHeroContent['badgeIcons']> }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18 }}>
      {badges.map((badge) => (
        <div
          key={badge.label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: `1px solid ${SLATE_200}`,
            borderRadius: 999,
            padding: '8px 14px 8px 10px',
            background: '#ffffff',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={badge.iconUrl} alt="" width={22} height={22} style={{ borderRadius: 4 }} />
          <span style={{ fontSize: 17, color: '#334155', fontFamily: 'Inter' }}>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

function CharacterPanel() {
  return (
    <div
      style={{
        display: 'flex',
        width: 360,
        flexShrink: 0,
        alignItems: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'stretch',
        background: `linear-gradient(180deg, rgba(140, 195, 82, 0.18) 0%, rgba(238, 248, 220, 0.95) 100%)`,
        borderLeft: `1px solid ${SLATE_200}`,
        padding: '24px 20px 0',
        overflow: 'hidden',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={GATOR_CHARACTER_URL}
        alt=""
        width={300}
        height={380}
        style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
      />
    </div>
  );
}

export function OgHeroImage({ content }: { content: OgHeroContent }) {
  const badges = mergeBadgeIcons(content.badgeIcons, content.description);
  const displayUrl = formatOgDisplayUrl(content.pageUrl || 'https://gator.so');

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f4f9ec',
        backgroundImage: HERO_GRADIENT,
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          margin: FRAME_INSET,
          borderRadius: 20,
          border: `1px solid ${SLATE_200}`,
          background: 'rgba(255, 255, 255, 0.88)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `${FRAME_PAD_Y}px ${FRAME_PAD_X}px 22px`,
            borderBottom: `1px solid ${SLATE_200}`,
          }}
        >
          <MissionEyebrow index={content.eyebrowIndex} label={content.eyebrowLabel} />
          <GatorBrandMark />
        </div>

        <div style={{ display: 'flex', flex: 1, alignItems: 'stretch', minHeight: 0 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              minWidth: 0,
              padding: `22px ${FRAME_PAD_X}px 18px`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
              {content.iconUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={content.iconUrl}
                  alt=""
                  width={52}
                  height={52}
                  style={{ borderRadius: 12, marginTop: 8 }}
                />
              ) : null}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <HeadlineBlock content={content} />
              </div>
            </div>

            {content.description ? (
              <p
                style={{
                  marginTop: 16,
                  maxWidth: 620,
                  fontSize: 22,
                  lineHeight: 1.35,
                  color: '#475569',
                  fontFamily: 'Erode',
                }}
              >
                {truncate(content.description, 120)}
              </p>
            ) : null}

            {badges?.length ? <BadgeRow badges={badges} /> : null}
          </div>

          <CharacterPanel />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `14px ${FRAME_PAD_X}px`,
            borderTop: `1px solid ${SLATE_200}`,
            background: 'rgba(255, 255, 255, 0.92)',
          }}
        >
          <span style={{ fontSize: 17, color: '#64748b', fontFamily: 'Inter' }}>{displayUrl}</span>
          <span
            style={{
              fontSize: 14,
              color: BRAND_GREEN,
              fontFamily: 'Silkscreen',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            OpenClaw
          </span>
        </div>
      </div>
    </div>
  );
}

export async function createOgImageResponse(content: OgHeroContent) {
  const fonts = await loadOgFonts();
  return new ImageResponse(<OgHeroImage content={content} />, {
    ...OG_SIZE,
    fonts,
  });
}
