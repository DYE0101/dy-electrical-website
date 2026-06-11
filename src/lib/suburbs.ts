export const suburbs = [
  "Bahrs Scrub",
  "Beenleigh",
  "Bethania",
  "Browns Plains",
  "Burleigh Heads",
  "Carina",
  "Coomera",
  "Crestmead",
  "Daisy Hill",
  "Eagleby",
  "Eight Mile Plains",
  "Helensvale",
  "Hillcrest",
  "Hope Island",
  "Jimboomba",
  "Logan Central",
  "Logan Reserve",
  "Logan Village",
  "Loganholme",
  "Loganlea",
  "Marsden",
  "Meadowbrook",
  "Mount Gravatt",
  "Ormeau",
  "Park Ridge",
  "Pimpama",
  "Redland Bay",
  "Rochedale",
  "Shailer Park",
  "Slacks Creek",
  "South Brisbane",
  "Springwood",
  "Sunnybank",
  "Surfers Paradise",
  "Underwood",
  "Upper Coomera",
  "Waterford",
  "Windaroo",
  "Woolloongabba",
  "Yarrabilba",
] as const;

export type Suburb = (typeof suburbs)[number];

// Form-only list: keeps "Other / not listed" out of page-generation code
// while letting unlisted suburbs submit accurately (review finding #6).
export const suburbOptions = [...suburbs, "Other / not listed"] as const;

export type SuburbOption = (typeof suburbOptions)[number];
