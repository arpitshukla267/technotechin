import { ServiceItem, TimelineQuality, Testimonial } from '../types';

export const STUDIO_CONTACT = {
  email: 'technotechin@outlook.com',
  addressLines: [
    'C/O Deen Dayal, 1618/4, buddh nagar masiha ganj',
    'sipri bazar jhansi, Jhansi, PO: Sipri Bazar, DIST: Jhansi',
    'Uttar Pradesh - 284003',
  ],
};

export const ABOUT_VALUES = [
  {
    icon: 'code',
    title: 'Clean Engineering',
    description:
      'We design type-safe TypeScript architectures with clear separation of concerns, structured logging, and maintainable modules built to scale.',
  },
  {
    icon: 'cpu',
    title: 'Multi-Tier Integration',
    description:
      'From 3 layer design to full 7 layer stacks with API integration, we match system complexity to your product goals — never more than you need.',
  },
  {
    icon: 'sparkles',
    title: 'Aesthetic Integrity',
    description:
      'Typography, spacing, and motion are treated as engineering decisions. Every screen is designed for clarity, trust, and conversion.',
  },
  {
    icon: 'shield',
    title: 'Security First',
    description:
      'Authentication shields, encrypted tunnels, audit logs, and secure payment flows are built into our layered architectures from day one.',
  },
  {
    icon: 'zap',
    title: 'Performance Focus',
    description:
      'Fast load times, lean bundles, and optimized assets. Our cleanup service and build practices keep projects fast long after launch.',
  },
  {
    icon: 'users',
    title: 'Client Partnership',
    description:
      'We work closely with founders, product teams, and institutions — communicating clearly, documenting thoroughly, and delivering on scope.',
  },
];

export const ABOUT_PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We map your goals, audience, technical constraints, and success metrics before writing a single line of code.',
  },
  {
    step: '02',
    title: 'Architecture',
    description: 'Layer diagrams, API contracts, database schemas, and UI wireframes are agreed upon before development begins.',
  },
  {
    step: '03',
    title: 'Build & Integrate',
    description: 'Iterative development with regular checkpoints. Payment gateways, VPN setups, and API tiers are tested in staging.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Deployment, documentation, handover, and optional cleanup or maintenance to keep your system healthy.',
  },
];

export const ABOUT_STATS = [
  { value: '6+', label: 'Core service offerings' },
  { value: '3–7', label: 'Layer architecture tiers' },
  { value: '24h', label: 'Inquiry response time' },
  { value: '100%', label: 'Scope-driven delivery' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '7-layer-design',
    number: '01',
    title: '7 layer design',
    price: '$300.00',
    tagline: 'Enterprise Software Stack & Routing',
    description: 'A comprehensive seven-layer architecture for complex web platforms. Available as a standard layout design or upgraded with full backend API integration.',
    detailedScope: [
      'Standard 7 layer design ($300.00): Complete front-to-back logical component mapping and system design documentation.',
      'API Integrated 7 layer stack ($499.00): Live deployment containing Edge Proxy, JWT Auth Shield, Redis Session cache, DB transaction sync, and audit ledger logs.'
    ],
    deliverables: [
      'Enterprise Stack Blueprint',
      'Shield Authentication Module',
      'API Gateway Middleware',
      'Log Audit Analytics'
    ],
    focusAreas: ['Distributed Scale', 'Strict Security', 'Proxy Caching', 'Auditing & Metrics'],
    hasVariants: true,
    variants: [
      {
        name: '7 layer design',
        price: '$300.00',
        desc: 'Enterprise architecture covering UI layers, data logic flow, database schemas, and caching layouts.'
      },
      {
        name: '7 layer design with API integration',
        price: '$499.00',
        desc: 'Fully built 7-layer stack with API gateway, authentication, caching, and live database sync.'
      }
    ]
  },
  {
    id: '3-layer-design',
    number: '02',
    title: '3 layer design',
    price: '$189.00',
    tagline: 'Structured Tiered Architecture',
    description: 'A robust three-tier system layout isolating presentation modules, intermediate controllers, and database storage registries. Available with standard schemas or upgraded API routing.',
    detailedScope: [
      'Standard 3 layer design ($189.00): Decoupled UI controls, validation scripts, and clean schema setup.',
      'API Integrated 3 layer stack ($399.00): Fully coded data routing pipeline connecting client interfaces directly to database storage tables.'
    ],
    deliverables: [
      '3-Tier Component Schemas',
      'API Router Middleware Codebase',
      'SQL / NoSQL Table Designs',
      'Integrated Request Validations'
    ],
    focusAreas: ['Clean Routing', 'Data Serialization', 'Request Validation', 'Reliable Sync'],
    hasVariants: true,
    variants: [
      {
        name: '3 layer design',
        price: '$189.00',
        desc: 'Clean division of presentation layers, logical handlers, and persistent storage layout designs.'
      },
      {
        name: '3 layer design with API integration',
        price: '$399.00',
        desc: 'Live API endpoints, request sanitizers, validation middleware, and database connectivity.'
      }
    ]
  },
  {
    id: 'single-website-design',
    number: '03',
    title: 'single website design',
    price: '$100.00',
    tagline: 'High-Performance Single Page App',
    description: 'Custom single-page web applications optimized for speed, conversion rates, and mobile device rendering. Includes responsive styles, branding integration, and SEO optimizations.',
    detailedScope: [
      'Responsive interface layout engineered with React & Tailwind CSS',
      'Fast loading speed scores and pristine Google Core Web Vitals',
      'SEO metadata schema and custom graphic asset placement',
      'Frictionless lead intake form connected to email notifications'
    ],
    deliverables: [
      'Deployable Single Page Website',
      'Custom Responsive Style Tokens',
      'SEO Configuration File',
      'Email Integration Module'
    ],
    focusAreas: ['Speed', 'Mobile Optimization', 'Conversion Optimization', 'SEO Rank']
  },
  {
    id: 'single-layer-design',
    number: '04',
    title: 'single layer design',
    price: '$200.00',
    tagline: 'Targeted Application Scripts',
    description: 'Targeted single-tier backend scripts or isolated frontend components. Useful for standalone widgets, parsing tools, form handler backends, or local integrations.',
    detailedScope: [
      'Standalone local script routines and logic execution rules',
      'Form parser widgets and direct data submissions',
      'Utility integrations with zero complex server configurations'
    ],
    deliverables: [
      'Standalone Script Codebase',
      'Setup & Launch Documentation',
      'Local Runtime Setup Schemas'
    ],
    focusAreas: ['Lightweight Execution', 'Decoupled Utility', 'Rapid Launch', 'High Portability']
  },
  {
    id: 'cleanup',
    number: '05',
    title: 'cleanup',
    price: '$99.00',
    tagline: 'Performance & Tech Debt Audit',
    description: 'Comprehensive codebase diagnostics and refactoring. Removes redundant modules, optimizes asset bundles, resolves dependency conflicts, and speeds up page execution scores.',
    detailedScope: [
      'Unused module detection and dependency pruning audits',
      'Image and bundle compression setup to optimize bandwidth',
      'HTML structure semantic auditing and console log cleaning',
      'CSS refactoring to prune unused class definitions'
    ],
    deliverables: [
      'Optimized Clean Codebase',
      'Tech Debt Remediation Report',
      'Asset Compression Configuration'
    ],
    focusAreas: ['Page Speed', 'Code Readability', 'Dependency Health', 'Optimized Payload']
  },
  {
    id: 'vpn-service',
    number: '06',
    title: 'VPN service',
    price: '$200.00',
    tagline: 'Secure Tunneling & Encrypted Proxying',
    description: 'Private network setup and gateway routing. Protects local traffic using secure protocols, provides custom client-to-site setup instructions, and locks down communication channels.',
    detailedScope: [
      'Client-to-site and site-to-site secure encrypted tunnels',
      'Private static IP mapping and proxy gateway shields',
      'Security protocols configuration including WireGuard or OpenVPN schemas'
    ],
    deliverables: [
      'Configured VPN Server Settings',
      'Secure Access Config Keys',
      'Detailed Installation Manuals'
    ],
    focusAreas: ['Traffic Privacy', 'Access Shielding', 'Static Routing', 'Encrypted Transport']
  }
];

