import React from 'react';

export type Language = 'ms' | 'en' | 'cn' | 'ta';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    since: string;
  };
  about: {
    title: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
    companyInfo: string;
  };
  services: {
    title: string;
    catConstruction: string;
    catMaintenance: string;
    catIT: string;
    catSupply: string;
  };
  partners: {
    title: string;
    subtitle: string;
    catHardware: string;
    catCloud: string;
    catSaaS: string;
    catSecurity: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    branch: string;
  };
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  category: 'construction' | 'maintenance' | 'it' | 'supply';
  desc: string;
}

export interface PortfolioItem {
  client: string;
  project: string;
}

export interface PartnerItem {
  name: string;
  logo: string;
  url: string;
}