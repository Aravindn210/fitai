import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { programs } from '../../data/programs';
import ProgramCard from './ProgramCard';
import SmartRecommender from '../Quiz/SmartRecommender';
import { Sparkles, ArrowRight } from 'lucide-react';

const RecommendedPage = () => {
    const [recommendedId, setRecommendedId] = useState(null);
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    useEffect(() => {
        // Check local storage for saved recommendation
        const savedId = localStorage.getItem('fitai_recommended_id');
        if (savedId) {
            setRecommendedId(parseInt(savedId));
        }
    }, [isQuizOpen]); // Re-check when quiz closes

    const recommendedProgram = programs.find(p => p.id === recommendedId);

    return (
        <div className="container" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div className="flex flex-col items-center gap-sm" style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h1 className="section-title">For You</h1>
                <p className="section-subtitle">
                    Personalized recommendations based on your goals and preferences.
                </p>
            </div>

            {recommendedProgram ? (
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{
                        backgroundColor: 'rgba(204, 255, 0, 0.05)',
                        border: '1px solid var(--primary-color)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-lg)',
                        marginBottom: 'var(--spacing-lg)',
                        textAlign: 'center'
                    }}>
                        <div className="flex items-center justify-center gap-sm" style={{ marginBottom: 'var(--spacing-md)' }}>
                            <Sparkles color="var(--primary-color)" />
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Your Perfect Match</h2>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                            Based on your quiz results, we've identified the ideal program to help you crush your goals.
                        </p>

                        <div style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
                            <ProgramCard program={recommendedProgram} />
                        </div>

                        <button
                            onClick={() => setIsQuizOpen(true)}
                            style={{
                                marginTop: 'var(--spacing-lg)',
                                color: 'var(--text-secondary)',
                                textDecoration: 'underline',
                                fontSize: '0.9rem'
                            }}
                        >
                            Retake Quiz
                        </button>
                    </div>
                </div>
            ) : (
                <div style={{
                    textAlign: 'center',
                    backgroundColor: 'var(--surface-color)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-md)' }}>We don't know you yet!</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                        Take our quick 30-second assessment so our AI can design a personalized fitness path just for you.
                    </p>
                    <button
                        onClick={() => setIsQuizOpen(true)}
                        className="btn btn-primary"
                        style={{ padding: '16px 32px', fontSize: '1.1rem' }}
                    >
                        Start Assessment <ArrowRight size={20} style={{ marginLeft: '8px', verticalAlign: 'text-bottom' }} />
                    </button>
                </div>
            )}

            <SmartRecommender isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        </div>
    );
};

export default RecommendedPage;
