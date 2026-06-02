export const locations = {
  // County Centers
  surrey: { lat: 51.2500, lng: -0.5000, county: 'Surrey' },
  hampshire: { lat: 51.2000, lng: -1.3000, county: 'Hampshire' },

  // Surrey
  chertsey: { lat: 51.4087, lng: -0.5122, town: 'Chertsey', county: 'Surrey' },
  dorking: { lat: 51.2391, lng: -0.3269, town: 'Dorking', county: 'Surrey' },
  epsom: { lat: 51.3254, lng: -0.2656, town: 'Epsom', county: 'Surrey' },
  esher: { lat: 51.3752, lng: -0.3565, town: 'Esher', county: 'Surrey' },
  farnborough: { lat: 51.2813, lng: -0.7478, town: 'Farnborough', county: 'Surrey' },
  guildford: { lat: 51.2283, lng: -0.5700, town: 'Guildford', county: 'Surrey' },
  leatherhead: { lat: 51.2999, lng: -0.3432, town: 'Leatherhead', county: 'Surrey' },
  shepperton: { lat: 51.4399, lng: -0.4413, town: 'Shepperton', county: 'Surrey' },
  weybridge: { lat: 51.3747, lng: -0.4476, town: 'Weybridge', county: 'Surrey' },
  woking: { lat: 51.3162, lng: -0.5544, town: 'Woking', county: 'Surrey' },

  // Hampshire
  aldershot: { lat: 51.1454, lng: -0.7607, town: 'Aldershot', county: 'Hampshire' },
  andover: { lat: 51.3428, lng: -1.4842, town: 'Andover', county: 'Hampshire' },
  basingstoke: { lat: 51.2747, lng: -1.0840, town: 'Basingstoke', county: 'Hampshire' },
  eastleigh: { lat: 50.9636, lng: -1.3689, town: 'Eastleigh', county: 'Hampshire' },
  fleet: { lat: 51.2896, lng: -0.8281, town: 'Fleet', county: 'Hampshire' },
  portsmouth: { lat: 50.7957, lng: -1.0879, town: 'Portsmouth', county: 'Hampshire' },
  southampton: { lat: 50.9097, lng: -1.4044, town: 'Southampton', county: 'Hampshire' },
  winchester: { lat: 51.0635, lng: -1.3078, town: 'Winchester', county: 'Hampshire' },
  yateley: { lat: 51.3968, lng: -0.7536, town: 'Yateley', county: 'Hampshire' },
};

export type LocationKey = keyof typeof locations;

export function getLocationData(key: LocationKey) {
  return locations[key];
}

export function generateMapUrl(lat: number, lng: number): string {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const zoom = 13;
  const width = 1200;
  const height = 600;

  return `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/${lng},${lat},${zoom},0,0/${width}x${height}@2x?access_token=${token}`;
}
