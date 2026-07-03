/** Merlin CDN assets — shared visual library for gator-landing */
const CDN = 'https://cdn.getmerlin.in/cms'

export const merlinAssets = {
  hero: {
    gradient: `${CDN}/Gradient_Animation_2_a3db99fe6f.png`,
    illustration: `${CDN}/Frame_1321318057_c8c5638b09.webp`,
    sparkles: `${CDN}/sparkles_d78507fd63.svg`,
  },
  stores: {
    chrome: `${CDN}/Chrome_Web_Store_icon_5e2d8a5a4f.svg`,
    googlePlay: `${CDN}/Google_Play_logo_64f9907f74.svg`,
    apple: `${CDN}/512px_Apple_logo_black_svg_8d57e1a4b2.png`,
  },
  brands: [
    `${CDN}/Walmart_1_0cd05c542e.png`,
    `${CDN}/Cisco_1_ab0ee6173d.png`,
    `${CDN}/Netflix_1_dabb0f82d5.png`,
    `${CDN}/Pinterest_1_25eeb74ab0.png`,
    `${CDN}/Zoom_1_b5d03a6d69.png`,
    `${CDN}/Sony_1_e475b6ed27.png`,
    `${CDN}/Ebay_1_dbfa7af44d.png`,
    `${CDN}/Uber_1_338311f3dc.png`,
  ],
  extension: {
    webpage: `${CDN}/Webpage_b52be8433e.webp`,
    search: `${CDN}/image_5_a028a37070.webp`,
    context: `${CDN}/image_7_f6eefa4244.webp`,
    learn: `${CDN}/image_8_eb258bba3b.webp`,
  },
  chat: {
    projects: `${CDN}/projects_33be20ddec.webp`,
    infographics: `${CDN}/infog_a09cbff947.webp`,
    appsnip: `${CDN}/appsnip_0edfd396f9.webp`,
    reasoning: `${CDN}/o1_cfad888c7c.webp`,
    testimonial: `${CDN}/a_a8a6553e75.webp`,
  },
  social: {
    globe: `${CDN}/Frame_1321317995_1_1_8c2e924198.png`,
    gmail: `${CDN}/gmail_ecea349519.webp`,
    socialMedia: `${CDN}/social_media_a521fbf4cc.webp`,
    video: `${CDN}/content_from_vid_336ec65ad8.webp`,
    imageGen: `${CDN}/image_gen_21ee18a2ef.webp`,
    twitter: `${CDN}/Twitter_commenter_9b7d00b268.webp`,
  },
  models: [
    { name: 'o3, o4-mini and GPT 4.1', icon: `${CDN}/Avatar_2_eee035b8d3.png` },
    { name: 'Claude 3.7 Sonnet', icon: `${CDN}/claude_7fd6ca1b3a.svg` },
    { name: 'DeepSeek R1', icon: `${CDN}/Untitled_design_3_ab7522465e.png` },
    { name: 'Gemini 2.5 Pro', icon: `${CDN}/gemini_860192f244.svg` },
    { name: 'Mistral Large', icon: `${CDN}/mistral_997ea81364.svg` },
    { name: 'Llama 3.1 405B', icon: `${CDN}/meta_0e8914c0f0.svg` },
    { name: 'Grok 3', icon: `${CDN}/grok_3_38b2f92210.svg` },
  ],
  devices: {
    macbook: `${CDN}/image_ce68ee704e.webp`,
    chrome: `${CDN}/chrome_store_e2f9f97722.svg`,
    playstore: `${CDN}/playstore_88d0ae5df1.svg`,
    apple: `${CDN}/apple_767823d8d1.svg`,
  },
  ratings: {
    chrome: `${CDN}/image_142_7e8952954b.svg`,
    appsumo: `${CDN}/Frame_1321318037_dfa4226ae5.svg`,
    playstore: `${CDN}/playstore_88d0ae5df1.svg`,
    apple: `${CDN}/apple_767823d8d1.svg`,
  },
  avatars: [
    `${CDN}/Avatar_9274fb1b87.svg`,
    `${CDN}/Avatar_1_6e26bd801c.svg`,
    `${CDN}/Avatar_2_aa8dbc93fb.svg`,
    `${CDN}/Avatar_4_36664caa88.svg`,
    `${CDN}/Avatar_3_7588002be1.svg`,
    `${CDN}/Avatar_5_d4cf2b13d4.svg`,
    `${CDN}/Avatar_7_e4d61dcb33.png`,
    `${CDN}/Avatar_6_a69724eeab.svg`,
  ],
  security: [
    `${CDN}/Frame_1321318025_5_0a00fc2b21.png`,
    `${CDN}/Frame_1321318025_8_db66981d2c.png`,
    `${CDN}/Frame_1321318025_1_81fb6cae7e.png`,
  ],
} as const
