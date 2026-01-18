import React, { useState } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SmartRecommender = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});

    if (!isOpen) return null;

    const questions = [
        {
            id: 'goal',
            title: "What is your primary goal?",
            options: ["Build Muscle", "Lose Weight", "Improve Cardio", "Healthy Lifestyle"]
        },
        {
            id: 'experience',
            title: "What is your experience level?",
            options: ["Beginner", "Intermediate", "Advanced"]
        },
        {
            id: 'preference',
            title: "Preferred workout environment?",
            options: ["Gym", "Home", "Outdoors"]
        }
    ];

    const handleOptionSelect = (option) => {
        setAnswers({ ...answers, [questions[step].id]: option });
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            // Finish quiz logic
            finishQuiz();
        }
    };

    const finishQuiz = () => {
        // Determine recommendation based on simple logic
        let recommendedId = 1; // Default
        const goal = answers.goal || questions[0].options[0]; // Fallback if fast clicked

        if (goal.includes("Weight")) recommendedId = 2;
        if (goal.includes("Muscle")) recommendedId = 1;
        if (goal.includes("Cardio")) recommendedId = 4;
        if (goal.includes("Lifestyle")) recommendedId = 5;

        // Save to localStorage for 'For You' page
        localStorage.setItem('fitai_recommended_id', recommendedId);

        onClose();
        navigate(`/program/${recommendedId}`);
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backdropFilter: 'blur(5px)'
        }}>
            <div style={{
                backgroundColor: 'var(--surface-color)',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                width: '90%',
                maxWidth: '500px',
                position: 'relative',
                border: '1px solid var(--surface-hover)'
            }}>
                <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, color: 'var(--text-secondary)' }}>
                    <X size={24} />
                </button>

                <div style={{ marginBottom: 'var(--spacing-md)' }}>
                    <span style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600 }}>
                        Question {step + 1} of {questions.length}
                    </span>
                    <div style={{ height: '4px', background: 'var(--surface-hover)', marginTop: '8px', borderRadius: '2px' }}>
                        <div style={{
                            height: '100%',
                            background: 'var(--primary-color)',
                            width: `${((step + 1) / questions.length) * 100}%`,
                            transition: 'width 0.3s ease'
                        }} />
                    </div>
                </div>

                <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--spacing-lg)' }}>
                    {questions[step].title}
                </h2>

                <div className="flex flex-col gap-sm">
                    {questions[step].options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleOptionSelect(option)}
                            style={{
                                padding: '16px',
                                textAlign: 'left',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--surface-hover)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontWeight: 500,
                                transition: 'all 0.2s',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                                e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--surface-hover)';
                                e.currentTarget.style.backgroundColor = 'var(--bg-color)';
                            }}
                        >
                            {option}
                            <ArrowRight size={18} color="var(--text-secondary)" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmartRecommender;
