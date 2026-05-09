export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  body: BlogBlock[];
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "when-to-upgrade-your-switchboard",
    title: "When should you upgrade your switchboard?",
    description:
      "A practical guide for Logan, Brisbane and Gold Coast homeowners on knowing when a switchboard upgrade is overdue, what's involved, and what to expect.",
    category: "Homeowner guides",
    publishedAt: "2026-04-12",
    readingMinutes: 5,
    body: [
      {
        type: "p",
        text: "Your switchboard is the brain of your home's electrical system — every circuit runs through it. When it's tired, undersized or running outdated protection, the rest of the home suffers: nuisance trips, flickering lights, and in the worst cases, real safety risks.",
      },
      {
        type: "p",
        text: "Here's what to look for, and when an upgrade is genuinely worth it.",
      },
      {
        type: "h2",
        text: "Signs your switchboard is overdue",
      },
      {
        type: "ul",
        items: [
          "Old ceramic fuses or rewireable fuses still in use",
          "No safety switches (RCDs) on power and lighting circuits",
          "Frequent tripping when you run normal household appliances",
          "Burn marks, scorching, or a hot smell at the board",
          "Clicks, buzzing or a humming sound from inside the board",
          "Plans to add air conditioning, EV charging or a major appliance",
        ],
      },
      {
        type: "callout",
        text: "If you have ceramic fuses, no safety switches, or signs of overheating — the upgrade isn't optional. It's a safety call.",
      },
      {
        type: "h2",
        text: "What's actually involved",
      },
      {
        type: "p",
        text: "A modern switchboard upgrade typically includes a new enclosure, properly rated main switch, RCDs (safety switches) on every circuit, individual circuit breakers, and clean, labelled wiring inside the board. We test every circuit before and after, and you get clear documentation for your records.",
      },
      {
        type: "p",
        text: "Most residential switchboard upgrades are completed in a single day. Power is off for part of the day — we plan around freezers, work-from-home setups and anything else that matters to you.",
      },
      {
        type: "h2",
        text: "When to call us",
      },
      {
        type: "p",
        text: "If you're seeing any of the warning signs above, or you're planning major work like air conditioning, EV charging or a renovation, get a switchboard inspection booked. We'll give you an honest assessment — not every board needs replacing, and we'll tell you straight if yours is fine.",
      },
    ],
  },
  {
    slug: "ev-charger-installation-at-home",
    title: "Installing an EV charger at home: what you need to know",
    description:
      "Planning to install a home EV charger in Logan, Brisbane or the Gold Coast? Here's what to think about before booking the install — circuits, capacity, location and cost factors.",
    category: "EV & energy",
    publishedAt: "2026-04-22",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "A home EV charger is one of the best upgrades you can make if you've gone electric — but a clean install takes more thought than just bolting a unit to the wall.",
      },
      {
        type: "p",
        text: "Here's what we look at before we quote, and what you can think through ahead of time.",
      },
      {
        type: "h2",
        text: "1. Your switchboard capacity",
      },
      {
        type: "p",
        text: "Most home EV chargers run on a dedicated 32A circuit. If your switchboard is older or already heavily loaded, it may need an upgrade or rewiring before the charger can be safely added. We always assess the board first — it's the difference between a clean install and a problem that surfaces six months later.",
      },
      {
        type: "h2",
        text: "2. Where the charger goes",
      },
      {
        type: "ul",
        items: [
          "Distance from the switchboard — affects cable cost and install time",
          "Whether you park inside, in a carport, or on the driveway",
          "Cable run path — internal walls, ceiling space, or external conduit",
          "Weather exposure — outdoor units need proper IP-rated installation",
        ],
      },
      {
        type: "h2",
        text: "3. Single or three-phase",
      },
      {
        type: "p",
        text: "If your home has three-phase power, you have the option of a faster 11kW or 22kW charger. Most single-phase homes are limited to around 7kW — still plenty for overnight charging, but worth knowing if you drive long distances daily.",
      },
      {
        type: "h2",
        text: "4. Load management",
      },
      {
        type: "p",
        text: "Modern chargers can monitor your home's overall power usage and dial back charging when other heavy appliances are running. This avoids overloading your supply and can save money on charging costs.",
      },
      {
        type: "callout",
        text: "Don't pick the unit before talking to your electrician. Choosing the wrong model for your switchboard, or the wrong location for your driveway, is the most common (and most expensive) mistake.",
      },
      {
        type: "h2",
        text: "What we do",
      },
      {
        type: "p",
        text: "We assess the switchboard, plan the cable run, install on a dedicated circuit, set up the charger correctly, test it on the vehicle, and walk you through how it works. ARC-licensed and fully compliant.",
      },
    ],
  },
  {
    slug: "what-needs-a-licensed-electrician-in-queensland",
    title: "What electrical work needs a licensed electrician in Queensland?",
    description:
      "Queensland law is clear about what is and isn't DIY when it comes to electrical work. Here's a plain-English summary for homeowners.",
    category: "Compliance",
    publishedAt: "2026-05-02",
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "There's a lot of confusion about what's legal to do yourself when it comes to home electrical work in Queensland. The short version: almost nothing. The slightly longer version is below.",
      },
      {
        type: "h2",
        text: "What you can do yourself",
      },
      {
        type: "ul",
        items: [
          "Replace a light bulb",
          "Plug and unplug appliances",
          "Replace a fuse cartridge of the same rating (in older fuse boards)",
        ],
      },
      {
        type: "p",
        text: "That's basically the list. Anything that involves the fixed wiring, the switchboard, or any work behind a wall plate requires a licensed electrician.",
      },
      {
        type: "h2",
        text: "What requires a licensed electrician",
      },
      {
        type: "ul",
        items: [
          "Replacing or installing power points and light switches",
          "Installing new circuits or extending existing ones",
          "Switchboard work of any kind",
          "Installing ceiling fans, downlights and exhaust fans",
          "Hardwired air conditioning, hot water and oven installation",
          "Smoke alarm hardwiring and replacement",
          "Any work in the roof space involving cabling",
        ],
      },
      {
        type: "callout",
        text: "Doing unlicensed electrical work in Queensland can void your home insurance, attract fines, and — most importantly — kill people. It's not worth it.",
      },
      {
        type: "h2",
        text: "Why it matters",
      },
      {
        type: "p",
        text: "Beyond the legal side, properly licensed work means proper testing, proper materials, proper documentation, and someone who's accountable if something goes wrong. We're licensed, insured and listed with the Electrical Safety Office — verifiable any time.",
      },
      {
        type: "p",
        text: "If you're not sure whether the job you're thinking about needs an electrician, just ask. We'll tell you straight — and if it's something a handyman can do, we'll tell you that too.",
      },
    ],
  },
  {
    slug: "switchboard-upgrade-cost-brisbane-logan",
    title: "How much does a switchboard upgrade cost in Brisbane and Logan?",
    description:
      "A plain-English cost guide for homeowners considering a switchboard upgrade in Brisbane, Logan and the Gold Coast — what affects the price, what's included, and what to watch for.",
    category: "Homeowner guides",
    publishedAt: "2026-05-06",
    readingMinutes: 5,
    body: [
      {
        type: "p",
        text: "Switchboard upgrade prices vary significantly depending on the size of your home, the current state of the board, and what else needs to happen at the same time. Here's an honest breakdown of what drives the cost.",
      },
      {
        type: "h2",
        text: "What a standard upgrade typically includes",
      },
      {
        type: "ul",
        items: [
          "New switchboard enclosure rated for your home's load",
          "Modern main switch and individual circuit breakers",
          "RCD (safety switch) protection on every circuit",
          "Properly labelled, tested wiring throughout the board",
          "Compliance certificate issued on completion",
        ],
      },
      {
        type: "h2",
        text: "What affects the cost",
      },
      {
        type: "ul",
        items: [
          "Number of circuits — more circuits mean a larger, more complex board",
          "Existing wiring condition — older homes often have wiring that needs remediation at the same time",
          "Asbestos-backed boards — these require careful removal and disposal procedures",
          "Location of the board — difficult access adds time",
          "Concurrent work — EV chargers, air conditioning sub-circuits and other additions change the scope",
        ],
      },
      {
        type: "callout",
        text: "Get a quote that itemises the work, not just a single number. If a quote arrives without seeing the board first, that's a warning sign.",
      },
      {
        type: "h2",
        text: "Why we don't list prices on the website",
      },
      {
        type: "p",
        text: "A switchboard quote done properly requires looking at the existing board, identifying what's there, and sizing the new one correctly for the home's actual load. Posting a flat rate would mean either underquoting and surprising people on the day, or overquoting and pricing ourselves out unfairly. Neither is good for anyone.",
      },
      {
        type: "p",
        text: "We quote after a quick look — either in person or from a clear photo of the existing board. Send us the details and we'll come back with a fixed price before any work starts.",
      },
    ],
  },
  {
    slug: "ev-charger-installation-cost-queensland",
    title: "EV charger installation cost in Queensland — what to expect",
    description:
      "What drives the cost of a home EV charger installation in Queensland? A clear breakdown of what's involved, what varies, and how to avoid the common traps.",
    category: "EV & energy",
    publishedAt: "2026-05-05",
    readingMinutes: 5,
    body: [
      {
        type: "p",
        text: "Home EV charger installation costs in Queensland vary from a straightforward half-day job to a more involved project if the switchboard needs attention first. Here's what determines where your job sits.",
      },
      {
        type: "h2",
        text: "The main cost variables",
      },
      {
        type: "ul",
        items: [
          "Switchboard capacity — many older boards need upgrading before a 32A EV circuit can be added safely",
          "Cable run distance — longer runs from board to charger mean more materials and time",
          "Cable path — running through a roof space is faster than through a finished wall",
          "Charger model — supplied by the customer, supplied by us, or already on-site",
          "Single vs three-phase — three-phase installs for 11kW or 22kW chargers are more involved",
        ],
      },
      {
        type: "h2",
        text: "What's always included regardless of price",
      },
      {
        type: "ul",
        items: [
          "Dedicated RCBO-protected circuit for the charger",
          "Proper cable sizing for continuous load",
          "Commissioning against the charger manufacturer's specification",
          "Compliance certificate on completion",
        ],
      },
      {
        type: "callout",
        text: "The cheapest quote usually skips the switchboard assessment. That's the one that bites you later — either in a failed inspection or a charger that trips under load.",
      },
      {
        type: "h2",
        text: "How to get a realistic quote",
      },
      {
        type: "p",
        text: "Send us the charger model you're looking at (or ask us to recommend one), a photo of your switchboard, and the approximate distance from the board to where you want the charger. We'll come back with a proper fixed price — not an estimate that grows on the day.",
      },
    ],
  },
  {
    slug: "what-is-an-rcd-safety-switch",
    title: "What is an RCD (safety switch) and why does your home need one?",
    description:
      "A plain-English explanation of RCDs — what they do, how they differ from circuit breakers, and why Queensland regulations require them on every circuit in a modern home.",
    category: "Compliance",
    publishedAt: "2026-04-28",
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "An RCD — Residual Current Device — is the safety switch in your switchboard that protects you from electric shock. It is not the same as a circuit breaker, and the difference matters.",
      },
      {
        type: "h2",
        text: "What a circuit breaker does",
      },
      {
        type: "p",
        text: "A circuit breaker protects the wiring and appliances. It trips when a circuit draws too much current — like a short circuit or an overloaded power board. It is designed to protect property, not people.",
      },
      {
        type: "h2",
        text: "What an RCD does",
      },
      {
        type: "p",
        text: "An RCD monitors the flow of electricity through a circuit. The moment it detects that current is going somewhere it shouldn't — such as through a person — it cuts the power in milliseconds. Fast enough to prevent electrocution in most situations.",
      },
      {
        type: "callout",
        text: "A circuit breaker won't save you from a fatal electric shock. An RCD will — if it's there and working.",
      },
      {
        type: "h2",
        text: "What Queensland requires",
      },
      {
        type: "p",
        text: "Queensland regulations require RCD protection on all power and lighting circuits in new installations and when significant electrical work is carried out. Many older homes pre-date these requirements and have no RCD protection at all, or only partial protection on one or two circuits.",
      },
      {
        type: "h2",
        text: "How to check your home",
      },
      {
        type: "p",
        text: "Look at your switchboard. RCDs usually have a small test button marked 'T' or 'Test'. If you see only plain switches with no test buttons, or if only one or two circuits have them, your home may not be fully protected.",
      },
      {
        type: "p",
        text: "A switchboard assessment as part of any upgrade will confirm the state of your RCD coverage and identify any circuits that need it added.",
      },
    ],
  },
  {
    slug: "signs-you-need-an-emergency-electrician",
    title: "Signs you need an emergency electrician — and when it can wait",
    description:
      "Not every electrical problem is an emergency. But some are. Here's how to tell the difference, what to do while you wait, and when to call a 24/7 electrician right now.",
    category: "Emergency electrical",
    publishedAt: "2026-04-25",
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "Electrical problems exist on a spectrum — from nuisance trips that are annoying but safe, to situations where leaving it overnight is genuinely dangerous. Here's how to read yours.",
      },
      {
        type: "h2",
        text: "Call a 24/7 emergency electrician right now",
      },
      {
        type: "ul",
        items: [
          "Burning smell from a switchboard, power point, or light fitting",
          "Smoke from any electrical component",
          "Sparks or visible arcing",
          "Main switch that keeps tripping and cannot be reset",
          "Water damage to an active circuit — roof leak, flooding, anything wet near wiring",
          "Total loss of power with no obvious cause",
        ],
      },
      {
        type: "callout",
        text: "If you can smell burning or see smoke — turn off the main switch if it's safe to reach, and call immediately. Don't wait.",
      },
      {
        type: "h2",
        text: "Can wait until business hours",
      },
      {
        type: "ul",
        items: [
          "One circuit trips and stays reset",
          "A single power point or light not working",
          "Flickering light on a known old fitting",
          "Power point feels warm but no smell or smoke",
        ],
      },
      {
        type: "h2",
        text: "What to do while you wait",
      },
      {
        type: "p",
        text: "For genuine emergencies — turn off the main switch if it's safe to do so. Don't touch anything that is wet or visibly damaged. Move people and pets away from the affected area. For anything involving water damage to wiring, do not re-energise the circuit yourself.",
      },
      {
        type: "p",
        text: "We run 24/7 callout for genuine electrical emergencies across Logan, Brisbane Southside and the Northern Gold Coast. If you're unsure whether yours qualifies, call — we'll help you triage it on the phone.",
      },
    ],
  },
  {
    slug: "how-to-choose-an-electrician-brisbane-logan",
    title: "How to choose an electrician in Brisbane and Logan",
    description:
      "What to check before you book an electrician — licence verification, what a proper quote looks like, and the red flags that suggest walking away.",
    category: "Homeowner guides",
    publishedAt: "2026-04-20",
    readingMinutes: 5,
    body: [
      {
        type: "p",
        text: "Choosing an electrician should be straightforward, but it's easy to get it wrong if you're not sure what to look for. Here's the checklist we'd give to a friend.",
      },
      {
        type: "h2",
        text: "1. Verify the licence",
      },
      {
        type: "p",
        text: "Every electrician in Queensland must hold a licence issued by the Queensland Building and Construction Commission (QBCC). You can verify any licence number at licence.qbcc.qld.gov.au. If an electrician won't give you their licence number, walk away.",
      },
      {
        type: "h2",
        text: "2. Confirm public liability insurance",
      },
      {
        type: "p",
        text: "Public liability insurance protects you if something goes wrong on your property. Ask for the certificate of currency. Any legitimate electrical contractor will have this without hesitation.",
      },
      {
        type: "h2",
        text: "3. Assess how they communicate",
      },
      {
        type: "ul",
        items: [
          "Do they respond promptly and clearly?",
          "Do they ask enough questions about the job before quoting?",
          "Is the quote itemised or just a single number?",
          "Do they explain what they're doing in plain terms?",
        ],
      },
      {
        type: "callout",
        text: "An electrician who can't explain the job clearly before they start is not going to communicate better once they're in the roof.",
      },
      {
        type: "h2",
        text: "4. Red flags to watch for",
      },
      {
        type: "ul",
        items: [
          "Quotes given without inspecting the job (or asking for photos)",
          "Prices significantly below every other quote with no explanation",
          "Reluctance to provide a written quote",
          "No mention of testing or compliance certificates",
          "Payment demanded entirely in cash upfront",
        ],
      },
      {
        type: "h2",
        text: "Our details for verification",
      },
      {
        type: "p",
        text: "DY Electrical Services holds QBCC Electrical Contractor Licence 87141 and ARC Licence L179309. Public liability insurance is held. ABN 75 643 388 416. All of this is verifiable through the relevant authorities.",
      },
    ],
  },
  {
    slug: "air-conditioning-installation-what-to-expect",
    title: "What to expect from a split system air conditioning installation",
    description:
      "Planning an air conditioning installation in Logan, Brisbane or the Gold Coast? Here's what a proper install involves, how long it takes, and the questions worth asking beforehand.",
    category: "Air conditioning",
    publishedAt: "2026-04-15",
    readingMinutes: 5,
    body: [
      {
        type: "p",
        text: "A split system installation done properly looks effortless. One that's been rushed looks exactly how you'd expect — exposed cables, condensate draining to the wrong place, and a unit that underperforms because it was sized wrong.",
      },
      {
        type: "h2",
        text: "What a proper install involves",
      },
      {
        type: "ul",
        items: [
          "Correct sizing for the room — undersized units run continuously, oversized units short-cycle",
          "Indoor unit mounted level, in the right position for airflow distribution",
          "Refrigeration lines run as short and straight as possible, properly insulated",
          "Condensate drain to an appropriate point — not just dripping down a wall",
          "Dedicated electrical sub-circuit and isolator installed correctly",
          "Full commissioning against the manufacturer's specification",
        ],
      },
      {
        type: "h2",
        text: "How long does it take?",
      },
      {
        type: "p",
        text: "A standard back-to-back install (indoor and outdoor on the same wall) is typically a 3–4 hour job. A more complex run — through a ceiling space, across a storey, or into a hard-to-access outdoor area — takes longer. We confirm the time on site before starting, so you know what the day looks like.",
      },
      {
        type: "h2",
        text: "ARC licensing — why it matters",
      },
      {
        type: "p",
        text: "Refrigerant must be handled by someone with an ARC (Australian Refrigeration Council) licence. We hold ARC Licence L179309, which means the full install — refrigeration and electrical — is handled under one ticket. No subcontractors, no second visit.",
      },
      {
        type: "callout",
        text: "Ask your installer for their ARC licence number before they start. Any reputable installer will provide it without hesitation.",
      },
      {
        type: "h2",
        text: "Questions to ask before booking",
      },
      {
        type: "ul",
        items: [
          "What size unit is recommended for this room and why?",
          "Where will the outdoor unit go — is there clearance and airflow?",
          "How will the refrigeration line be routed and what does the finish look like?",
          "Is a dedicated circuit or switchboard upgrade required?",
          "What's included in the compliance certificate?",
        ],
      },
    ],
  },
  {
    slug: "downlight-installation-brisbane-logan",
    title: "Installing downlights in Brisbane and Logan — what you need to know",
    description:
      "Thinking about downlights for your home or renovation? Here's what a clean installation involves, the difference between LED and older halogen systems, and what to ask before you book.",
    category: "Lighting & power",
    publishedAt: "2026-04-10",
    readingMinutes: 4,
    body: [
      {
        type: "p",
        text: "Downlights are one of the most popular residential electrical requests we get — and one of the most variable in terms of quality of installation. Here's what separates a clean result from a patchy one.",
      },
      {
        type: "h2",
        text: "LED vs halogen — what's in your ceiling now?",
      },
      {
        type: "p",
        text: "If your home was built or renovated before around 2015, there's a good chance you have 50W halogen downlights running off low-voltage transformers in the ceiling. These are energy-hungry, generate significant heat, and are typically nearing end of life. Modern LED downlights use around 8–10W for the same output, don't overheat, and last far longer.",
      },
      {
        type: "h2",
        text: "What a proper LED retrofit involves",
      },
      {
        type: "ul",
        items: [
          "Removing the existing halogen fittings and their transformers",
          "Checking the cabling and insulation around the old holes",
          "Verifying the circuit protection is appropriate for the new fittings",
          "Installing LED downlights with correct IC (insulation contact) rating where required",
          "Ensuring the holes are the right size — patching oversize holes if needed",
        ],
      },
      {
        type: "callout",
        text: "Leaving the old transformers in place when swapping to LEDs is a common shortcut. It creates compatibility problems and reduces efficiency. Remove them properly.",
      },
      {
        type: "h2",
        text: "Installing new downlights in a renovation",
      },
      {
        type: "p",
        text: "For new installations, the layout matters. We plan the position of each fitting based on the room dimensions, ceiling height, and what you're trying to achieve — even lighting, feature zones, or both. Getting involved before plasterboard goes up means the wiring is hidden properly and the result looks like it was always meant to be there.",
      },
      {
        type: "h2",
        text: "Dimming — getting it right",
      },
      {
        type: "p",
        text: "Not all LED downlights dim correctly with standard dimmers. We match the fittings to compatible dimmer switches and test the range before we leave. There's nothing more frustrating than a dimmer that only works in the top 30% of the range, or that buzzes at low levels.",
      },
    ],
  },
  {
    slug: "property-manager-electrical-maintenance-guide",
    title: "A property manager's guide to electrical maintenance in Queensland",
    description:
      "What Queensland property managers need to know about electrical compliance, smoke alarms, safety switch requirements, and organising maintenance across a rental portfolio.",
    category: "Property managers",
    publishedAt: "2026-04-05",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "Managing electrical maintenance across a rental portfolio in Queensland is not just about fixing things when they break. There are legislative obligations, compliance timelines, and tenant safety requirements that don't wait for a convenient schedule.",
      },
      {
        type: "h2",
        text: "Smoke alarm compliance",
      },
      {
        type: "p",
        text: "From 1 January 2022, all Queensland rental properties must have photoelectric, interconnected smoke alarms installed in prescribed locations. These must be hardwired or have a non-removable 10-year battery. Properties must be compliant before any new tenancy begins, and at lease renewal.",
      },
      {
        type: "callout",
        text: "Battery-only or ionisation smoke alarms do not comply with the new Queensland requirements — regardless of when they were installed.",
      },
      {
        type: "h2",
        text: "Safety switch (RCD) obligations",
      },
      {
        type: "p",
        text: "Queensland regulations require safety switches on power circuits in all rental properties, and on lighting circuits for any property where significant electrical work has been done since 1992. Landlords are required to test safety switches at the start of each new tenancy and include the results in the entry condition report.",
      },
      {
        type: "h2",
        text: "Managing reactive maintenance efficiently",
      },
      {
        type: "ul",
        items: [
          "Use one licensed electrician across your portfolio — consistency means faster diagnosis and fewer return visits",
          "Keep a simple log of what's been done at each property — boards, safety switches, smoke alarms, known issues",
          "Establish an after-hours callout arrangement before an emergency happens",
          "Distinguish between urgent and non-urgent jobs clearly when briefing tenants on how to report",
        ],
      },
      {
        type: "h2",
        text: "What we offer property managers",
      },
      {
        type: "p",
        text: "We work with property managers across Logan, Brisbane Southside and the Northern Gold Coast. Direct communication, same-day availability for most booked jobs, clear invoicing, and a single point of contact across your entire portfolio. If you're looking to move away from a rotating list of tradespeople, get in touch.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
