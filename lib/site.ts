/**
 * Central site configuration for Klemic Performance Method.
 *
 * Every business fact, link, image, and piece of structured content lives
 * here so the site can be updated without hunting through components.
 * All facts below are sourced from the existing klemicperformancemethod.com
 * website — do not add claims that KPM has not published.
 */

const wix = (id: string) => `https://static.wixstatic.com/media/${id}`;

export const site = {
  name: "Klemic Performance Method",
  shortName: "KPM",
  legalName: "Klemic Performance Method",
  tagline: "Move Like a Champ",
  description:
    "Evidence-based speed and athletic performance training in Somers Point, NJ. Established 2002. More than 10,000 athletes trained — from youth to college and the pros.",
  url: "https://www.klemicperformancemethod.com",

  phone: "609-742-6190",
  phoneHref: "tel:+16097426190",
  privatePhone: "609-225-2322",
  privatePhoneHref: "tel:+16092252322",
  email: "Josh@klemicperformancemethod.com",

  address: {
    street: "514 New Road",
    city: "Somers Point",
    state: "NJ",
    label: "514 New Road, Somers Point, NJ",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Klemic+Performance+Method+514+New+Road+Somers+Point+NJ",

  established: 2002,
  facilitySize: "7,200 sq ft",
  sessionCapacity: "Up to 30 athletes per session",

  social: {
    instagram: "https://www.instagram.com/klemicperformancemethod/",
    youtube: "https://www.youtube.com/@klemicperformancemethod",
  },
} as const;

/** External registration / account links — preserved exactly from the current site. */
export const links = {
  accountLogin: "https://app.klemicperformancemethod.com/ex4/login",
  gaitAnalysisPurchase:
    "https://app.klemicperformancemethod.com/packages/58487/purchase/",
  efxMeasurementsPurchase:
    "https://app.klemicperformancemethod.com/packages/58488/purchase/",
  veteranMembershipPurchase:
    "https://app.klemicperformancemethod.com/packages/57207/purchase/",
  youngGunsMembershipPurchase:
    "https://app.klemicperformancemethod.com/packages/58866/purchase/",
  onlineTrainingPurchase:
    "https://app.klemicperformancemethod.com/ex4/purchase/packages/72420",
  sjrsCheckout:
    "https://app.klemicperformancemethod.com/a/checkout/?coupon=&id=81656&referer=false&rfsn=&type=Fbm%3A%3APackage&utm_campaign=",
} as const;

/** Imagery from the existing KPM site (Wix CDN). Replaceable in one place. */
export const images = {
  logo: wix("f30e51_6798dbaa72784fd686bfcf904570e124~mv2.png"),
  logoWhite: wix("f30e51_1ffb7f3c3df1496c9b5d7d1287c94a30~mv2.png"),
  og: wix("f30e51_66b0e05e69ae44d9a97ae11c015e12f0~mv2.png"),

  hero: wix("f30e51_4feccf48587842b7accf0311ae1591b8~mv2.jpeg"),
  facilityNight: wix("3f8515_7ad58682ffd147fbb406698b36aefbe4~mv2.jpg"),

  pillarAcceleration: wix("f30e51_4feccf48587842b7accf0311ae1591b8~mv2.jpeg"), // shared with hero
  pillarForce: wix("f30e51_8e95b7711dbc40f6aee555030969017d~mv2.jpg"),
  pillarCenterOfMass: wix("f30e51_efbd89e8920d4a6cbb6bb1cf35dab6f0~mv2.jpg"),
  pillarMaxVelocity: wix("f30e51_e8834ef2f41c47c9a86fcec4a9cbd348~mv2.jpg"),

  cutoutNasir: wix("f30e51_290f5914f8934fef95e6f54ccdffbf34~mv2.png"),
  cutoutTaboga: wix("f30e51_8b5ac8250a50441b9cbb3a6c0708c9e8~mv2.png"),
  cutoutHunter: wix("f30e51_61451370cfb448a2b41c3a4b50695bc5~mv2.png"),
  cutoutPapale: wix("f30e51_d3e2fd7c51074781a3533607b973ec7a~mv2.png"),
  cutoutDave: wix("f30e51_268265c6b54f49579c736baab74a232b~mv2.png"),
  cutoutEgrie: wix("f30e51_40191b466b9443488bebdee902bd2b02~mv2.png"),
  cutoutAmadio: wix("f30e51_d7f157c8390a4eb0bc01f2ec7fff0293~mv2.png"),
  cutoutSmith: wix("f30e51_884f17c0af724651bbba2e0f9b57f774~mv2.png"),
  cutoutKrome: wix("f30e51_578bb16ebe7b49a782420749b399f46c~mv2.png"),

  coachKlemic: wix("f30e51_87eee01f1b434c67af59578c9a0566d6~mv2.jpg"),
  coachHolsopple: wix("f30e51_750633395ba34199a2c6e6a1c3a5a08a~mv2.jpg"),
  coachLewis: wix("f30e51_3eb4d78509834cd08b5009494f6b569f~mv2.jpg"),

  partnerTrazer: wix("f30e51_78c18468c7f7442aa535912021ba98f9~mv2.png"),
  partnerNflAlumni: wix("f30e51_fbdf75003bba4909aa582360bcb3653e~mv2.png"),
  partnerSpeedster: wix("f30e51_bf027dc0bc144c5d9ed27bf9132a994a~mv2.png"),
  partnerIsa: wix("f30e51_005f5a7c9549491db3c1deb38349a335~mv2.jpg"),
} as const;

export const alumniGallery: { src: string; alt: string }[] = [
  { src: wix("f30e51_2aecd1a39a45409fbe85d65ec3a27121~mv2.jpg"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_ce2da53a822c483bb540248f6462ebce~mv2.jpg"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_081d9fac6e954a91ba25bad0963340d0~mv2.png"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_3aa5e0375d194a6386d6b238837fd419~mv2.jpg"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_dc1c711eac8140318de0ff7440f93e50~mv2.jpg"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_e5c54baad2de4edfa7b719cc0af4fc58~mv2.png"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_ee10c8ad96a54bca84f72c27a48bc7e1~mv2.jpg"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_1bee1131ce6d4a6b9a585d4ecb653575~mv2.webp"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_d116bdcda91a4731ae55fbbb2ce2c3b5~mv2.jpg"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_8ddcd77633cd401d9a2f54671572606e~mv2.webp"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_97eb1f65bf0f4a0d9dfc53b4e5f15539~mv2.jpg"), alt: "KPM alumni athlete" },
  { src: wix("f30e51_054502ac056e488f9e9279dbe632d1e5~mv2.jpg"), alt: "KPM alumni athlete" },
];

/** Headline stats — all published on the current KPM site. */
export const stats = [
  { value: "EST. 2002", label: "Founded in Somers Point" },
  { value: "10,000+", label: "Athletes trained" },
  { value: "7,200", label: "Square-foot facility" },
  { value: "30", label: "Athletes per session, max" },
] as const;

/** Coaching staff stats from the current Coaches page. */
export const coachingStats = [
  { value: "35+", label: "Years of experience" },
  { value: "500+", label: "NCAA athletes trained" },
  { value: "200+", label: "Division I athletes" },
  { value: "50+", label: "Professional athletes" },
] as const;

export const pillars = [
  {
    number: "01",
    name: "Acceleration",
    short: "The positive change of rate of speed.",
    description:
      "The positive change of rate of speed. Every single sport starts in a static position or at a sub-maximal speed — the athletes who separate are the ones who get to top speed first.",
    image: images.pillarAcceleration,
  },
  {
    number: "02",
    name: "Initial Force Generation",
    short: "More force, in less time, in the right direction.",
    description:
      "Creating more force in a shorter period of time to displace the center of mass in the desired direction. This is where explosive first-step quickness is built.",
    image: images.pillarForce,
  },
  {
    number: "03",
    name: "Center of Mass Management",
    short: "Control your body to change direction on demand.",
    description:
      "The ability to direct your base of support out of frame in the most advantageous position to change direction or stop. Cutting, stopping, and re-accelerating all live here.",
    image: images.pillarCenterOfMass,
  },
  {
    number: "04",
    name: "Max Velocity",
    short: "Raise the ceiling and everything under it rises.",
    description:
      "Training at max velocity enhances the central nervous system's output, yielding downstream effects that create better results across all three previous pillars.",
    image: images.pillarMaxVelocity,
  },
] as const;

export type Program = {
  id: string;
  name: string;
  audience: string;
  summary: string;
  cta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
};

export const programs: Program[] = [
  {
    id: "facility",
    name: "Facility Training",
    audience: "Middle school, high school & college athletes",
    summary:
      "Group training at the Somers Point facility built on 12-week, evidence-based training cycles. Three classes per week targeting the four pillars, coached in sessions capped at 30 athletes.",
    cta: { label: "Sign Up", href: "/signup" },
    secondaryCta: { label: "Learn More", href: "/training#facility" },
  },
  {
    id: "private",
    name: "Private Training",
    audience: "Athletes who want one-on-one coaching",
    summary:
      "Fully customized one-on-one sessions built around your sport, position, age, training history, and the specific gaps holding you back. Every rep gets coached.",
    cta: { label: "Call to Schedule", href: site.privatePhoneHref, external: true },
    secondaryCta: { label: "Learn More", href: "/training#private" },
  },
  {
    id: "young-guns",
    name: "Young Guns",
    audience: "Youth athletes, ages 5–11",
    summary:
      "Youth athletic development that takes advantage of the neuroplasticity of ages 5–11 — the window where speed and movement quality develop fastest.",
    cta: { label: "Sign Up", href: links.youngGunsMembershipPurchase, external: true },
    secondaryCta: { label: "Learn More", href: "/training#young-guns" },
  },
  {
    id: "online",
    name: "Online Training",
    audience: "Athletes training anywhere",
    summary:
      "Custom monthly programming built around your sport, position, and goals — delivered through the KPM app with video demos, coach messaging, and monthly recalibration. $299/month.",
    cta: { label: "Sign Up", href: links.onlineTrainingPurchase, external: true },
    secondaryCta: { label: "Learn More", href: "/training#online" },
  },
  {
    id: "sjrs",
    name: "SJRS Program",
    audience: "SJRS student-athletes",
    summary:
      "KPM's dedicated training program for SJRS student-athletes, with its own testing and sign-up.",
    cta: { label: "Sign Up Today", href: links.sjrsCheckout, external: true },
    secondaryCta: { label: "Learn More", href: "/training#sjrs" },
  },
];

export const coaches = [
  {
    name: "David Klemic",
    title: "Founder",
    image: images.coachKlemic,
    bio: "Former NFL receiver (Kansas City Chiefs) and founder of Klemic Performance Method in 2002. Over more than two decades, Dave has fine-tuned a unique training system using proprietary resistances — developing athletes from the youth level through the pros.",
  },
  {
    name: "Josh Holsopple",
    title: "Director of Sports Performance",
    image: images.coachHolsopple,
    bio: "Directs sports performance programming at KPM and is the primary contact for facility training, testing, and scheduling.",
  },
  {
    name: "Cruz Lewis",
    title: "Head Coach · Individual Performance Coordinator",
    image: images.coachLewis,
    bio: "Leads coaching on the facility floor and coordinates KPM's one-on-one private training program.",
  },
] as const;

export const privateStaff = [
  { name: "Cruz Lewis", title: "Head Coach · Individual Performance Coordinator" },
  { name: "Elaina Styer", title: "NCAA Division III All-American" },
  { name: "McKenna Pontari", title: "KPM Alumna" },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  credential: string;
  /** Cutout portrait from the current KPM site, used in the testimonial spread. */
  image?: string;
};

/**
 * Testimonials from the current KPM homepage. Text has been lightly cleaned
 * for capitalization and punctuation only — meaning is unchanged.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Dave isn't just someone I know — he has played an integral part in our lives and my son's life. Vincent was coming off a severe injury, and we were coming all the way down from Cherry Hill to work with Dave. He got him ready — his speed, his strength and agility — and more than anything he was in his head about confidence.",
    name: "Vince Papale",
    image: images.cutoutPapale,
    credential: "Former Philadelphia Eagle · The movie “Invincible”",
  },
  {
    quote:
      "Being at KPM for the past 10 years has been the most beneficial investment I have ever made in myself. At KPM you are not only becoming the best athlete you can become — you are also creating a better version of yourself day in and day out. I would not have any of the records I own or the scholarships I earned without Dave and Josh by my side.",
    name: "CJ Egrie",
    image: images.cutoutEgrie,
    credential: "Patriot League Player of the Year",
  },
  {
    quote:
      "Coaches Dave Klemic and Josh Holsopple have worked with me for years, and I can honestly say training at KPM has been one of the biggest attributes to my athletic success. It is truly the best place to send your young athlete to bring them to the highest level. The atmosphere is top notch, and the iron-sharpens-iron mentality pushes everyone to be their best.",
    name: "Allison Amadio",
    image: images.cutoutAmadio,
    credential: "Holy Cross Baseball · Rutgers Softball",
  },
  {
    quote:
      "I can testify that EJ Underwood is in the top 5 fastest players I have trained — over 30 years and 1,700 players trained in the NFL, and that is a fact. Champ Bailey, Marcus Vick, Terence Newman, Ashley Lelie, David Klemic and EJ Underwood all ran under 4.3.",
    name: "Chip Smith",
    image: images.cutoutSmith,
    credential: "“The Godfather of Sports Performance”",
  },
  {
    quote:
      "Klemic Performance Method is the only evidence-based sports performance training facility I have ever come across. When I have an athlete in the return-to-play protocol, I send them immediately to KPM as an insurance policy on my previous rehabilitation work. When an athlete completes their gait analysis and a full 12-week mesocycle, I am confident, as their doctor, that they are equipped to return back to play.",
    name: "Charlie Krome",
    image: images.cutoutKrome,
    credential: "Non-Operative Sports Medicine · Shore Orthopedic",
  },
];

export const gaitAnalysis = {
  name: "Full Panel Gait Analysis",
  summary:
    "A full-panel, 360-degree movement analysis that determines an athlete's deficiencies across Acceleration, Initial Force Generation, Center of Mass Management, and Max Velocity — including real-time asymmetry evaluation on the Trazer system.",
  tests: [
    "10-yard dash",
    "20-yard dash",
    "Vertical leap",
    "Broad jump",
    "Lateral bound",
    "Four jump",
    "RSI",
    "Trazer testing",
    "Max velocity",
    "Video analysis",
    "EFX score",
    "IDS score",
    "Defined deficiencies",
    "National averages",
  ],
  dna: [
    {
      letter: "D",
      name: "Displacement",
      description: "How well you move yourself within each test.",
    },
    {
      letter: "N",
      name: "National Average",
      description: "Where you compare to others your age across the country.",
    },
    {
      letter: "A",
      name: "Symmetry",
      description: "Assessing balance and asymmetries within the body.",
    },
  ],
  stats: [
    { value: "5,000+", label: "Gait analyses completed since 2019" },
    { value: "24–26%", label: "Average improvement in athleticism composite scores (2025)" },
    { value: "12 weeks", label: "One full evidence-based training mesocycle" },
  ],
} as const;

export const partners = [
  { name: "Trazer", href: null, image: images.partnerTrazer },
  { name: "NFL Alumni", href: null, image: images.partnerNflAlumni },
  {
    name: "Speedster",
    href: "https://speedster.com/products/klemic-training-kit",
    image: images.partnerSpeedster,
  },
  { name: "ISA Football", href: "https://isafootball.com", image: images.partnerIsa },
] as const;

export const antepes = {
  label: "KPM is an Antepes Muscle Runners partner — use code KLEMIC for 10% off.",
  href: "https://antepes.com/products/muscle-runner",
} as const;

export const signupPaths = [
  {
    name: "New Athletes",
    description:
      "Start with the Full Panel Gait Analysis — a 360° movement assessment that builds your athletic profile and defines your deficiencies before you train.",
    steps: [
      {
        label: "Step 1 · Purchase your Full Panel Gait Analysis",
        href: links.gaitAnalysisPurchase,
        external: true,
      },
    ],
    note: "After purchase, you'll select a date to come in and test.",
  },
  {
    name: "Veteran Athletes",
    description:
      "Returning athletes re-establish an objective baseline with EFX (effective range) measurements, then continue with a monthly membership — three classes per week across the pillars. Minimum three-month commitment.",
    steps: [
      {
        label: "Step 1 · Purchase EFX Measurements",
        href: links.efxMeasurementsPurchase,
        external: true,
      },
      {
        label: "Step 2 · Purchase Monthly Membership",
        href: links.veteranMembershipPurchase,
        external: true,
      },
    ],
    note: "Membership includes one Acceleration day, one Initial Force Generation day, and one Center of Mass Management class each week.",
  },
  {
    name: "Young Guns · Ages 5–11",
    description:
      "Youth athletes start with the Full Panel Gait Analysis, then train three classes per week — one Acceleration day, one Initial Force Generation day, and one Max Velocity class. Minimum three-month commitment.",
    steps: [
      {
        label: "Step 1 · Purchase Full Panel Gait Analysis",
        href: links.gaitAnalysisPurchase,
        external: true,
      },
      {
        label: "Step 2 · Purchase Young Guns Monthly",
        href: links.youngGunsMembershipPurchase,
        external: true,
      },
    ],
    note: null,
  },
] as const;

export const nav = [
  { label: "Training", href: "/training" },
  { label: "The Method", href: "/method" },
  { label: "Coaches", href: "/coaches" },
  { label: "Alumni", href: "/alumni" },
] as const;
