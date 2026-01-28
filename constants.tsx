import React from 'react';
import { Translations, ServiceItem, PortfolioItem, Language, PartnerItem } from './types';
import { Monitor, Hammer, Wrench, Truck, ShieldCheck, Wifi, Cpu, HardHat, Cloud } from 'lucide-react';

export const TEXTS: Record<Language, Translations> = {
  ms: {
    nav: {
      home: "Utama",
      about: "Profil",
      services: "Perkhidmatan",
      portfolio: "Portfolio",
      contact: "Hubungi",
    },
    hero: {
      title: "Penyelesaian Teknologi & Pembinaan Masa Hadapan",
      subtitle: "Rakan strategik anda dalam IT, Pembinaan, dan Penyelenggaraan. Berinovasi sejak 2003.",
      cta: "Lihat Perkhidmatan",
      since: "Ditubuhkan 2003",
    },
    about: {
      title: "Profil Syarikat",
      visionTitle: "Visi & Wawasan",
      visionText: "Menjadi sebuah syarikat yang maju, berdaya saing dan sentiasa meneroka bidang yang jarang diceburi, mampu bersaing di pasaran terbuka setanding dengan syarikat antarabangsa.",
      missionTitle: "Misi",
      missionText: "Menjadi kontraktor yang berdaya saing, berkualiti dan berinovasi.",
      companyInfo: "Twintech Technology Services adalah syarikat Bumiputera berdaftar (CIDB, MOF) yang berpengalaman luas dalam perkhidmatan IT, pembinaan, dan pembekalan.",
    },
    services: {
      title: "Kepakaran Kami",
      catConstruction: "Pembinaan & Ubahsuai",
      catMaintenance: "Penyelenggaraan",
      catIT: "IT, Web & CCTV",
      catSupply: "Pembekalan",
    },
    partners: {
      title: "Rakan Teknologi",
      subtitle: "Kami bekerjasama dengan jenama terbaik dunia untuk memberikan penyelesaian yang stabil dan selamat.",
      catHardware: "Perkakasan & Rangkaian",
      catCloud: "Penyelesaian Awan (Cloud)",
      catSaaS: "Perisian & Produktiviti",
      catSecurity: "CCTV & Keselamatan",
    },
    portfolio: {
      title: "Rekod Kejayaan",
      subtitle: "Kepercayaan daripada agensi kerajaan dan swasta.",
    },
    contact: {
      title: "Hubungi Kami",
      address: "Ibu Pejabat",
      branch: "Cawangan",
      phone: "Telefon",
      email: "E-mel",
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "Profile",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title: "Future-Ready Technology & Construction Solutions",
      subtitle: "Your strategic partner in IT, Construction, and Maintenance. Innovating since 2003.",
      cta: "Explore Services",
      since: "Established 2003",
    },
    about: {
      title: "Company Profile",
      visionTitle: "Vision",
      visionText: "To be an advanced, competitive company exploring new frontiers, capable of competing in the open market alongside international players.",
      missionTitle: "Mission",
      missionText: "To be a competitive, quality-driven, and innovative contractor.",
      companyInfo: "Twintech Technology Services is a registered Bumiputera company (CIDB, MOF) with extensive experience in IT services, construction, and supply.",
    },
    services: {
      title: "Our Expertise",
      catConstruction: "Construction & Renovation",
      catMaintenance: "Maintenance",
      catIT: "IT, Web & CCTV",
      catSupply: "Supply",
    },
    partners: {
      title: "Technology Partners",
      subtitle: "We collaborate with the world's best brands to deliver stable and secure solutions.",
      catHardware: "Hardware & Networking",
      catCloud: "Cloud Solutions",
      catSaaS: "SaaS & Productivity",
      catSecurity: "CCTV & Security",
    },
    portfolio: {
      title: "Track Record",
      subtitle: "Trusted by government agencies and private sectors.",
    },
    contact: {
      title: "Contact Us",
      address: "Headquarters",
      branch: "Branch",
      phone: "Phone",
      email: "Email",
    }
  },
  cn: {
    nav: {
      home: "主页",
      about: "公司简介",
      services: "服务",
      portfolio: "案例",
      contact: "联系",
    },
    hero: {
      title: "面向未来的科技与建筑解决方案",
      subtitle: "您在IT、建筑和维护方面的战略合作伙伴。自2003年以来不断创新。",
      cta: "探索服务",
      since: "成立于 2003",
    },
    about: {
      title: "公司简介",
      visionTitle: "愿景",
      visionText: "成为一家先进、具有竞争力并在新领域不断探索的公司，能够在开放市场中与国际公司竞争。",
      missionTitle: "使命",
      missionText: "成为具有竞争力、高质量和创新的承包商。",
      companyInfo: "Twintech Technology Services 是一家注册的土著公司（CIDB，MOF），在IT服务、建筑和供应方面拥有丰富经验。",
    },
    services: {
      title: "我们的专长",
      catConstruction: "建筑与装修",
      catMaintenance: "维护工程",
      catIT: "IT，网站与监控",
      catSupply: "物资供应",
    },
    partners: {
      title: "技术合作伙伴",
      subtitle: "我们与全球顶级品牌合作，提供稳定和安全的解决方案。",
      catHardware: "硬件与网络",
      catCloud: "云解决方案",
      catSaaS: "软件与生产力",
      catSecurity: "监控与安防",
    },
    portfolio: {
      title: "成功案例",
      subtitle: "受到政府机构和私营部门的信任。",
    },
    contact: {
      title: "联系我们",
      address: "总部",
      branch: "分行",
      phone: "电话",
      email: "电邮",
    }
  },
  ta: {
    nav: {
      home: "முகப்பு",
      about: "விவரம்",
      services: "சேவைகள்",
      portfolio: "போர்ட்ஃபோலியோ",
      contact: "தொடர்பு",
    },
    hero: {
      title: "எதிர்கால தொழில்நுட்பம் மற்றும் கட்டுமான தீர்வுகள்",
      subtitle: "IT, கட்டுமானம் மற்றும் பராமரிப்பில் உங்கள் உத்திசார் கூட்டாளர். 2003 முதல் புதுமை.",
      cta: "சேவைகளைப் பாருங்கள்",
      since: "2003 இல் நிறுவப்பட்டது",
    },
    about: {
      title: "நிறுவனத்தின் விவரம்",
      visionTitle: "தொலைநோக்கு",
      visionText: "சர்வதேச நிறுவனங்களுக்கு இணையாக திறந்த சந்தையில் போட்டியிடக்கூடிய, புதிய துறைகளை ஆராயும் மேம்பட்ட நிறுவனமாக மாறுதல்.",
      missionTitle: "நோக்கம்",
      missionText: "போட்டித்தன்மை வாய்ந்த, தரமான மற்றும் புதுமையான ஒப்பந்ததாரராக மாறுதல்.",
      companyInfo: "ட்வின்டெக் டெக்னாலஜி சர்வீசஸ் என்பது IT சேவைகள், கட்டுமானம் மற்றும் விநியோகத்தில் விரிவான அனுபவம் கொண்ட பதிவு செய்யப்பட்ட பூமிபுத்ரா நிறுவனமாகும்.",
    },
    services: {
      title: "எங்கள் நிபுணத்துவம்",
      catConstruction: "கட்டுமானம் & புதுப்பித்தல்",
      catMaintenance: "பராமரிப்பு",
      catIT: "IT, இணையம் & CCTV",
      catSupply: "விநியோகம்",
    },
    partners: {
      title: "தொழில்நுட்ப கூட்டாளர்கள்",
      subtitle: "நிலையான மற்றும் பாதுகாப்பான தீர்வுகளை வழங்க உலகின் சிறந்த பிராண்டுகளுடன் நாங்கள் ஒத்துழைக்கிறோம்.",
      catHardware: "வன்பொருள் & நெட்வொர்க்கிங்",
      catCloud: "கிளவுட் தீர்வுகள்",
      catSaaS: "மென்பொருள் & உற்பத்தித்திறன்",
      catSecurity: "CCTV & பாதுகாப்பு",
    },
    portfolio: {
      title: "சாதனைகள்",
      subtitle: "அரசு நிறுவனங்கள் மற்றும் தனியார் துறைகளின் நம்பிக்கை.",
    },
    contact: {
      title: "எங்களை தொடர்பு கொள்ள",
      address: "தலைமையகம்",
      branch: "கிளை",
      phone: "தொலைபேசி",
      email: "மின்னஞ்சல்",
    }
  }
};

