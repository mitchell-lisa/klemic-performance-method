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
  onlineGaitPurchase:
    "https://app.klemicperformancemethod.com/ex4/purchase/packages/72425",
  sjrsCheckout:
    "https://app.klemicperformancemethod.com/a/checkout/?coupon=&id=81656&referer=false&rfsn=&type=Fbm%3A%3APackage&utm_campaign=",
  speedsterKit:
    "https://speedster.com/products/klemic-training-kit",
  antepesMuscleRunner: "https://antepes.com/products/muscle-runner",
  isaFootball: "https://isafootball.com",
} as const;

/**
 * Videos hosted on KPM's Wix media CDN — the same files that play on the
 * current site. Poster frames come from the matching f000 still.
 */
const wixVideo = (id: string, quality: string) => ({
  src: `https://video.wixstatic.com/video/${id}/${quality}/mp4/file.mp4`,
  poster: `https://static.wixstatic.com/media/${id}f000.jpg`,
});

export const videos = {
  /** 16:9 facility b-roll used as a background film on the current homepage. */
  facilityFilm: wixVideo("f30e51_4b85baddc5bc477c9f7dbf1e81772375", "1080p"),
  /** 9:16 — Dave presenting the Antepes Muscle Runner in front of the KPM testing board. */
  antepesTalk: wixVideo("f30e51_b853eacb36004379885f586023c2f897", "1080p"),
  /** 9:16 — a KPM athlete talking on the facility floor (Young Guns page). */
  youngGuns: wixVideo("f30e51_efb4ce9fb5914cfeb937c9a490ddb808", "720p"),
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
  cutoutDave: "/dave-klemic.png",
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

  // ---- Recovered in the full-site content audit ----
  cutoutTristan: wix("f30e51_40fc3f94c70c41309e2fa2cbe53be5c8~mv2.png"),
  cutoutJoshCoach: wix("f30e51_1e77e1ce2edc42b9b837477b2842644c~mv2.png"),
  cutoutCraig: wix("f30e51_cdbda60c779340d790ae98aceddb33ba~mv2.png"),
  cutoutMarquies: wix("f30e51_609f89cb4c224b46a3b5a752a9a53229~mv2.png"),
  cutoutHunterJump: wix("f30e51_f48443ab179041dbacc534b345c8ee1f~mv2.png"),
  cutoutShaq: wix("f30e51_675295c72d054268a2e94b286323fc79~mv2.png"),
  cutoutDevin: wix("f30e51_2b412efb18f74e8bab3a27744ca64054~mv2.png"),
  cutoutDaveAlt: wix("f30e51_c4c6be1b240a4e4ea4fa710543ed0c67~mv2.png"),
  cutoutJoshAlt: wix("f30e51_c2e35b7fb7604bd980beef73c2a6b613~mv2.png"),
  cutoutCruzHead: wix("f30e51_19497ef97ce04f1bae59e7589aed67b0~mv2.png"),

  navyConsult1: wix("3f8515_12485252ea864aa3b4b8eb34cc6aeac9~mv2.jpg"),
  navyConsult2: wix("3f8515_925b0228cf734fa6b339205448568b76~mv2.jpg"),
  navyCrest: wix("3f8515_bb33f7a025a9470b89b4dcbfb2291e50~mv2.webp"),

  antepesShoe: wix("f30e51_8031b8707fb541e191709e3bd84b4668~mv2.png"),
  antepesLogo: wix("f30e51_5a6a3101c07d45939fd306c21f6cc47a~mv2.png"),
  summerSchedule: wix("3f8515_370467dc0dca4415b03bf7a7b852ff0f~mv2.png"),

  facilitySomersPoint: wix("f30e51_89bb77b64ee440b798b67996bb29a93a~mv2.jpg"),
  signupBanner: wix("f30e51_8ad606e013fd49dead3042b8cb24a370~mv2.jpg"),
  privateSession: wix("3f8515_7acbe67ef9824d88a9d592002c0a5980~mv2.jpg"),
  youngGunsPhoto: wix("f30e51_218e59a5339947649c48949c4a8fc6c1~mv2.jpg"),
  youngGunsCoaching: wix("f30e51_309a55b1f0be43a7bf05af066bc6f8db~mv2.png"),
  existingAthletesPhoto: wix("f30e51_0757681362fb44f6a99b06c0d9cd1801~mv2.jpg"),
  gaitTesting: wix("f30e51_5708063555a9424da88ba1c6d0843538~mv2.jpg"),
  customProgramAthlete: wix("f30e51_fad24fca0e364526b5d724a29de95ef2~mv2.jpg"),

  elainaFeature: wix("3f8515_1b461d771afe4b428f794d6f74002921~mv2.png"),
  mckennaFeature: wix("3f8515_7bea851f3d0f4b14a47419b6f7399bea~mv2.png"),
  cruzPortraitTall: wix("f30e51_3eb4d78509834cd08b5009494f6b569f~mv2.jpg"),

  offSeasonPoster: wix("f30e51_5b5e2c052e834deb963cba011e104adf~mv2.png"),
  antiAtrophyFlyer: wix("f30e51_386f5e12c203421a84ff73b38e1ff5d9~mv2.png"),
  customProgramsPoster: wix("f30e51_6512c0b6fce64b66b3047c099617ac78~mv2.png"),
  programOverviewGraphic: wix("f30e51_c60a460ecc9d4529a6a57bb5a41c94a2~mv2.png"),
  sjrsPricing: wix("3f8515_f0a4184cf46e48998abe90d6514abb7a~mv2.png"),

  damariWrapUp: wix("f30e51_08dbd3bda89343cf87aea9bd02bfbc6d~mv2.png"),
  cjMvpSlide: wix("f30e51_f2bcbc953938488ea7353ea066d9b7d0~mv2.png"),
} as const;

