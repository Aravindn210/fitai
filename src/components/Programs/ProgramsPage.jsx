import React, { useState, useMemo } from 'react';
import ProgramList from './ProgramList';
import ProgramFilters from './ProgramFilters';
import QuizSection from './QuizSection';
import { programs, categories } from '../../data/programs';
import { Search } from 'lucide-react';

const ProgramsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    // Quiz is now embedded, so no modal state needed here for it, unless we keep the hero button.
    // The Hero button "Find Your Program" should scroll to the quiz section or open it.
    // For simplicity, let's keep the isQuizOpen for the HERO button, but show the QuizSection below.
    // Actually, let's make the Hero button scroll to the QuizSection.

    const scrollToQuiz = () => {
        document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    const filteredPrograms = useMemo(() => {
        return programs.filter(program => {
            const matchesCategory = activeCategory === 'All' || program.category === activeCategory;
            const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div>
            {/* Hero Section */}
            <div style={{
                position: 'relative',
                height: '70vh',
                minHeight: '500px',
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
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), var(--bg-color))'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: 'var(--spacing-md)',
                        textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                        letterSpacing: '-2px',
                        lineHeight: 1.1
                    }}>
                        TRANSFORM YOUR <br />
                        <span style={{ color: 'var(--primary-color)' }}>BODY & MIND</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: 'var(--spacing-lg)',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Professional coaching, personalized plans, and AI-driven insights to help you reach your peak potential.
                    </p>
                    <button onClick={scrollToQuiz} className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1.1rem' }}>
                        Find Your Program
                    </button>
                </div>
            </div>

            <div className="container" style={{ paddingBottom: 'var(--spacing-xl)' }}>

                {/* New Embedded Quiz Section */}
                <div id="quiz-section">
                    <QuizSection />
                </div>

                <div className="flex flex-col items-center gap-sm" style={{ marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Explore Programs</h2>
                    <p className="section-subtitle">
                        Select a category or search to find specific training modules.
                    </p>
                </div>

                <div className="flex flex-col gap-lg">
                    {/* Search & Filter Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-md"
                        style={{
                            background: 'var(--surface-color)',
                            padding: 'var(--spacing-md)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--surface-hover)'
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
