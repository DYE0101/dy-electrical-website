import type { Suburb } from "@/lib/suburbs";

export type AreaPage = {
  slug: string;
  suburb: Suburb;
  region: string;
  postcode: string;
  driveTime: string;
  housingNote: string;
  localNote: string;
  topSuburbs?: string[];
};

export const areaPages: AreaPage[] = [
  {
    slug: "beenleigh",
    suburb: "Beenleigh",
    region: "Logan",
    postcode: "4207",
    driveTime: "under 10 minutes",
    housingNote: "Many Beenleigh properties were built in the 1970s–1990s and commonly have older switchboards with ceramic fuses and limited safety switch coverage.",
    localNote: "We are based in Bahrs Scrub — a short drive from Beenleigh's CBD and surrounding estates.",
    topSuburbs: ["Eagleby", "Waterford", "Bethania", "Windaroo"],
  },
  {
    slug: "springwood",
    suburb: "Springwood",
    region: "Logan",
    postcode: "4127",
    driveTime: "around 10 minutes",
    housingNote: "Springwood's residential stock ranges from 1980s brick homes to newer estates on the fringe — switchboard upgrades and EV charger installations are among the most common requests.",
    localNote: "Springwood and Daisy Hill are among our most frequently serviced Logan suburbs for planned residential electrical work.",
    topSuburbs: ["Daisy Hill", "Shailer Park", "Underwood", "Loganholme"],
  },
  {
    slug: "browns-plains",
    suburb: "Browns Plains",
    region: "Logan",
    postcode: "4118",
    driveTime: "around 15 minutes",
    housingNote: "Browns Plains has a mix of 1990s housing estates and newer infill development. Switchboard capacity issues are common as older homes take on EV chargers and ducted aircon.",
    localNote: "Browns Plains and surrounding estates including Hillcrest and Park Ridge are well within our regular service area.",
    topSuburbs: ["Hillcrest", "Park Ridge", "Regents Park", "Boronia Heights"],
  },
  {
    slug: "loganholme",
    suburb: "Loganholme",
    region: "Logan",
    postcode: "4129",
    driveTime: "under 15 minutes",
    housingNote: "Loganholme properties from the late 1980s and 1990s often have under-sized switchboards that pre-date modern RCD requirements. Many are due for review.",
    localNote: "Loganholme, Slacks Creek and Shailer Park are regular parts of our weekly schedule.",
    topSuburbs: ["Slacks Creek", "Rochedale South", "Tanah Merah", "Cornubia"],
  },
  {
    slug: "park-ridge",
    suburb: "Park Ridge",
    region: "Logan",
    postcode: "4125",
    driveTime: "around 20 minutes",
    housingNote: "Park Ridge and Logan Reserve are growing new-build corridors. EV charger installations, smart lighting and switchboard upgrades for larger new homes are among the most common jobs here.",
    localNote: "New estates in Park Ridge and Logan Reserve generate some of the highest demand for EV charger and feature lighting work in our service area.",
    topSuburbs: ["Logan Reserve", "Jimboomba", "Greenbank", "New Beith"],
  },
  {
    slug: "yarrabilba",
    suburb: "Yarrabilba",
    region: "Logan",
    postcode: "4207",
    driveTime: "around 25 minutes",
    housingNote: "Yarrabilba is a fast-growing new-build estate corridor. New homes here often require switchboard upgrades to add EV circuits or multi-head air conditioning as the fit-out evolves post-handover.",
    localNote: "We regularly service Yarrabilba and Jimboomba for both new-build fit-out work and ongoing residential maintenance.",
    topSuburbs: ["Jimboomba", "Logan Reserve", "Bahrs Scrub", "Flagstone"],
  },
  {
    slug: "mount-gravatt",
    suburb: "Mount Gravatt",
    region: "Brisbane Southside",
    postcode: "4122",
    driveTime: "around 20 minutes",
    housingNote: "Mount Gravatt has a mix of post-war homes, 1970s–1980s brick construction and newer unit developments. Older properties commonly need switchboard upgrades, additional circuits and lighting redesigns.",
    localNote: "Mount Gravatt, Eight Mile Plains and Robertson are well within our Brisbane Southside coverage area.",
    topSuburbs: ["Eight Mile Plains", "Robertson", "Rochedale", "Wishart"],
  },
  {
    slug: "sunnybank",
    suburb: "Sunnybank",
    region: "Brisbane Southside",
    postcode: "4109",
    driveTime: "around 25 minutes",
    housingNote: "Sunnybank's established residential properties often have pre-1990s wiring and boards that need upgrading before any additional load — particularly aircon and EV chargers.",
    localNote: "Sunnybank Hills, Coopers Plains and Runcorn are part of our regular Brisbane Southside service route.",
    topSuburbs: ["Sunnybank Hills", "Runcorn", "Coopers Plains", "Acacia Ridge"],
  },
  {
    slug: "coomera",
    suburb: "Coomera",
    region: "Northern Gold Coast",
    postcode: "4209",
    driveTime: "around 25 minutes",
    housingNote: "Coomera and Upper Coomera have some of the Gold Coast's most active new-build corridors. EV charger installations and upgraded lighting packages are in high demand here.",
    localNote: "Coomera, Upper Coomera and Pimpama are our primary Northern Gold Coast service suburbs for planned residential and new-build work.",
    topSuburbs: ["Upper Coomera", "Pimpama", "Ormeau", "Helensvale"],
  },
  {
    slug: "ormeau",
    suburb: "Ormeau",
    region: "Northern Gold Coast",
    postcode: "4208",
    driveTime: "around 20 minutes",
    housingNote: "Ormeau sits on the Logan–Gold Coast border and has a range of established homes alongside newer estate developments. It's one of our most frequently serviced transition suburbs.",
    localNote: "Ormeau and Ormeau Hills are conveniently located between our base at Bahrs Scrub and the broader Northern Gold Coast.",
    topSuburbs: ["Ormeau Hills", "Pimpama", "Yatala", "Stapylton"],
  },
];

export function getAreaPage(slug: string): AreaPage | undefined {
  return areaPages.find((a) => a.slug === slug);
}