/**
 * The complete "Noteable Alumni" archive from the current /alumni gallery
 * (25 images) plus the two portraits that appear only in the online-training
 * carousel. Order shuffled for the archive layout.
 */
export type Alumnus = {
  src: string;
  name: string;
  credential: string | null;
  w: number;
  h: number;
};

export const alumniGallery: Alumnus[] = [
  { src: wix("f30e51_fd99a75f22c4431ab469879296d948b3~mv2.webp"), name: "Stephan Ordille", credential: "Princeton FB", w: 533, h: 300 },
  { src: wix("f30e51_1a6a7bb6432a4dcf896adc51c36244d0~mv2.jpg"), name: "Logan Perez", credential: "UNH Football", w: 1578, h: 1314 },
  { src: wix("f30e51_2aecd1a39a45409fbe85d65ec3a27121~mv2.jpg"), name: "Dennis Sidenberg", credential: "Stanley Cup Champion", w: 2940, h: 3230 },
  { src: wix("f30e51_ce2da53a822c483bb540248f6462ebce~mv2.jpg"), name: "Damari Simeon", credential: "Ohio State Football", w: 1638, h: 2048 },
  { src: wix("f30e51_081d9fac6e954a91ba25bad0963340d0~mv2.png"), name: "Destin Lasco", credential: "National Champion", w: 968, h: 1206 },
  { src: wix("f30e51_3aa5e0375d194a6386d6b238837fd419~mv2.jpg"), name: "James Bradberry", credential: "NFL DB", w: 1707, h: 2560 },
  { src: wix("f30e51_dc1c711eac8140318de0ff7440f93e50~mv2.jpg"), name: "Yannic Sidenberg", credential: "Silver Medalist Olympian", w: 400, h: 400 },
  { src: wix("f30e51_e5c54baad2de4edfa7b719cc0af4fc58~mv2.png"), name: "Kylie Watson", credential: "Mcdonalds All American Villanova Basketball", w: 574, h: 920 },
  { src: wix("f30e51_ee10c8ad96a54bca84f72c27a48bc7e1~mv2.jpg"), name: "Cayden Primeau", credential: "NHL Goalie", w: 500, h: 625 },
  { src: wix("f30e51_1bee1131ce6d4a6b9a585d4ecb653575~mv2.webp"), name: "Bo Melton", credential: "NFL", w: 768, h: 768 },
  { src: wix("f30e51_d116bdcda91a4731ae55fbbb2ce2c3b5~mv2.jpg"), name: "Nick Williams", credential: "NFL", w: 2802, h: 3986 },
  { src: wix("f30e51_8ddcd77633cd401d9a2f54671572606e~mv2.webp"), name: "Austin Johnson", credential: "NFL", w: 1440, h: 810 },
  { src: wix("f30e51_19dcd07be446405c9ef4fc8a96530970~mv2.jpg"), name: "Allison Amadio", credential: "Rutgers Softball", w: 960, h: 1200 },
  { src: wix("f30e51_384c735e5e6845bfacee585250f62f0a~mv2.jpg"), name: "Jack Crawford", credential: "NFL", w: 1200, h: 675 },
  { src: wix("f30e51_79640a98130b44eb8e9b50c90485b095~mv2.jpg"), name: "Myron Rolle", credential: "NFL", w: 1091, h: 1200 },
  { src: wix("f30e51_8847d13d60374313bf7256a1d64c03f5~mv2.webp"), name: "Max Melton", credential: "NFL", w: 660, h: 371 },
  { src: wix("f30e51_4a6b47bcc1f547dd8141909b884eff77~mv2.jpeg"), name: "Kenny Randall", credential: "NFL/USFL", w: 275, h: 183 },
  { src: wix("f30e51_875ab65d01284a2b9fbf96e7ac524dda~mv2.png"), name: "Brad Jameson", credential: "Bucknell FB Captain", w: 960, h: 1206 },
  { src: wix("f30e51_67c92f041e7f477898d684a500be62d6~mv2.jpg"), name: "Justin Williams", credential: "NFL", w: 3634, h: 3092 },
  { src: wix("f30e51_a460524f824c496da398d534a3dab027~mv2.webp"), name: "Ava Tenaglia", credential: "Lasalle Soccor", w: 1200, h: 1799 },
  { src: wix("f30e51_ca2064328e5846c19a485b8e1a810a9c~mv2.png"), name: "Kasey Bertones", credential: "Marist Basketball", w: 638, h: 844 },
  { src: wix("f30e51_66f812514a2a4665b1b886c00332d1d0~mv2.webp"), name: "Hunter Watson", credential: "Monmouth Football", w: 600, h: 800 },
  { src: wix("f30e51_f2bcbc953938488ea7353ea066d9b7d0~mv2.png"), name: "C.J. Egrie", credential: "Holy Cross Baseball · Patriot League MVP", w: 1080, h: 1350 },
  { src: wix("f30e51_e0d2460b4f3f4693a5081c2b83469844~mv2.jpg"), name: "David Dudeck", credential: "Boston College FB", w: 427, h: 612 },
  { src: wix("f30e51_6af37709b4b54ab9b4c9463a39464e82~mv2.webp"), name: "D'Hani Cobbs", credential: "Villanova FB", w: 1333, h: 2000 },
  { src: wix("f30e51_f2ded00fd5b243bd8bf19541491cb111~mv2.jpeg"), name: "John Rochford", credential: "Miami Football", w: 223, h: 226 },
  { src: wix("f30e51_74f0af8da55047dda29d2b096294e552~mv2.jpeg"), name: "Hakeem Valles", credential: "NFL", w: 1280, h: 720 },
  { src: wix("f30e51_e95b22635f71401b87f86aef9b313e2e~mv2.webp"), name: "Trey Miler", credential: "Monmouth Football", w: 600, h: 800 },
  { src: wix("f30e51_f59518a584cd4d2bacd14cf69f9bab37~mv2.webp"), name: "Ugo Nwotite", credential: "Villanova FB", w: 1333, h: 2000 },
  { src: wix("f30e51_054502ac056e488f9e9279dbe632d1e5~mv2.jpg"), name: "Jason Thompson", credential: "NBA", w: 1522, h: 2048 },
  { src: wix("f30e51_97eb1f65bf0f4a0d9dfc53b4e5f15539~mv2.jpg"), name: "Alexandria Cotter", credential: "Indiana State Swimming", w: 1080, h: 1350 },
  { src: wix("f30e51_3ec4f0eadf444ca18bb11940ad11faa9~mv2.webp"), name: "Dan Russo", credential: "UPenn FB", w: 300, h: 400 },
  { src: wix("f30e51_93e4aac1bb0e48728bce72fd0adc048b~mv2.webp"), name: "Tyler Stockton", credential: "Notre Dame FB", w: 1200, h: 675 },
  { src: wix("f30e51_011b945f66c64806b9b1049be1e8d138~mv2.png"), name: "Sophia Curtis", credential: "Clemson Track", w: 624, h: 832 },
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
    bio: "Former NFL receiver (Kansas City Chiefs) and founder of Klemic Performance Method. Over more than two decades, Dave has fine-tuned a unique training system using proprietary resistances — developing athletes from the youth level through the pros.",
    chips: [
      "20+ years exp",
      "Multiple draft picks",
      "100+ NCAA athletes",
      "300+ D1 athletes",
      "Multiple pro athletes",
    ],
    /** Full biography — verbatim from the current site's David Klemic bio page. */
    fullBio: [
      "David Klemic is a highly respected expert in sports performance training with an impressive background in athletics. He started his career as a football and track star at Mainland Regional High School, where he was inducted into the Hall of Fame class of 2006 for both sports and was named NJ track athlete of the year in 1996. He continued his athletic career at Northeastern University from 1996 to 2001, where he became a member of the Hall of Fame class of 2009 and set records for catches, yardage, and receiving touchdowns in football. He also held the Atlantic 10 record for touchdown receptions and was a three-time America East track athlete of the year.",
      "After college, Klemic joined the Kansas City Chiefs as a wide receiver from 2001 to 2004. He participated in the NFL Combine and won the Kansas City Chiefs Fastest Man competition — defeating the notorious fastest man in the NFL, Dante Hall — which brought him national attention. Klemic was injured while playing in NFL Europe, but battled back and re-signed with the Chiefs for another year before being released in August of 2004 due to the severity of his leg break.",
      "Klemic went on to become a highly successful sports performance trainer and founded several training facilities, including East Coast Speed Academy, Oceanside Wellness and Sport, and Athletes Arbor. He served as a consultant for the Energy Lab and founded the Klemic Performance Method, which has gained national attention for its ability to significantly improve athletes' performance in the 40- and 60-yard dashes, vertical leap, and broad jump. He is also known for his work as a co-host of the “Locker Room” on ESPN Radio, a color commentator for several sports networks, and as the founder of Flag Football University.",
      "Today, Klemic is recognized as a leading expert in sports performance training, with a particular focus on biomechanical efficiency and increased power output. He lives in Egg Harbor Township, New Jersey, with his wife Erica, their daughters Callie Jo and Andi, and son Brooks.",
    ],
  },
  {
    name: "Josh Holsopple",
    title: "Director of Sports Performance",
    image: images.coachHolsopple,
    bio: "Directs sports performance programming at KPM and is the primary contact for facility training, testing, and scheduling.",
    chips: [
      "10 years exp",
      "Multiple draft picks",
      "100+ NCAA athletes",
      "50+ D1 athletes",
      "Multiple pro athletes",
    ],
    fullBio: [
      "Josh Holsopple started his coaching career in 2016 as a 17-year-old at the Peddie School, where he worked with over 40 Division 1 football players and multiple draft picks in his tenure. While serving as the wide receivers coach he worked with Jahan Dotson (Philadelphia Eagles), John Metchie, Elic Ayomanor (Tennessee Titans) and many other Division 1 receivers.",
      "He is also a very accomplished athlete, holding the facility-record 44.8″ vertical leap, a 1.50 ten-yard dash, a 10′11″ broad jump, and the highest EFX and IDS ever tested at Klemic Performance Method. Going into his 10th year of coaching, there are not many at his age with a resume like his.",
    ],
  },
  {
    name: "Cruz Lewis",
    title: "Head Coach · Individual Performance Coordinator",
    image: images.coachLewis,
    bio: "Leads coaching on the facility floor and coordinates KPM's one-on-one private training program.",
    chips: [
      "3+ years exp",
      "High-school record holder",
      "Former KPM athlete",
      "100+ private clients",
      "NCAA athlete",
    ],
    fullBio: [
      "Coach Cruz Lewis is currently pursuing a degree in exercise science at Stockton University, where he is also a dedicated member of the university's track and field team. As a former KPM athlete, Coach Lewis brings a unique blend of firsthand athletic experience and coaching insight to his training sessions. He began his coaching career with KPM at the age of 18 and now plays an active role in overseeing private training sessions, applying both his academic knowledge and competitive background.",
      "As an athlete he holds multiple high school records and boasts a 37″ vertical leap and a top speed of 24 mph. He writes the programming for all private sessions at KPM.",
    ],
  },
] as const;

