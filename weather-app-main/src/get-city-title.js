const regionAbbreviations = {
  'United States of America': {
    Alabama: 'AL',
    Alaska: 'AK',
    Arizona: 'AZ',
    Arkansas: 'AR',
    California: 'CA',
    Colorado: 'CO',
    Connecticut: 'CT',
    Delaware: 'DE',
    Florida: 'FL',
    Georgia: 'GA',
    Hawaii: 'HI',
    Idaho: 'ID',
    Illinois: 'IL',
    Indiana: 'IN',
    Iowa: 'IA',
    Kansas: 'KS',
    Kentucky: 'KY',
    Louisiana: 'LA',
    Maine: 'ME',
    Maryland: 'MD',
    Massachusetts: 'MA',
    Michigan: 'MI',
    Minnesota: 'MN',
    Mississippi: 'MS',
    Missouri: 'MO',
    Montana: 'MT',
    Nebraska: 'NE',
    Nevada: 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    Ohio: 'OH',
    Oklahoma: 'OK',
    Oregon: 'OR',
    Pennsylvania: 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    Tennessee: 'TN',
    Texas: 'TX',
    Utah: 'UT',
    Vermont: 'VT',
    Virginia: 'VA',
    Washington: 'WA',
    'West Virginia': 'WV',
    Wisconsin: 'WI',
    Wyoming: 'WY',
    'District of Columbia': 'DC',
  },
  Canada: {
    Alberta: 'AB',
    'British Columbia': 'BC',
    Manitoba: 'MB',
    'New Brunswick': 'NB',
    'Newfoundland and Labrador': 'NL',
    'Nova Scotia': 'NS',
    Ontario: 'ON',
    'Prince Edward Island': 'PE',
    Quebec: 'QC',
    Saskatchewan: 'SK',
    'Northwest Territories': 'NT',
    Nunavut: 'NU',
    Yukon: 'YT',
  },
};

const countryAbbreviations = {
  'United States of America': 'USA',
  Australia: 'AU',
  'United Kingdom': 'UK',
};

function formattedRegionAndCountry(region, country) {
  const countryAbbr = countryAbbreviations[country] || country;
  const regionAbbr = regionAbbreviations?.[country]?.[region];

  if (regionAbbr) return `${regionAbbr}, ${countryAbbr}`;
  return countryAbbr;
}

export default function getCityTitle(location) {
  const city = location.name;
  const { region } = location;
  const { country } = location;

  return `${city}, ${formattedRegionAndCountry(region, country)}`;
}
