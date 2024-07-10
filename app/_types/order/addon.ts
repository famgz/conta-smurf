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
  percentual: number;
}

export const addons: Record<Addon, AddonDetails> = {
  [Addon.CHAT_OFFLINE]: {
    label: 'Chat Offline',
    percentual: 0,
  },
  [Addon.LIVE_MATCHES]: {
    label: 'Live Matches',
    percentual: 0,
  },
  [Addon.FAST_DELIVERY]: {
    label: 'Fast Delivery',
    percentual: 0.15,
  },
  [Addon.SET_THE_TIMES]: {
    label: 'Set the times',
    percentual: 0.15,
  },
  [Addon.LP_CORRECTION]: {
    label: 'LP correction',
    percentual: 0.3,
  },
  [Addon.MONO_Addon]: {
    label: 'Mono Addon',
    percentual: 0.3,
  },
};