/**
 * The private-training staff, with the record lines published on the current
 * Private Training page. Each coach books by phone.
 */
export const privateStaff = [
  {
    name: "Cruz Lewis",
    title: "Head Coach · Individual Performance Coordinator",
    image: images.cruzPortraitTall,
    detail:
      "Writes the programming for all private sessions. As an athlete he holds multiple high school records and boasts a 37″ vertical leap and a top speed of 24 mph. A KPM alumnus, he has coached in group and private settings at KPM for the past 3 years.",
  },
  {
    name: "Elaina Styer",
    title: "NCAA Division III All-American · Stockton University",
    image: images.elainaFeature,
    detail:
      "One of the top multi-event athletes in the country. In 2025–26 she was named the NJAC's G. Larry James Most Outstanding Athlete after winning the conference pentathlon for the second consecutive year — setting a championship meet record with 3,747 points and posting the top pentathlon score in NCAA Division III this season. She holds Stockton's heptathlon school record at 5,050 points, earned USTFCCCA All-Region honors in four events, and has broken Stockton's 60-meter hurdles school record six times, most recently at 8.67. She is currently training at KPM in the Applied Sports Performance Internship.",
  },
  {
    name: "McKenna Pontari",
    title: "KPM Alumna · Coach",
    image: images.mckennaFeature,
    detail:
      "Indoor one-jump record holder at Mainland Regional High School. She has run over 20 mph and vertical leaped 30″. As a coach she has worked in both group and private settings for the last 2 years.",
  },
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
    credential: "Holy Cross Baseball · Patriot League Player of the Year",
  },
  {
    quote:
      "Coaches Dave Klemic and Josh Holsopple have worked with me for years, and I can honestly say training at KPM has been one of the biggest attributes to my athletic success. It is truly the best place to send your young athlete to bring them to the highest level. The atmosphere is top notch, and the iron-sharpens-iron mentality pushes everyone to be their best.",
    name: "Allison Amadio",
    image: images.cutoutAmadio,
    credential: "Rutgers Softball",
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

/**
 * The partner logo row, in the order it runs on the live site:
 * ISA · Speedster · NFL Alumni · Antepes · Trazer.
 */
export const partners = [
  { name: "International Sports Advisors", href: links.isaFootball, image: images.partnerIsa },
  { name: "Speedster", href: links.speedsterKit, image: images.partnerSpeedster },
  { name: "NFL Alumni", href: null, image: images.partnerNflAlumni },
  { name: "Antepes", href: links.antepesMuscleRunner, image: images.antepesLogo },
  { name: "Trazer", href: null, image: images.partnerTrazer },
] as const;

export const antepes = {
  name: "Antepes Muscle Runners",
  /** Antepes' own product claim as displayed on the KPM homepage. */
  tagline: "World's best sprint shoe",
  code: "KLEMIC",
  discount: "10% off",
  label: "KPM is an Antepes Muscle Runners partner — use code KLEMIC for 10% off.",
  href: links.antepesMuscleRunner,
  image: images.antepesShoe,
  logo: images.antepesLogo,
} as const;

/** Navy Sprint Football consultation — photos and caption from the current homepage. */
export const navyFeature = {
  caption:
    "It was a privilege to be invited back to the Naval Academy to consult and work with the sprint football program.",
  cheer: "Go Navy, Beat Army!!!!",
  photos: [images.navyConsult1, images.navyConsult2],
  crest: images.navyCrest,
} as const;

/** Speedster — KPM's own training kit, sold through Speedster. */
export const speedster = {
  name: "Speedster × KPM",
  productName: "The Klemic Training Kit",
  href: links.speedsterKit,
  image: images.partnerSpeedster,
  logo: images.partnerSpeedster,
} as const;

/**
 * Online training — full depth from the current /onlinetraining page.
 * All copy verbatim or lightly cleaned for spelling only.
 */
export const onlineTraining = {
  headline: "Jump High. Run Fast.",
  sub: "Train remotely with one of the country's most trusted speed and performance coaches.",
  manifesto: [
    "No templates.",
    "No bare-minimum programs.",
    "No copy-paste plans.",
  ],
  manifestoClose: "Built for athletes who actually want to do the work.",
  philosophy:
    "KPM isn't for athletes looking for shortcuts. It's for the ones who show up daily, do the reps, and want a system that actually delivers. If that's you — let's go.",
  whyItMatters:
    "Most online training is built once and sold a thousand times. The same plan goes to a 5′9″ running back, a 6′4″ quarterback, and a 17-year-old just trying to make varsity. Then everyone wonders why results are inconsistent. Custom programming flips that. Every block is built around what YOUR body needs, what YOUR sport demands, and what YOUR results show is working. When something hits, we double down. When something stalls, we adjust. You're not running a program — you're running a strategy designed specifically for you. This is the difference between a trainer and a coach. And that difference shows up on game day.",
  offers: [
    {
      id: "gait-remote",
      name: "Full Panel Gait Analysis",
      price: "$261",
      priceNote: "one-time",
      summary:
        "A 34-page movement report that pinpoints every major deficiency holding you back — and gives you the exact data needed to fix it. No guesswork. No generic drills. Just a clear, definitive blueprint of how your body actually moves and what to train next.",
      whatYouGet: [
        "34-page comprehensive movement report — every major movement deficiency identified, scored, and explained",
        "Definitive performance data — measurable benchmarks across stride mechanics, force application, posture, and biomechanical efficiency",
        "Diagnosis of major deficiencies — see exactly where you're losing speed, power, and efficiency",
        "Programming roadmap — clear, prioritized direction on what to train, in what order, and why",
        "Dave's expert breakdown — every section reviewed and interpreted by Dave Klemic personally",
      ],
      builtFor: [
        "Athletes who've plateaued and don't know why",
        "Athletes preparing for a combine, showcase, or testing day",
        "Athletes coming back from injury who need to know what's actually fixed",
        "Coaches who want a clear training direction backed by real data",
        "Parents who want to invest in their athlete's development the right way — not the guess-and-hope way",
      ],
      process: [
        "Submit your video — film three movement screens from your phone (we'll send exact instructions)",
        "We analyze — frame-by-frame breakdown by Dave using KPM's proprietary diagnostic system",
        "You get the report — 34 pages of analysis, data, and recommendations delivered within 7 business days",
        "Programming clarity — optional follow-up to translate the report into a custom training program",
      ],
      cta: { label: "Sign Up — $261", href: links.onlineGaitPurchase },
    },
    {
      id: "custom-monthly",
      name: "Custom Programs",
      price: "$299",
      priceNote: "per month",
      summary:
        "A training program built specifically for your body, your sport, and your goals — delivered through the Klemic Performance Method app and updated every month based on your actual progress. No copy-paste plans. No cookie-cutter cycles. Just programming designed by Dave Klemic to make YOU faster, stronger, and more efficient.",
      whatYouGet: [
        "Fully personalized monthly programming built around your sport, position, and current capabilities",
        "Delivered through the KPM app — videos, sets, reps, rest, and progressions all in one place",
        "Monthly updates — your program evolves as you do, with new blocks built on real progress data",
        "Direct messaging access to Dave — questions answered, form checked, adjustments made when you need them",
        "Progress tracking built in — see your numbers improve session by session",
        "Gait analysis integration — if you've completed the Full Panel Gait Analysis, your programming directly addresses every deficiency identified",
      ],
      builtFor: [
        "Athletes who are tired of running generic programs that don't move the needle",
        "Athletes preparing for a specific event — combine, showcase, training camp, season opener",
        "Athletes who want a coach in their corner, not just a PDF in their email",
        "Parents looking for serious, accountable, professional training for their kid",
        "Coaches who want a backup expert helping their athletes train year-round",
      ],
      process: [
        "Onboarding intake — we collect your goals, sport, position, training history, and any prior assessments",
        "Program build — Dave designs your first month of programming based on your profile",
        "Train through the app — follow your custom block with full video demos, sets, and rest",
        "Check in with Josh — direct message access for questions, form review, or adjustments",
        "Monthly recalibration — every 4 weeks your program updates based on your progress data",
      ],
      cta: { label: "Sign Up — $299/mo", href: links.onlineTrainingPurchase },
    },
  ],
} as const;

/**
 * The online program library — The Perfect Off Season, Anti Atrophy, and
 * Fully Custom Programs, all delivered through the KPM app.
 */
export const onlinePrograms = [
  {
    id: "off-season",
    name: "The Perfect Off Season",
    poster: images.offSeasonPoster,
    summary:
      "Our flagship online program. It takes our training philosophy and adapts it to create all four physical attribute pillars our in-person athletes develop — with no equipment. Programmed by David Klemic, former Kansas City Chiefs fastest man, and Josh Holsopple, Director of Sports Performance at KPM.",
    facts: ["12-week program", "4 training days", "No equipment", "Full video guidance", "Sets & reps", "Habit tracking"],
  },
  {
    id: "anti-atrophy",
    name: "Anti Atrophy",
    poster: images.antiAtrophyFlyer,
    summary:
      "For any athlete that needs to maintain their fast-twitch attributes — college athletes in their offseason or in-season, and elementary to high-school athletes in season. Designed not to interfere with in-season recovery; in fact it will enhance it. Includes one free training day per month at our Max Velocity class.",
    facts: ["Youth · ages 5–11", "Intermediate · ages 11–18", "Advanced · ages 18+", "Year-round", "Free monthly Max Velocity day"],
  },
  {
    id: "custom-programs",
    name: "Fully Custom Program",
    poster: images.customProgramsPoster,
    summary:
      "Designed specifically for you — based off of your deficiencies and specific sport needs, with a full gait-analysis overview. 12-week custom program, 4 training days across all four pillars.",
    facts: ["12-week custom program", "4 training days", "Full video guidance", "Sets & reps", "Habit tracking"],
  },
] as const;

/** Young Guns — full copy from the current /youngguns page (spelling cleaned). */
export const youngGuns = {
  claim:
    "We believe our Young Guns program is the best youth athletic development training program in the country. We have kids as young as 9 reach almost 30″ on the vertical leap, and kids as young as 6 run 15+ miles per hour.",
  why:
    "The reason this program works so well is because a child from the ages of 5 to 11 has extremely malleable neuroplasticity. The brain and body can take on a large amount of information via physical stimulus and adapt quickly. Many Young Guns athletes have gone on to play Division 1 sports and win awards — such as C.J. Egrie, who was named Patriot League Baseball Player of the Year.",
  membership:
    "A Young Guns monthly membership grants 3 classes per week: one Acceleration day, one Initial Force Generation day, and one Max Velocity class. All athletes are required to do 3 months of training.",
} as const;

/** Monthly membership — verbatim structure from the current site. */
export const membership = {
  summary:
    "A monthly membership comes with 3 days a week of training: an Acceleration day, an Initial Force Generation day, and a Center of Mass Management or Max Velocity day depending on gait-analysis deficiencies.",
  purchase: links.veteranMembershipPurchase,
} as const;

/**
 * "About the Race" — the hurdling-history insert that runs on the current
 * homepage. Kept because it is exactly the kind of odd, charming detail
 * that makes the site KPM's.
 */
export const hurdlesInsert = {
  kicker: "About the race",
  title: "Hurdles",
  body: "Hurdling originated in England in the early 19th century. The runners race over a series of obstacles called hurdles, which are set a fixed distance apart. Runners must remain in assigned lanes throughout a race, and, although they may knock hurdles down while running over them, a runner who trails a foot or leg alongside a hurdle or knocks it down with a hand is disqualified. The first hurdler to complete the course is the winner.",
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
  { label: "SJRS", href: "/training#sjrs" },
  { label: "Coaches", href: "/coaches" },
  { label: "Alumni", href: "/alumni" },
] as const;

/**
 * The full index — every destination in the publication, so the immersive
 * pages never trap anyone. Rendered by the Index overlay.
 */
export const siteIndex = [
  {
    heading: "The publication",
    entries: [
      { label: "Cover", href: "/", note: "Move like a champ" },
      { label: "The Method", href: "/method", note: "Four pillars · gait analysis · D.N.A." },
      { label: "Training", href: "/training", note: "Facility · private · online · programs" },
      { label: "Coaches", href: "/coaches", note: "Dave · Josh · Cruz · private staff" },
      { label: "Alumni", href: "/alumni", note: "NFL · NHL · Olympic · NCAA" },
      { label: "Sign Up", href: "/signup", note: "New · veteran · Young Guns" },
    ],
  },
  {
    heading: "Features",
    entries: [
      { label: "Vince Papale", href: "/#vince-papale", note: "Former Eagle · “Invincible”" },
      { label: "Navy Sprint Football", href: "/#navy", note: "Consulting at the Naval Academy" },
      { label: "Antepes Muscle Runners", href: "/#antepes", note: "Code KLEMIC · 10% off" },
      { label: "The Klemic Training Kit", href: "/#speedster", note: "Built with Speedster" },
      { label: "In their words", href: "/#athletes", note: "Papale · Egrie · Amadio · Smith · Krome" },
      { label: "Young Guns", href: "/training#young-guns", note: "Ages 5–11 · on film" },
      { label: "Online programs", href: "/training#online", note: "Off Season · Anti Atrophy · Custom" },
    ],
  },
  {
    heading: "Get started",
    entries: [
      { label: "Facility sign up", href: "/signup", note: "Somers Point, NJ" },
      { label: "Athlete sign in", href: links.accountLogin, note: "Client portal & app", external: true },
      { label: "SJRS Program", href: "/training#sjrs", note: "Testing & sign up" },
      { label: "Call the facility", href: "tel:+16097426190", note: "609-742-6190", external: true },
      { label: "Private training", href: "tel:+16092252322", note: "609-225-2322", external: true },
      { label: "Email Josh", href: "mailto:Josh@klemicperformancemethod.com", note: "Josh@klemicperformancemethod.com", external: true },
    ],
  },
] as const;