export const SERVICES_LIST = (lang: Language): ServiceItem[] => {
  switch (lang) {
    case 'ms':
      return [
        { category: 'it', title: 'Pembangunan Web & Sistem', desc: 'Pembangunan Full Stack, Solusi Awan (Cloud) & Sistem Custom.', icon: <Cloud className="w-8 h-8" /> },
        { category: 'it', title: 'CCTV & Keselamatan', desc: 'Konsultasi, Pemasangan, Jualan & Sistem Pemantauan.', icon: <ShieldCheck className="w-8 h-8" /> },
        { category: 'it', title: 'Rangkaian & IT', desc: 'Baiki Komputer, Naik Taraf, Rangkaian & Telekomunikasi.', icon: <Wifi className="w-8 h-8" /> },
        { category: 'construction', title: 'Pembinaan', desc: 'Pembinaan Bangunan, Struktur Keluli, Dinding & Bumbung.', icon: <HardHat className="w-8 h-8" /> },
        { category: 'construction', title: 'Ubahsuai', desc: 'Ubahsuai Pejabat/Rumah, Lantai, Kabinet & Hiasan Dalaman.', icon: <Hammer className="w-8 h-8" /> },
        { category: 'maintenance', title: 'Penyelenggaraan Bangunan', desc: 'Baiki Kerosakan, Paip Bocor, Baiki Jalan & Longkang.', icon: <Wrench className="w-8 h-8" /> },
        { category: 'maintenance', title: 'Elektrik & Aircond', desc: 'Pendawaian (240V-415V), Servis Aircond & Sistem Kebakaran.', icon: <Cpu className="w-8 h-8" /> },
        { category: 'supply', title: 'Pembekalan Peralatan', desc: 'Perkakasan IT, Bahan Binaan, Perabot Pejabat & Tenaga Kerja.', icon: <Truck className="w-8 h-8" /> },
        { category: 'supply', title: 'Perkhidmatan Am', desc: 'Pembersihan, Kawalan Serangga, Pengurusan Acara & Sistem PA.', icon: <Monitor className="w-8 h-8" /> },
      ];
    case 'cn':
      return [
        { category: 'it', title: '网站与系统开发', desc: '全栈开发，云解决方案与定制系统。', icon: <Cloud className="w-8 h-8" /> },
        { category: 'it', title: '闭路电视与安防', desc: '咨询，安装，销售与监控系统。', icon: <ShieldCheck className="w-8 h-8" /> },
        { category: 'it', title: '网络与IT', desc: '电脑维修，升级服务，网络与电信。', icon: <Wifi className="w-8 h-8" /> },
        { category: 'construction', title: '建筑工程', desc: '建筑施工，钢结构，隔断与屋顶。', icon: <HardHat className="w-8 h-8" /> },
        { category: 'construction', title: '装修工程', desc: '办公室/家居装修，地板，橱柜与室内装修。', icon: <Hammer className="w-8 h-8" /> },
        { category: 'maintenance', title: '建筑维护', desc: '损坏修复，管道泄漏，道路修复与排水。', icon: <Wrench className="w-8 h-8" /> },
        { category: 'maintenance', title: '电气与空调', desc: '布线 (240V-415V)，空调服务与消防系统。', icon: <Cpu className="w-8 h-8" /> },
        { category: 'supply', title: '设备供应', desc: 'IT硬件，建筑材料，办公家具与人力。', icon: <Truck className="w-8 h-8" /> },
        { category: 'supply', title: '一般服务', desc: '清洁，害虫防治，活动管理与广播系统。', icon: <Monitor className="w-8 h-8" /> },
      ];
    case 'ta':
       return [
        { category: 'it', title: 'இணையதளம் & சிஸ்டம்', desc: 'முழு ஸ்டாக் மேம்பாடு, கிளவுட் தீர்வுகள் & தனிப்பயன் அமைப்புகள்.', icon: <Cloud className="w-8 h-8" /> },
        { category: 'it', title: 'CCTV & பாதுகாப்பு', desc: 'ஆலோசனை, நிறுவல், விற்பனை & கண்காணிப்பு அமைப்புகள்.', icon: <ShieldCheck className="w-8 h-8" /> },
        { category: 'it', title: 'நெட்வொர்க்கிங் & ஐடி', desc: 'கணினி பழுதுபார்ப்பு, மேம்படுத்தல், நெட்வொர்க்கிங் & தொலைத்தொடர்பு.', icon: <Wifi className="w-8 h-8" /> },
        { category: 'construction', title: 'கட்டுமானம்', desc: 'கட்டிட கட்டுமானம், எஃகு கட்டமைப்புகள் & கூரை.', icon: <HardHat className="w-8 h-8" /> },
        { category: 'construction', title: 'புதுப்பித்தல்', desc: 'அலுவலகம்/வீடு புதுப்பித்தல், தரை மற்றும் உள்துறை வேலைகள்.', icon: <Hammer className="w-8 h-8" /> },
        { category: 'maintenance', title: 'கட்டிட பராமரிப்பு', desc: 'சேதம் சரிசெய்தல், குழாய் கசிவு & சாலை பழுது.', icon: <Wrench className="w-8 h-8" /> },
        { category: 'maintenance', title: 'எலக்ட்ரிக்கல் & ஏசி', desc: 'வயரிங், ஏர் கண்டிஷனிங் சேவை & தீயணைப்பு அமைப்புகள்.', icon: <Cpu className="w-8 h-8" /> },
        { category: 'supply', title: 'உபகரணங்கள் வழங்கல்', desc: 'IT வன்பொருள், கட்டுமான பொருட்கள் & அலுவலக தளபாடங்கள்.', icon: <Truck className="w-8 h-8" /> },
        { category: 'supply', title: 'பொது சேவைகள்', desc: 'சுத்தம் செய்தல், பூச்சி கட்டுப்பாடு & நிகழ்வு மேலாண்மை.', icon: <Monitor className="w-8 h-8" /> },
      ];
    default: // en
      return [
        { category: 'it', title: 'Web & Cloud Dev', desc: 'Full Stack Development, Custom Systems, Cloud Solutions & SaaS.', icon: <Cloud className="w-8 h-8" /> },
        { category: 'it', title: 'CCTV & Security', desc: 'Consultation, Installation, Sales & Monitoring Systems.', icon: <ShieldCheck className="w-8 h-8" /> },
        { category: 'it', title: 'Networking & IT', desc: 'Computer repair, Upgrade services, Networking & Telecommunications.', icon: <Wifi className="w-8 h-8" /> },
        { category: 'construction', title: 'Construction', desc: 'Building construction, Steel structures, Partitions & Roofing.', icon: <HardHat className="w-8 h-8" /> },
        { category: 'construction', title: 'Renovation', desc: 'Office/Home renovation, Flooring, Cabinetry & Interior fit-outs.', icon: <Hammer className="w-8 h-8" /> },
        { category: 'maintenance', title: 'Building Maintenance', desc: 'Repairing damage, Piping leakage, Road repair & Drainage.', icon: <Wrench className="w-8 h-8" /> },
        { category: 'maintenance', title: 'Electrical & AC', desc: 'Wiring (240V-415V), Air conditioning service & Fire systems.', icon: <Cpu className="w-8 h-8" /> },
        { category: 'supply', title: 'Equipment Supply', desc: 'IT Hardware, Construction materials, Office furniture & Manpower.', icon: <Truck className="w-8 h-8" /> },
        { category: 'supply', title: 'General Services', desc: 'Cleaning, Pest Control, Event Management & PA Systems.', icon: <Monitor className="w-8 h-8" /> },
      ];
  }
};

