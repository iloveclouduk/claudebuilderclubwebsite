"use client";

import { Check } from "lucide-react";

const tiers = [
    {
        name: "Individual",
        href: "#",
        priceMonthly: 0,
        description: "For personal projects and learning agentic workflows.",
        features: [
            "Access to standard agents",
            "Unlimited local execution",
            "Basic context retention",
            "Community support",
        ],
    },
    {
        name: "Pro",
        href: "#",
        priceMonthly: 20,
        description: "For professional developers building complex applications.",
        features: [
            "Advanced reasoning agents",
            "Priority cloud execution",
            "Deep project context",
            "Early access to new features",
            "Priority support",
        ],
    },
    {
        name: "Organization",
        href: "#",
        priceMonthly: 50,
        description: "For teams collaborating on large-scale software systems.",
        features: [
            "Shared team context",
            "SSO & centralized billing",
            "Audit logs & security policies",
            "Dedicated success manager",
        ],
    },
];

export default function Pricing() {
    return (
        <section className="bg-claude-builder-club-bg py-24 sm:py-32" id="pricing">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-claude-builder-club-blue">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-claude-builder-club-text sm:text-5xl">
                        Pricing plans for teams of all sizes
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-claude-builder-club-text-secondary">
                    Choose a plan that fits your needs. Start building with agentic AI today.
                </p>

                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.name}
                            className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-xl transition-shadow ${tierIdx === 1 ? 'ring-2 ring-claude-builder-club-blue shadow-lg' : ''
                                }`}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.name}
                                        className={`text-lg font-semibold leading-8 ${tierIdx === 1 ? 'text-claude-builder-club-blue' : 'text-claude-builder-club-text'}`}
                                    >
                                        {tier.name}
                                    </h3>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-claude-builder-club-text-secondary">{tier.description}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-claude-builder-club-text">${tier.priceMonthly}</span>
                                    <span className="text-sm font-semibold leading-6 text-claude-builder-club-text-secondary">/month</span>
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-claude-builder-club-text-secondary">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-claude-builder-club-blue" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={tier.href}
                                aria-describedby={tier.name}
                                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tierIdx === 1
                                        ? 'bg-claude-builder-club-blue text-white shadow-sm hover:bg-claude-builder-club-blue-hover focus-visible:outline-claude-builder-club-blue'
                                        : 'text-claude-builder-club-blue ring-1 ring-inset ring-claude-builder-club-blue/20 hover:ring-claude-builder-club-blue/30'
                                    }`}
                            >
                                Buy plan
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
