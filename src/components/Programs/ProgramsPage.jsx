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
        <div className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
            <div className="flex flex-col items-center gap-sm" style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h1 className="section-title">Explore Our Programs</h1>
                <p className="section-subtitle">
                    Find the perfect workout plan tailored to your goals. From bodybuilding to lifestyle management, we have it all.
                </p>
            </div>

            {/* Quiz Prompt Section */}
            <div style={{
                background: 'linear-gradient(90deg, var(--surface-color) 0%, rgba(204, 255, 0, 0.1) 100%)',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: 'var(--spacing-xl)',
                border: '1px solid var(--surface-hover)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 'var(--spacing-md)'
            }}>
                <h2 style={{ fontSize: '1.8rem' }}>Not sure which program fits you?</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    Take our 30-second Smart Quiz and let our AI Personal Trainer recommend the best plan for your goals.
                </p>
                <button
                    onClick={() => setIsQuizOpen(true)}
                    className="btn btn-primary"
                >
                    Take the Quiz
                </button>
            </div>

            <SmartRecommender isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

            <div className="flex flex-col gap-lg">
                {/* Search & Filter Bar */}
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
    );
};

export default ProgramsPage;