export const TIMELINE_QUALITIES: TimelineQuality[] = [
  {
    id: 'quality-1',
    number: '01',
    title: 'Clear Thinking',
    description: 'We understand the requirement, audience and objective before starting the work.',
    details: 'Every engagement begins with listening and dissecting core business goals. We eliminate ambiguity early, ensuring every technical and visual choice serves a measurable purpose.'
  },
  {
    id: 'quality-2',
    number: '02',
    title: 'Thoughtful Design',
    description: 'Every visual decision is made around clarity, usability and consistency.',
    details: 'We reject decorative noise in favor of functional elegance. Hierarchy, spatial balance, and restrained typography guide users naturally through every screen.'
  },
  {
    id: 'quality-3',
    number: '03',
    title: 'Reliable Development',
    description: 'We build responsive, scalable and performance-focused digital experiences.',
    details: 'Underneath our minimal aesthetics is rock-solid engineering. Clean TypeScript architectures, optimized bundle sizes, and fast server responses ensure long-term stability.'
  },
  {
    id: 'quality-4',
    number: '04',
    title: 'Attention to Detail',
    description: 'Small details matter, from spacing and typography to interactions and final polish.',
    details: 'True craft lives in the margins: sub-millisecond interaction feedback, balanced letter-spacing, optical alignment, and seamless responsive behaviors across every screen.'
  },
  {
    id: 'quality-5',
    number: '05',
    title: 'Long-Term Value',
    description: 'The goal is not just to deliver a project, but to create something useful for the business.',
    details: 'We design and engineer assets that age gracefully. We build maintainable systems that empower your team to scale without technical debt or visual erosion.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Techno Techin transformed how our clients encounter our firm online. The clarity of their web development and identity strategy gave our brand an unmatched level of credibility.',
    clientName: 'Marcus Vance',
    clientPosition: 'Managing Director',
    company: 'Vance & Associates Architecture',
    serviceCategory: 'Web Development & Identity'
  },
  {
    id: 'test-2',
    quote: 'The visual assets and graphics developed for our product launch were exceptionally clean, disciplined, and cohesive. They delivered exactly what we needed without unnecessary friction.',
    clientName: 'Elena Rostova',
    clientPosition: 'Head of Product',
    company: 'Kroma Technology Labs',
    serviceCategory: 'Graphics & Brand Assets'
  },
  {
    id: 'test-3',
    quote: 'Our digital presence system consolidated dozens of disconnected channels into a single, high-converting digital gateway. The attention to detail from the Techno Techin team is evident on every level.',
    clientName: 'Julian Sterling',
    clientPosition: 'Chief Executive Officer',
    company: 'Sterling Capital Group',
    serviceCategory: 'Digital Identity Solutions'
  },
  {
    id: 'test-4',
    quote: 'Working with Techno Techin feels like having an elite in-house digital studio. They understand that real impact comes from restraint, precision, and reliable code.',
    clientName: 'Sophie Moreau',
    clientPosition: 'Brand Director',
    company: 'Atelier Monochrome',
    serviceCategory: 'Web Architecture & Design'
  }
];
