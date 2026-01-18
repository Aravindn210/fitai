import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { programs } from '../../data/programs';
import { CheckCircle, Clock, BarChart, ArrowLeft } from 'lucide-react';

const ProgramDetailPage = () => {
    const { id } = useParams();
    const program = programs.find(p => p.id === parseInt(id));

    if (!program) {
        return <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>Program not found</div>;
    }

    return (
        <div>
            {/* Hero Section */}
            <div style={{
                height: '50vh',
                position: 'relative',
                backgroundImage: `url(${program.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), var(--bg-color))'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', paddingBottom: 'var(--spacing-lg)' }}>
                    <Link to="/" className="flex items-center gap-sm" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
                        <ArrowLeft size={20} /> Back to Programs
                    </Link>
                    <span style={{
                        backgroundColor: 'var(--primary-color)',
                        color: 'var(--text-inverse)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontWeight: 700
                    }}>
                        {program.category}
                    </span>
                    <h1 style={{ fontSize: '3.5rem', marginTop: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                        {program.title}
                    </h1>
                    <div className="flex gap-lg" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        <span className="flex items-center gap-sm"><Clock size={20} /> {program.duration}</span>
                        <span className="flex items-center gap-sm"><BarChart size={20} /> {program.level}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>
                <div className="grid gap-lg" style={{ gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Program Overview</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                            Unlock your full potential with the {program.title}. This comprehensive {program.duration} program is designed for {program.level} level
                            enthusiasts who are serious about their goals. {program.category === 'Lifestyle' ? 'We focus on sustainable health changes.' : 'Get ready to transform your physique and performance.'}
                        </p>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>What's Included</h3>
                        <div className="grid gap-md" style={{ gridTemplateColumns: '1fr 1fr' }}>
                            {program.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-sm" style={{ backgroundColor: 'var(--surface-color)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                                    <CheckCircle size={20} color="var(--primary-color)" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                            <div className="flex items-center gap-sm" style={{ backgroundColor: 'var(--surface-color)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                                <CheckCircle size={20} color="var(--primary-color)" />
                                <span>Mobile App Access</span>
                            </div>
                            <div className="flex items-center gap-sm" style={{ backgroundColor: 'var(--surface-color)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                                <CheckCircle size={20} color="var(--primary-color)" />
                                <span>Community Support</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'sticky',
                            top: '100px',
                            backgroundColor: 'var(--surface-color)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--surface-hover)'
                        }}>
                            <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Join this Program</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: 'var(--spacing-lg)' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-color)' }}>{program.price}</span>
                                <span style={{ color: 'var(--text-secondary)' }}>/ month</span>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}>
                                Start Free Trial
                            </button>
                            <button className="btn btn-secondary" style={{ width: '100%' }}>
                                Join Now
                            </button>

                            <p style={{ marginTop: 'var(--spacing-md)', fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                                7-day money-back guarantee. Cancel anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetailPage;
