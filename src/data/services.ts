export interface Service {
  id: string;
  key: string;
  titleKey: string;
  descriptionKey: string;
  fullDescriptionKey: string;
  features: string[];
  priceRange: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'computer-repair',
    key: 'computerRepair',
    titleKey: 'Services.services.computer-repair.name',
    descriptionKey: 'Services.services.computer-repair.description',
    fullDescriptionKey: 'Services.services.computer-repair.fullDescription',
    features: [
      'Services.services.computer-repair.features.0',
      'Services.services.computer-repair.features.1',
      'Services.services.computer-repair.features.2',
      'Services.services.computer-repair.features.3',
    ],
    priceRange: '$75 - $250',
    icon: '/icons/computer-repair.png',
  },
  {
    id: 'windows-reinstall',
    key: 'windowsReinstall',
    titleKey: 'Services.services.windows-reinstall.name',
    descriptionKey: 'Services.services.windows-reinstall.description',
    fullDescriptionKey: 'Services.services.windows-reinstall.fullDescription',
    features: [
      'Services.services.windows-reinstall.features.0',
      'Services.services.windows-reinstall.features.1',
      'Services.services.windows-reinstall.features.2',
      'Services.services.windows-reinstall.features.3',
    ],
    priceRange: '$100 - $200',
    icon: '/icons/windows-reinstall.png',
  },
  {
    id: 'virus-removal',
    key: 'virusRemoval',
    titleKey: 'Services.services.virus-removal.name',
    descriptionKey: 'Services.services.virus-removal.description',
    fullDescriptionKey: 'Services.services.virus-removal.fullDescription',
    features: [
      'Services.services.virus-removal.features.0',
      'Services.services.virus-removal.features.1',
      'Services.services.virus-removal.features.2',
      'Services.services.virus-removal.features.3',
    ],
    priceRange: '$80 - $200',
    icon: '/icons/virus-removal.png',
  },
  {
    id: 'wifi-setup',
    key: 'wifiSetup',
    titleKey: 'Services.services.wifi-setup.name',
    descriptionKey: 'Services.services.wifi-setup.description',
    fullDescriptionKey: 'Services.services.wifi-setup.fullDescription',
    features: [
      'Services.services.wifi-setup.features.0',
      'Services.services.wifi-setup.features.1',
      'Services.services.wifi-setup.features.2',
      'Services.services.wifi-setup.features.3',
    ],
    priceRange: '$100 - $300',
    icon: '/icons/wifi-setup.png',
  },
  {
    id: 'networking',
    key: 'networking',
    titleKey: 'Services.services.networking.name',
    descriptionKey: 'Services.services.networking.description',
    fullDescriptionKey: 'Services.services.networking.fullDescription',
    features: [
      'Services.services.networking.features.0',
      'Services.services.networking.features.1',
      'Services.services.networking.features.2',
      'Services.services.networking.features.3',
    ],
    priceRange: '$150 - $500',
    icon: '/icons/networking.png',
  },
  {
    id: 'security-cameras',
    key: 'securityCameras',
    titleKey: 'Services.services.security-cameras.name',
    descriptionKey: 'Services.services.security-cameras.description',
    fullDescriptionKey: 'Services.services.security-cameras.fullDescription',
    features: [
      'Services.services.security-cameras.features.0',
      'Services.services.security-cameras.features.1',
      'Services.services.security-cameras.features.2',
      'Services.services.security-cameras.features.3',
    ],
    priceRange: '$200 - $1,500',
    icon: '/icons/security-cameras.png',
  },
  {
    id: 'smart-home',
    key: 'smartHome',
    titleKey: 'Services.services.smart-home.name',
    descriptionKey: 'Services.services.smart-home.description',
    fullDescriptionKey: 'Services.services.smart-home.fullDescription',
    features: [
      'Services.services.smart-home.features.0',
      'Services.services.smart-home.features.1',
      'Services.services.smart-home.features.2',
      'Services.services.smart-home.features.3',
    ],
    priceRange: '$150 - $800',
    icon: '/icons/smart-home.png',
  },
  {
    id: 'ethernet',
    key: 'ethernet',
    titleKey: 'Services.services.ethernet.name',
    descriptionKey: 'Services.services.ethernet.description',
    fullDescriptionKey: 'Services.services.ethernet.fullDescription',
    features: [
      'Services.services.ethernet.features.0',
      'Services.services.ethernet.features.1',
      'Services.services.ethernet.features.2',
      'Services.services.ethernet.features.3',
    ],
    priceRange: '$75 - $400',
    icon: '/icons/ethernet.png',
  },
  {
    id: 'server-setup',
    key: 'serverSetup',
    titleKey: 'Services.services.server-setup.name',
    descriptionKey: 'Services.services.server-setup.description',
    fullDescriptionKey: 'Services.services.server-setup.fullDescription',
    features: [
      'Services.services.server-setup.features.0',
      'Services.services.server-setup.features.1',
      'Services.services.server-setup.features.2',
      'Services.services.server-setup.features.3',
    ],
    priceRange: '$200 - $600',
    icon: '/icons/server-setup.png',
  },
  {
    id: 'it-consulting',
    key: 'itConsulting',
    titleKey: 'Services.services.it-consulting.name',
    descriptionKey: 'Services.services.it-consulting.description',
    fullDescriptionKey: 'Services.services.it-consulting.fullDescription',
    features: [
      'Services.services.it-consulting.features.0',
      'Services.services.it-consulting.features.1',
      'Services.services.it-consulting.features.2',
      'Services.services.it-consulting.features.3',
    ],
    priceRange: '$100 - $300/hr',
    icon: '/icons/it-consulting.png',
  },
  {
    id: 'ai-agents-setup',
    key: 'aiAgentsSetup',
    titleKey: 'Services.services.ai-agents-setup.name',
    descriptionKey: 'Services.services.ai-agents-setup.description',
    fullDescriptionKey: 'Services.services.ai-agents-setup.fullDescription',
    features: [
      'Services.services.ai-agents-setup.features.0',
      'Services.services.ai-agents-setup.features.1',
      'Services.services.ai-agents-setup.features.2',
      'Services.services.ai-agents-setup.features.3',
    ],
    priceRange: '$150 - $800',
    icon: '/icons/smart-home.png',
  },
];

export function getServiceById(id: string) {
  return services.find((s) => s.id === id) ?? null;
}

export const SERVICE_SLUGS = services.map((s) => s.id);
