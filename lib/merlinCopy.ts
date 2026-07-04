/** Exact Merlin homepage copy — brand token swapped via BRAND */
export const BRAND = 'Gator'
export const BRAND_DOMAIN = 'gator.so'
export const BRAND_APP = `https://app.${BRAND_DOMAIN}`
export const BRAND_SUPPORT_EMAIL = `support@${BRAND_DOMAIN}`
export const BRAND_SUPPORT_MAILTO = `mailto:${BRAND_SUPPORT_EMAIL}`
export const BRAND_CONTACT_URL = '/contact-us'

export const merlinPricingComparison = {
  other: {
    total: '$130',
    subtitle: 'per month for multiple tools',
    label: 'Purchased individually',
    items: [
      { name: 'Claude AI', price: '$30/m' },
      { name: 'OpenAI', price: '$20/m' },
      { name: 'Gemini Advanced', price: '$20/m' },
      { name: 'Mistral AI', price: '$20/m' },
      { name: 'Open source model hosting', price: '$40/m' },
    ],
  },
  gator: {
    total: '$19',
    subtitle: 'per month billed annually',
    label: 'One purchase is all it takes',
    items: [
      'All top AI models in one place',
      'Chrome extension + web + mobile apps',
      '24×7 support at your service',
      'Great value for money',
    ],
  },
} as const

export const merlinPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: '102 free queries every day across top AI models.',
    features: ['GPT-4o, Claude, Gemini & more', 'Chrome extension access', 'Web search summaries', 'YouTube & PDF summaries'],
    cta: 'Get started free',
    href: BRAND_APP,
    highlighted: false,
  },
  {
    id: 'pro',
    name: `${BRAND} Pro`,
    price: '$19',
    period: 'per month billed annually',
    description: 'Unlimited queries for power users who build every day.',
    features: ['Unlimited queries', 'All Pro AI models', 'Projects & knowledge bases', 'Image gen & app snippets'],
    cta: 'Buy now',
    href: BRAND_APP,
    highlighted: true,
  },
  {
    id: 'teams',
    name: 'Teams',
    price: 'Custom',
    period: 'per seat · 5+ members',
    description: 'End-to-end AI for your org with shared billing and admin controls.',
    features: ['Everything in Pro', 'Team billing & seats', 'Shared prompt libraries', 'Priority support'],
    cta: 'Book a demo',
    href: '#teams',
    highlighted: false,
  },
] as const

export const merlinFaqs = [
  {
    q: `What is ${BRAND}?`,
    a: `${BRAND} is an AI Chrome Extension and web app that works as your AI-powered assistant, saving you time and money. It provides top AI models such as ChatGPT, GPT 4, Claude, Deepseek V3, Opus, Llama, Mistral etc. to generate AI responses on Google Search, summaries for YouTube videos, blogs, documents (PDF or PPT), social media posts and replies to comments on LinkedIn, Twitter and Gmail. ${BRAND} also translates into more than twenty-five languages.`,
  },
  {
    q: `How does ${BRAND} Chrome Extension work?`,
    a: `Once installed as a Chrome Extension on the browser, you can open ${BRAND} AI Chatbot on any website using the shortcut: Ctrl/⌘+M. On specific websites such as Twitter (now X), LinkedIn, YouTube and Gmail, you would find ${BRAND} buttons for easy access.`,
  },
  {
    q: `What is the difference between ${BRAND} Teams and ${BRAND} Pro plans?`,
    a: `On ${BRAND} Teams, you can buy a plan for your team of 5 or above and pay per team member. This means teams can save costs by distributing costs across users. Whereas ${BRAND} Pro plans are ideal for individual users who prefer unlimited queries and don't want to be limited in their daily use.`,
  },
  {
    q: `Is ${BRAND} free to use?`,
    a: `Yes, ${BRAND} is FREE and safe to use. All free users get 102 free queries credited to their account everyday. These queries can be used by the user to run multiple AI models such as GPT 3.5, GPT 4, Claude, Opus, Mistral, Gemini etc.`,
  },
  {
    q: 'Do I need ChatGPT or Claude or Gemini or Llama account?',
    a: `No, you will not need separate accounts to use top AI models such as ChatGPT or Claude or Mistral or Llama. You can create a free account at ${BRAND_DOMAIN} and get access to all top models through a single account.`,
  },
  {
    q: `Which search engine is supported by ${BRAND}?`,
    a: `${BRAND} currently supports Google, Baidu, Bing, DuckDuckGo, Yahoo, and Yandex.`,
  },
]