export const CLIENTS: PortfolioItem[] = [
  { client: "FAMA", project: "Sistem Continuous Auditing" },
  { client: "FAMA", project: "Website Konvensyen & Sistem Pendaftaran (GPS Lock)" },
  { client: "Myeongdong Topokki", project: "Official Corporate Website" },
  { client: "Harold's Bread", project: "Website & Cloud Ordering System" },
  { client: "Ibu Pejabat Polis Kontinjen Kedah", project: "CCTV, Networking & PA System" },
  { client: "Majlis Agama Islam Negeri Kedah", project: "Computer Supply & Management" },
  { client: "Jabatan Perikanan Negeri Kedah", project: "Network Installation (Langkawi)" },
  { client: "Institut Kemahiran Mara (Alor Setar)", project: "Lab Maintenance & Upgrades" },
  { client: "MARA Alor Setar", project: "Hardware Supply & Maintenance" },
  { client: "Kraftangan Malaysia", project: "PC Repair & Upgrades" },
  { client: "Jabatan Kerja Raya (JKR)", project: "Hardware Supply & Repair" },
  { client: "Kementerian Sumber Asli & Alam Sekitar", project: "APC UPS Supply" },
  { client: "Hospital Dalam Negeri Kedah", project: "Healthtronics Support & Supply" },
  { client: "Takaful Nasional Sdn Bhd", project: "Office IT Supply" },
];

