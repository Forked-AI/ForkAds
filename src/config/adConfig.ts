/**
 * Ad Provider Configuration
 * 
 * Store your ad provider credentials and settings here.
 * Make sure to add this file to .gitignore if you're using real credentials.
 */

export const adConfig = {
  // Google AdSense
  googleAdsense: {
    enabled: true, // Set to true when you have an approved account
    publisherId: 'ca-pub-2936566029635389', // Replace with your publisher ID
    adSlots: {
      forkAI: '9762507232', // Fork AI - Auto ad unit
      header: '9762507232',
      sidebar: '9762507232',
      inContent: '9762507232',
      footer: '9762507232',
    },
  },

  // Media.net
  mediaNet: {
    enabled: false,
    customerId: 'XXXXXXXXXX',
    versionId: '3111299',
    adUnits: {
      leaderboard: {
        width: '728',
        height: '90',
        crid: 'XXXXXXXXXX',
      },
      rectangle: {
        width: '300',
        height: '250',
        crid: 'XXXXXXXXXX',
      },
    },
  },

  // Amazon Associates
  amazon: {
    enabled: false,
    trackingId: 'XXXXXXXXXX-20',
    marketplace: 'amazon',
    region: 'US',
    adType: 'banner',
  },

  // PropellerAds
  propellerAds: {
    enabled: false,
    zoneIds: {
      banner: 'XXXXXXXX',
      popunder: 'XXXXXXXX',
      push: 'XXXXXXXX',
    },
  },

  // Taboola
  taboola: {
    enabled: false,
    publisherId: 'XXXXXXXXXX',
    placements: {
      belowArticle: 'Below Article Thumbnails',
      midArticle: 'Mid Article Thumbnails',
      sidebar: 'Right Rail Thumbnails',
    },
  },

  // Outbrain
  outbrain: {
    enabled: false,
    widgetIds: {
      ar01: 'AR_1', // Article page
      ar02: 'AR_2',
      mb01: 'MB_1', // Mobile
    },
  },

  // YouTube IMA (Video Ads)
  youtubeIMA: {
    enabled: false,
    adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?...',
  },

  // Ezoic
  ezoic: {
    enabled: false,
    ezappId: 'XXXXXXXXXX',
  },

  // General Settings
  settings: {
    // Enable lazy loading for ads
    lazyLoad: true,
    
    // Margin before ad loads (for lazy loading)
    lazyLoadMargin: '100px',
    
    // Enable ad refresh
    adRefresh: false,
    
    // Ad refresh interval in seconds
    refreshInterval: 30,
    
    // Respect user privacy settings
    respectDoNotTrack: true,
    
    // Show placeholder for blocked ads
    showAdBlockedMessage: false,
  },
};

// Helper function to check if any ad provider is enabled
export const hasEnabledProvider = (): boolean => {
  return Object.values(adConfig).some(
    (provider) => typeof provider === 'object' && 'enabled' in provider && provider.enabled
  );
};

// Helper function to get all enabled providers
export const getEnabledProviders = (): string[] => {
  return Object.entries(adConfig)
    .filter(([key, value]) => 
      key !== 'settings' && 
      typeof value === 'object' && 
      'enabled' in value && 
      value.enabled
    )
    .map(([key]) => key);
};
