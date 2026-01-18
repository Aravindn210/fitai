import React from 'react';
import { Check } from 'lucide-react';

const PricingPage = () => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div className="flex flex-col items-center gap-sm" style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h1 className="section-title">Membership Plans</h1>
                <p className="section-subtitle">
                    Choose the best plan for you and your family. Flexible options to suit every lifestyle.
                </p>
            </div>

            <div className="grid gap-lg" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                {/* Basic Plan */}
                <PricingCard
                    title="Basic Plan"
                    price="₹2,499"
                    features={[
                        "Workout Plans",
                        "Diet Plans",
                        "Regular AI Assistant",
                        "Basic Tracking"
                    ]}
                />

                {/* Premium Plan */}
                <PricingCard
                    title="Premium Plan"
                    price="₹4,999"
                    highlight
                    features={[
                        "Personalized Workouts & Diet",
                        "Advanced Health Tracking",
                        "Live Sessions (Specified Times)",
                        "Daily AI Personal Trainer",
                        "Priority Support"
                    ]}
                />

                {/* Family Plan - From Sketch */}
                <PricingCard
                    title="Family Health"
                    price="₹7,999"
                    tag="Best Value"
                    features={[
                        "Up to 5 Family Members",
                        "Separate Fitness Training per Age Group",
                        "Separate Diet Plans",
                        "Health Education Sections",
                        "Unified Tracking Dashboard",
                        "Lifestyle Disease Assistance"
                    ]}
                />
            </div>
        </div>
    );
};

const PricingCard = ({ title, price, features, highlight, tag }) => {
    return (
        <div style={{
            backgroundColor: highlight ? 'var(--surface-hover)' : 'var(--surface-color)',
            padding: 'var(--spacing-lg)',
            borderRadius: 'var(--radius-lg)',
            border: highlight ? '2px solid var(--primary-color)' : '1px solid var(--surface-hover)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {tag && (
                <div style={{
                    position: 'absolute', top: -12, right: 24,
                    backgroundColor: 'var(--secondary-color)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontWeight: 700,
                    fontSize: '0.8rem'
                }}>
                    {tag}
                </div>
            )}

            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: 'var(--spacing-lg)' }}>
                <span style={{ fontSize: '3rem', fontWeight: 700, color: highlight ? 'var(--primary-color)' : 'var(--text-primary)' }}>{price}</span>
                <span style={{ color: 'var(--text-secondary)' }}>/mo</span>
            </div>

            <div style={{ flex: 1, marginBottom: 'var(--spacing-lg)' }}>
                {features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-sm" style={{ marginBottom: '12px' }}>
                        <Check size={20} color={highlight ? "var(--primary-color)" : "var(--text-secondary)"} />
                        <span style={{ color: 'var(--text-secondary)' }}>{feat}</span>
                    </div>
                ))}
            </div>

            <button className={highlight ? "btn btn-primary" : "btn btn-secondary"} style={{ width: '100%' }}>
                Choose Plan
            </button>
        </div>
    );
};

export default PricingPage;
