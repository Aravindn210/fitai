import React, { useState, useMemo } from 'react';
import ProgramList from './ProgramList';
import ProgramFilters from './ProgramFilters';
import SmartRecommender from '../Quiz/SmartRecommender';
import { programs, categories } from '../../data/programs';
import { Search } from 'lucide-react';

const ProgramsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    const filteredPrograms = useMemo(() => {
        return programs.filter(program => {
            const matchesCategory = activeCategory === 'All' || program.category === activeCategory;
            const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div>
            {/* New Hero Section */}
            <div style={{
                position: 'relative',
                height: '60vh',
                minHeight: '400px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-xl)'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(rgba(0,0,0,0.6), var(--bg-color))'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{
                        fontSize: '4rem',
                        marginBottom: 'var(--spacing-md)',
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        letterSpacing: '-2px'
                    }}>
                        TRANSFORM YOUR <br />
                        <span style={{ color: 'var(--primary-color)' }}>BODY & MIND</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-primary)',
                        marginBottom: 'var(--spacing-lg)',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}>
                        Professional coaching, personalized plans, and AI-driven insights to help you reach your peak potential.
                    </p>
                    <button onClick={() => setIsQuizOpen(true)} className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                        Find Your Program
                    </button>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>

                {/* Quiz Prompt Section - Redesigned to be less intrusive/congested */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'var(--surface-color)',
                    padding: 'var(--spacing-lg)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: '4rem', // More spacing
                    border: '1px solid var(--surface-hover)',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-md)'
                }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Unsure where to start?</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Let our AI recommend the perfect plan for you in 30 seconds.</p>
                    </div>
                    <button
                        onClick={() => setIsQuizOpen(true)}
                        className="btn btn-secondary"
                    >
                        Take Recommendation Quiz
                    </button>
                </div>

                <div className="flex flex-col items-center gap-sm" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Explore Programs</h2>
                </div>

                <SmartRecommender isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

                <div className="flex flex-col gap-lg">
                    {/* Search & Filter Bar - Added more vertical margin */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-md"
                        style={{
                            background: 'var(--surface-color)',
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-lg)'
                        }}>

                        <ProgramFilters
                            categories={categories}
                            activeCategory={activeCategory}
                            onSelectCategory={setActiveCategory}
                        />

                        <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
                            <Search size={20} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                            <input
                                type="text"
                                placeholder="Search programs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px 10px 10px 40px',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--surface-hover)',
                                    backgroundColor: 'var(--bg-color)',
                                    color: 'var(--text-primary)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    {/* Results */}
                    <ProgramList programs={filteredPrograms} />
                </div>
            </div>
        </div>
    );
};

export default ProgramsPage;