export const PARTNERS_HARDWARE: PartnerItem[] = [
  { name: "Dell", logo: "https://logo.clearbit.com/dell.com", url: "https://dell.com" },
  { name: "HPE", logo: "https://logo.clearbit.com/hpe.com", url: "https://hpe.com" },
  { name: "Cisco", logo: "https://logo.clearbit.com/cisco.com", url: "https://cisco.com" },
  { name: "Asus", logo: "https://logo.clearbit.com/asus.com", url: "https://asus.com" },
  { name: "Acer", logo: "https://logo.clearbit.com/acer.com", url: "https://acer.com" },
  { name: "Synology", logo: "https://logo.clearbit.com/synology.com", url: "https://synology.com" },
];

export const PARTNERS_CLOUD: PartnerItem[] = [
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", url: "https://aws.amazon.com" },
  { name: "Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg", url: "https://azure.microsoft.com" },
  { name: "GCP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg", url: "https://cloud.google.com" },
  { name: "Alibaba Cloud", logo: "https://logo.clearbit.com/alibabacloud.com", url: "https://alibabacloud.com" },
  { name: "DigitalOcean", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg", url: "https://digitalocean.com" },
];

export const PARTNERS_SAAS: PartnerItem[] = [
  { name: "Google Workspace", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Google_Workspace_Logo.svg/2560px-Google_Workspace_Logo.svg.png", url: "https://workspace.google.com" },
  { name: "Microsoft 365", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/1280px-Microsoft_365_%282022%29.svg.png", url: "https://microsoft.com" },
  { name: "Cloudflare", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cloudflare_Logo.svg", url: "https://cloudflare.com" },
  { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", url: "https://mongodb.com" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png", url: "https://vercel.com" },
  { name: "Railway", logo: "https://railway.app/brand/logotype-light.svg", url: "https://railway.app" },
];

export const PARTNERS_SECURITY: PartnerItem[] = [
  { name: "Hikvision", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Hikvision_logo.svg/2560px-Hikvision_logo.svg.png", url: "https://hikvision.com" },
  { name: "TP-Link", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/TPLINK_Logo_2.svg/2560px-TPLINK_Logo_2.svg.png", url: "https://tp-link.com" },
  { name: "EZVIZ", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2BODMwkj9efZR44fEQw8uH6wq-U8vMEPHA&s", url: "https://ezviz.com" },
];
