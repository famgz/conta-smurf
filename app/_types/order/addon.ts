export enum Addon {
  CHAT_OFFLINE = 'chat-offline',
  LIVE_MATCHES = 'live-matches',
  FAST_DELIVERY = 'fast-delivery',
  SET_THE_TIMES = 'set-the-times',
  LP_CORRECTION = 'lp-correction',
  MONO_Addon = 'mono-Addon',
}

interface AddonDetails {
  label: string;
  percentage: number;
}

export const addons: Record<Addon, AddonDetails> = {
  [Addon.CHAT_OFFLINE]: {
    label: 'Chat Offline',
    percentage: 0,
  },
  [Addon.LIVE_MATCHES]: {
    label: 'Live Matches',
    percentage: 0,
  },
  [Addon.FAST_DELIVERY]: {
    label: 'Fast Delivery',
    percentage: 0.15,
  },
  [Addon.SET_THE_TIMES]: {
    label: 'Set the times',
    percentage: 0.15,
  },
  [Addon.LP_CORRECTION]: {
    label: 'LP correction',
    percentage: 0.3,
  },
  [Addon.MONO_Addon]: {
    label: 'Mono Addon',
    percentage: 0.3,
  },
};