export const merlinWorkflows = [
  {
    role: 'Students',
    question: 'How do I nail my research assignments, ace my exams and learn effectively?',
    answer: `• Summarize long lecture documents and videos into powerful learning aids with ${BRAND} Extension\n• Create course bots for homework help and research with perfect citations using ${BRAND} Projects\n• Use ${BRAND} Tools for AI detection and humanising your submissions`,
  },
  {
    role: 'Marketers and creators',
    question: 'How do I generate creative, SEO-friendly collateral suited to my brand voice over-and-over, effortlessly?',
    answer: `• Use ${BRAND} Projects to create knowledge bases that can be used for brand voice and content generation\n• Repurpose any kind of content on the web into SEO-friendly blogs, articles and copywriting\n• Write contextualised cold outreach mails and messages on X, LinkedIn and Gmail using ${BRAND} Extension`,
  },
  {
    role: 'Entrepreneurs',
    question: 'How do I brainstorm ideas effectively, communicate like a boss and 10x my productivity at work?',
    answer: `• Maintain your flow state on the web by avoiding switching tabs for AI\n• Use ${BRAND} Crafts to create mindmaps, graphs and 20+ diagrams to brainstorm like a pro\n• Get on top of communication and outreach woes with ${BRAND} on Gmail, X and LinkedIn`,
  },
  {
    role: 'Developers',
    question: 'How do I iterate on code effectively, debug with context and save time on creating boilerplate code components?',
    answer: `• Use ${BRAND} Projects to add your codebase documentation to ${BRAND}'s knowledge\n• Use ${BRAND} Crafts to create web components, write and debug code with just a prompt\n• Select anything on the web and summon ${BRAND} for added context on-the-fly`,
  },
  {
    role: 'Consultants and PMs',
    question: 'How do I research in real-time, organise my research and visualise it effectively for presentations?',
    answer: `• Use Live Search in tandem with websites and document sources to write precise, up-to-date reports\n• Create ${BRAND} Projects with your research resources and chat with it for quick retrieval of information\n• Visualise with 20+ diagram types with just a prompt using ${BRAND} Crafts`,
  },
  {
    role: 'Analysts',
    question: 'How do I write accurate queries faster, analyse data without having to build dashboards and present my insights better?',
    answer: `• Use ${BRAND} Extension on Google Sheets or your DB client to write queries on-the-fly\n• Upload XLS/CSV files into ${BRAND} and ask for quick insights from the data\n• Use data as context and visualise with 20+ diagram types using ${BRAND} Crafts`,
  },
]

export const merlinReviews = [
  { title: 'The Swiss Army Knife for research and writing', body: `${BRAND} is a welcome addition to anyone looking to simplify their research and writing process. I found the tool to be very user-friendly, fast, and reliable.`, author: 'PetePlus', source: 'AppSumo user' },
  { title: 'Highly recommended for educators, marketers, and small businesses', body: 'This tool is there for you whenever and wherever you need it. Inside Gmail? Yep. Inside YouTube? Yep. It even timestamps the video summaries. On websites? Yep.', author: 'Paige Battcher', source: `${BRAND} Pro user` },
  { title: '5 STAR Product.', body: `The team is VERY responsive. Any new ideas or bugs get talked about. They want to make ${BRAND} genuinely really good.`, author: 'gkc', source: 'AppSumo user' },
  { title: 'An indispensable part of my academic toolkit.', body: `As a student, ${BRAND} has been invaluable for my academic work. The tool's automatic summarization and advanced text analysis features have significantly boosted my productivity and understanding.`, author: 'Preston Bailey', source: 'Extension user' },
  { title: 'Amazing support.', body: `The reason for gaining trust in ${BRAND} lies in their communication approach. They are more honest in their communication than expected. I give it 10/10!!`, author: '107541488344860181963', source: 'AppSumo user' },
  { title: 'Get straight A+s in uni.', body: `Everyone used ChatGPT, Gemini, nothing fancy. Lil bro used ${BRAND} per my advise. He got an A+ and doesn't need to attend the finals from this project. Thanks ${BRAND} 😂🦾`, author: 'Omar Alsharif', source: 'Extension user' },
  { title: 'Eliminates the frustration of switching between apps.', body: `${BRAND}'s user-friendly interface makes research effortless. By centralizing all my sources, it eliminates the frustration of switching between apps.`, author: 'Ralphiesworld000', source: 'Apple App user' },
  { title: 'Keyboard friendliness.', body: `One of the best looking apps I've seen so far in the AI space. Integrates directly with my browser at the top toolbar. The coolest part is the Cmd + M keyboard friendliness.`, author: 'Scorphx', source: 'Extension user' },
]

export const featureTabs = {
  Create: [
    'Posts and comments on X and LinkedIn',
    'Generate images with Flux 1.1 Pro',
    'Brand voice content with custom knowledge bases',
    'Flowcharts, mindmaps and 20+ infographic types',
    'Working app snippets, web code and components',
    'Write code, essays and reports with citations for school',
  ],
  Research: [
    'Solve STEM problems and puzzles with OpenAI o1',
    'AI tools for academic, marketing and tech research',
    'Use your own knowledge to research',
    'Use OpenAI o1 with realtime web',
    'Turn words into infographics',
    'Create working app snippets',
  ],
  Summarize: [
    'Convert YouTube videos into posts and blogs',
    'Repurpose websites and documents into content',
    'One-click blog summaries',
    'Summarize and transcribe YouTube videos',
    "Don't switch tabs. Just ask",
    'Learn smart, not in a rush',
  ],
} as const
