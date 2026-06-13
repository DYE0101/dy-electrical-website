export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  body: BlogBlock[];
  relatedService?: { slug: string; label: string };
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
    relatedService: { slug: "switchboard-upgrades", label: "Switchboard Upgrades" },
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
        text: "A modern switchboard upgrade typically includes a new enclosure, properly rated main switch, RCDs (safety switches) on every circuit, individual circuit breakers, and neatly labelled wiring inside the board. We test every circuit before and after, and you get clear documentation for your records.",
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
    relatedService: { slug: "ev-chargers", label: "EV Charger Installation" },
    body: [
      {
        type: "p",
        text: "A home EV charger is one of the best upgrades you can make if you've gone electric — but an installation done to spec takes more thought than just bolting a unit to the wall.",
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
        text: "Most home EV chargers run on a dedicated 32A circuit. If your switchboard is older or already heavily loaded, it may need an upgrade or rewiring before the charger can be safely added. We always assess the board first — it's the difference between a properly planned install and a problem that surfaces six months later.",
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
        text: "Doing unlicensed electrical work in Queensland can void your home insurance, attract serious fines, and — most importantly — put lives at risk. It's not worth it.",
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
    relatedService: { slug: "switchboard-upgrades", label: "Switchboard Upgrades" },
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
    relatedService: { slug: "ev-chargers", label: "EV Charger Installation" },
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
    relatedService: { slug: "switchboard-upgrades", label: "Switchboard Upgrades" },
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
    relatedService: { slug: "fault-finding", label: "Fault Finding & 24/7 Emergency Electrical" },
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
        text: "Every electrician in Queensland must hold a licence issued by the Electrical Safety Office. You can verify any licence number at electricalsafety.qld.gov.au. If an electrician won't give you their licence number, walk away.",
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
        text: "DY Electrical Services holds Electrical Contractor Licence No. 87141 and ARC Licence L179309. Public liability insurance is held. ABN 75 643 388 416. All of this is verifiable through the relevant authorities.",
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
    relatedService: { slug: "air-conditioning", label: "Air Conditioning Installation" },
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
      "Thinking about downlights for your home or renovation? Here's what a proper installation involves, the difference between LED and older halogen systems, and what to ask before you book.",
    category: "Lighting & power",
    publishedAt: "2026-04-10",
    readingMinutes: 4,
    relatedService: { slug: "lighting-power", label: "Lighting & Power Upgrades" },
    body: [
      {
        type: "p",
        text: "Downlights are one of the most popular residential electrical requests we get — and one of the most variable in terms of quality of installation. Here's what separates a sharp result from a patchy one.",
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
    relatedService: { slug: "smoke-alarms", label: "Smoke Alarm Installation & Compliance" },
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
  {
    slug: "qld-smoke-alarm-laws-2027-logan-brisbane",
    title: "Queensland smoke alarm laws 2027 — what Logan and Brisbane south homeowners need to do",
    description:
      "The 2027 deadline for smoke alarm compliance applies to every owner-occupied home in Queensland. Here's exactly what the current law requires, where alarms must go, and what happens if your home isn't compliant.",
    category: "Compliance",
    publishedAt: "2026-05-17",
    readingMinutes: 8,
    relatedService: { slug: "smoke-alarms", label: "Smoke Alarm Installation & Compliance" },
    body: [
      {
        type: "p",
        text: "From 1 January 2027, every owner-occupied home in Queensland must have smoke alarms that meet the new legislative standard. That deadline is less than two years away, and most homeowners in Logan and Brisbane south have not yet made the change.",
      },
      {
        type: "p",
        text: "If you've had smoke alarms in your home for years and assumed you were covered — you may not be. The current Queensland smoke alarm law introduced in 2017 changed the type of alarm required, where they must be installed, and how they must be powered. Older alarms that were perfectly legal before 2017 are now non-compliant.",
      },
      {
        type: "h2",
        text: "What the current Queensland smoke alarm legislation requires",
      },
      {
        type: "p",
        text: "The Queensland Fire and Emergency Services Act 1990 (as amended) sets out four specific requirements for all residential smoke alarms:",
      },
      {
        type: "ul",
        items: [
          "Photoelectric type — ionisation alarms do not comply, regardless of age or condition",
          "Interconnected — when one alarm activates, every alarm in the home sounds simultaneously",
          "Hardwired to mains power, OR fitted with a non-removable 10-year lithium battery",
          "Installed in the prescribed locations throughout the home",
        ],
      },
      {
        type: "p",
        text: "All four requirements must be met. A photoelectric alarm that is not interconnected does not comply. An interconnected alarm that runs on a standard replaceable battery does not comply. The legislation is specific, and partial compliance still means non-compliance.",
      },
      {
        type: "h2",
        text: "Where do smoke alarms need to be installed?",
      },
      {
        type: "p",
        text: "The prescribed locations are set out in the Building Fire Safety Regulation 2008. The intent is to ensure an alarm is always between a sleeping person and any fire that starts elsewhere in the home.",
      },
      {
        type: "ul",
        items: [
          "In every bedroom",
          "In every hallway that connects bedrooms to the rest of the house — or, where there is no hallway, between the bedrooms and the nearest exit",
          "On each level of the home, positioned in the most likely evacuation path",
          "In any room (other than a bedroom or bathroom) that a person would need to pass through to exit the home",
        ],
      },
      {
        type: "callout",
        text: "A typical three-bedroom home in Logan or Brisbane south will generally need a minimum of four to five compliant alarms. Many homes currently have one or two — and in the wrong locations.",
      },
      {
        type: "h2",
        text: "Rental properties — already required since 2022",
      },
      {
        type: "p",
        text: "If you own a rental property, the 2027 deadline does not apply to you — your compliance date has already passed. From 1 January 2022, all Queensland rental properties were required to have compliant photoelectric, interconnected smoke alarms installed at the start of any new tenancy or lease renewal.",
      },
      {
        type: "p",
        text: "If your rental property changed hands, started a new lease, or renewed a lease after January 2022 without being upgraded, it is currently non-compliant. As a landlord, you are exposed to fines and — more importantly — liability if a fire occurs and the alarms were not to standard.",
      },
      {
        type: "h2",
        text: "Owner-occupied homes — the 1 January 2027 deadline",
      },
      {
        type: "p",
        text: "For homes that are owner-occupied, Queensland law gives until 1 January 2027 to install compliant smoke alarms. After that date, all owner-occupied homes must meet the same standard that rental properties already do.",
      },
      {
        type: "p",
        text: "However, there is one situation where compliance is required before 2027: if you sell your home. Under Queensland legislation, a property must have compliant smoke alarms installed before a contract of sale is signed. Declaring a non-compliant home on a contract is an issue — but failing to disclose and selling anyway exposes you to greater legal risk.",
      },
      {
        type: "callout",
        text: "Planning to sell before 2027? Smoke alarm compliance is a legal requirement at the point of sale, not something the buyer can sort out later. Get it done before the listing goes live.",
      },
      {
        type: "h2",
        text: "Why photoelectric — and why ionisation alarms no longer comply",
      },
      {
        type: "p",
        text: "Ionisation smoke alarms were the standard for decades. They detect fast-flaming fires well, but are significantly slower to respond to slow, smouldering fires — which are the type most likely to occur at night when people are asleep. Research conducted before the legislative change showed that ionisation alarms can take up to 30 minutes longer than photoelectric alarms to detect a smouldering fire.",
      },
      {
        type: "p",
        text: "Photoelectric alarms use a light beam inside the chamber. When smoke enters, it scatters the beam and triggers the alarm. They respond faster to smouldering fires and generate fewer false alarms from cooking steam — which means people are less likely to disable them. Queensland made the switch to photoelectric mandatory because the evidence on performance was clear.",
      },
      {
        type: "h2",
        text: "Hardwired vs 10-year battery — what qualifies?",
      },
      {
        type: "ul",
        items: [
          "Hardwired alarms connect directly to the home's 240V mains power with a battery backup — they require a licensed electrician to install",
          "10-year lithium sealed battery alarms have a non-removable battery that lasts the life of the alarm — they do not require hardwiring but must still be interconnected",
          "Standard 9V replaceable battery alarms do not comply, regardless of alarm type",
          "Wireless RF interconnection (radio frequency) between alarms is acceptable — the alarms do not need to be wired to each other to interconnect",
        ],
      },
      {
        type: "p",
        text: "Many homeowners choose hardwired alarms because they remove the question of battery life entirely. In homes that already have a wiring point for the old smoke alarm, the cost difference between replacing like-for-like and upgrading to hardwired is often minimal.",
      },
      {
        type: "h2",
        text: "Does a licensed electrician need to install smoke alarms in Queensland?",
      },
      {
        type: "p",
        text: "For hardwired smoke alarms — yes, always. Connecting any device to the mains power supply is electrical work under Queensland law and must be carried out by a licensed electrician. Attempting hardwired smoke alarm installation yourself is illegal and will void your home insurance.",
      },
      {
        type: "p",
        text: "For sealed 10-year battery alarms — the installation itself is not licensed electrical work, but the planning of locations and the interconnection configuration matters. Getting the prescribed locations wrong means the installation is non-compliant regardless of the alarm type. Most homeowners use a licensed electrician for the full job to ensure the compliance certificate is defensible.",
      },
      {
        type: "callout",
        text: "We install compliant photoelectric, interconnected smoke alarms across Logan, Brisbane Southside and the Northern Gold Coast. Electrical Contractor Licence No. 87141. Compliance certificate issued on completion.",
      },
      {
        type: "h2",
        text: "What happens if your home is not compliant after the deadline?",
      },
      {
        type: "ul",
        items: [
          "Fines of up to $2,611 for non-compliant owner-occupied homes after 1 January 2027",
          "Non-disclosure on a property sale contract can void the sale or expose you to legal action",
          "Home insurance policies increasingly include compliance clauses — a non-compliant installation can affect a claim following a fire",
          "Rental property non-compliance can attract fines per tenancy and per property",
        ],
      },
      {
        type: "h2",
        text: "What Logan and Brisbane south homeowners should do now",
      },
      {
        type: "p",
        text: "Start by checking what you have. If your existing smoke alarms have a 'test' button and a 'hush' button but no visible brand-compliance marking referencing AS 3786:2014, they are almost certainly ionisation type and do not comply. If they are not interconnected — that is, if one alarm doesn't trigger the others — they do not comply.",
      },
      {
        type: "p",
        text: "The simplest approach for most homes is a single job: a licensed electrician assesses the existing alarms and locations, quotes a compliant installation, and issues the certificate on completion. In Logan and Brisbane south, most three to four bedroom homes are a half-day job.",
      },
      {
        type: "p",
        text: "If you are a property manager running a portfolio across Logan City or Brisbane Southside, we can schedule compliance audits across multiple properties and manage the installation programme efficiently — one point of contact, consistent documentation, and no chasing multiple trades.",
      },
    ],
  },
  {
    slug: "why-does-my-safety-switch-keep-tripping",
    title: "Why does my safety switch keep tripping?",
    description:
      "A safety switch that keeps tripping is telling you something is wrong — not with the switch, but somewhere in your home's electrical system. Here's how to find the cause, when to reset it yourself, and when to call an electrician.",
    category: "Emergency electrical",
    publishedAt: "2026-05-17",
    readingMinutes: 7,
    relatedService: { slug: "fault-finding", label: "Fault Finding & 24/7 Emergency Electrical" },
    body: [
      {
        type: "p",
        text: "A safety switch — or RCD — trips for one reason: it has detected that electrical current is leaking somewhere it shouldn't. When this happens once during a storm or after plugging in a faulty appliance, that's the switch doing exactly what it's supposed to do. When it happens repeatedly, or keeps tripping with nothing obvious plugged in, something in your home's electrical system needs attention.",
      },
      {
        type: "p",
        text: "The switch itself is rarely the problem. It's the messenger. Here's how to read what it's telling you.",
      },
      {
        type: "h2",
        text: "What a safety switch actually does",
      },
      {
        type: "p",
        text: "A safety switch monitors the flow of current through a circuit. The moment it detects an imbalance — meaning current is going somewhere unintended, such as through a person, a damaged cable, or moisture in a fitting — it cuts the power in milliseconds. This is fundamentally different from a circuit breaker, which only trips when a circuit is overloaded or short-circuits. A circuit breaker protects the wiring. A safety switch protects you.",
      },
      {
        type: "h2",
        text: "The most common reasons a safety switch keeps tripping",
      },
      {
        type: "ul",
        items: [
          "A faulty appliance — the most common cause by far. An appliance with damaged internal wiring, a deteriorated element, or water ingress will cause the RCD to trip every time it's plugged in",
          "Moisture in a light fitting or power point — water in the wrong place creates a leakage path that the RCD reads as a fault",
          "Damaged cable insulation — older homes, cables run through roof spaces, or cables that have been pinched or abraded can develop insulation faults that worsen over time",
          "A failing RCD — safety switches have a service life and can develop internal faults that cause nuisance tripping, particularly in older switchboards",
          "A wiring fault introduced by recent work — renovations, new appliances, or any work in the roof space can disturb cabling",
          "Multiple small leakage paths adding up — individually tolerable leakage from several older appliances can combine to exceed the RCD's 30mA trip threshold",
        ],
      },
      {
        type: "h2",
        text: "How to find which appliance is causing it",
      },
      {
        type: "p",
        text: "If the trip coincides with a specific appliance being plugged in or switched on, the isolation method will confirm it:",
      },
      {
        type: "ul",
        items: [
          "Reset the safety switch — if it holds, proceed",
          "Unplug every appliance on the circuit that tripped (look at which circuits are on that RCD)",
          "Reset the switch again — if it now holds, the fault is in one of the unplugged appliances",
          "Plug appliances back in one at a time, leaving a few minutes between each",
          "The switch will trip again when the faulty appliance is reconnected — that appliance needs to be taken out of service until repaired or replaced",
          "If the switch trips with nothing plugged in, the fault is in the fixed wiring or a hardwired fitting — stop resetting and call an electrician",
        ],
      },
      {
        type: "callout",
        text: "If you cannot isolate the fault to a specific appliance, and the switch trips with everything unplugged, do not keep resetting it. A wiring fault that isn't found is a fire risk.",
      },
      {
        type: "h2",
        text: "When you can reset the safety switch yourself",
      },
      {
        type: "p",
        text: "Resetting the switch yourself is fine when you have a clear, single cause — a wet appliance, a known faulty item you've now unplugged, or a one-off trip during a storm (lightning and power surges can cause momentary trips). In these cases, remove the cause, wait a moment, and push the switch back up. If it holds and doesn't trip again, you're done.",
      },
      {
        type: "h2",
        text: "When you need an electrician",
      },
      {
        type: "ul",
        items: [
          "The switch trips repeatedly with no obvious cause",
          "The switch trips with everything unplugged from the affected circuit",
          "The switch won't stay reset — it trips back off within seconds or minutes",
          "You can smell burning or notice a warm smell near the switchboard, a power point, or a light fitting",
          "The trip started after a renovation, roofing work, or any work in the roof space",
          "Multiple safety switches are tripping at the same time",
          "The trip started after water damage — a roof leak, flooding, or anything wet near wiring",
        ],
      },
      {
        type: "callout",
        text: "A safety switch tripping after water damage to the home is a genuine emergency. Do not re-energise the affected circuit until a licensed electrician has inspected the wiring.",
      },
      {
        type: "h2",
        text: "Why a safety switch that trips repeatedly should never be ignored",
      },
      {
        type: "p",
        text: "The most dangerous response to a nuisance-tripping safety switch is to bypass it, tape it up, or replace it with a standard circuit breaker so the power stays on. This removes the only protection standing between a wiring fault and a person getting electrocuted or a wall cavity starting to smoulder.",
      },
      {
        type: "p",
        text: "A safety switch that keeps tripping is almost always protecting against something real. In older homes across Logan and Brisbane south — many built in the 1970s and 80s — degraded cable insulation and ageing appliances are the most common culprits. These faults don't resolve themselves. They get worse.",
      },
      {
        type: "h2",
        text: "What if the safety switch won't reset at all?",
      },
      {
        type: "p",
        text: "If the switch physically won't stay in the up position — it either trips immediately or won't click into place — there is an active fault on the circuit. This is not a switch problem; the switch is detecting a continuous leakage it won't allow to pass. Unplug everything on that circuit and try again. If it still won't hold with the circuit completely unloaded, the fault is in the fixed wiring or a hardwired fitting such as a hot water system, oven, or air conditioner. The circuit needs to stay off and the fault located before the power is restored.",
      },
      {
        type: "h2",
        text: "Safety switch vs circuit breaker — knowing the difference",
      },
      {
        type: "p",
        text: "The switches in your switchboard are not all the same. Safety switches (RCDs) have a small 'Test' button marked 'T' — pressing it should cause the switch to trip. Standard circuit breakers have no test button. Many older homes in the Logan area have circuit breakers on every circuit but only one or two safety switches — or none at all. If you can't find a test button on your switchboard, your home may not have adequate RCD protection.",
      },
      {
        type: "p",
        text: "A switchboard inspection will confirm exactly what protection is in place across each circuit. If you're adding a major appliance — an EV charger, a new air conditioning circuit, a hot water system — a dedicated RCD-protected circuit for that load is standard practice.",
      },
      {
        type: "h2",
        text: "Getting your safety switch tested",
      },
      {
        type: "p",
        text: "Queensland regulations require safety switches to be tested at the start of each new tenancy in rental properties, with results recorded on the entry condition report. For owner-occupied homes, annual testing is recommended — RCDs can develop faults that aren't apparent until they're needed. Testing takes about 30 seconds per switch and confirms the trip time is within the safe threshold.",
      },
      {
        type: "p",
        text: "If you're in Logan, Brisbane Southside, or the Northern Gold Coast and your safety switch is tripping repeatedly — or you're not sure your home has adequate RCD coverage — we can diagnose the fault, identify the source, and have the circuit back on safely. We run 24/7 callout for genuine electrical faults and same-day bookings for non-urgent diagnostics.",
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
