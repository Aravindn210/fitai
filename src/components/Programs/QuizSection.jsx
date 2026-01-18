import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuizSection = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isStarted, setIsStarted] = useState(false);

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
        const newAnswers = { ...answers, [questions[step].id]: option };
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            finishQuiz(newAnswers);
        }
    };

    const finishQuiz = (finalAnswers) => {
        let recommendedId = 1;
        const goal = finalAnswers.goal || questions[0].options[0];

        if (goal.includes("Weight")) recommendedId = 2;
        if (goal.includes("Muscle")) recommendedId = 1;
        if (goal.includes("Cardio")) recommendedId = 4;
        if (goal.includes("Lifestyle")) recommendedId = 5;

        localStorage.setItem('fitai_recommended_id', recommendedId);
        navigate(`/recommended`);
    };

    if (!isStarted) {
        return (
            <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1000&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                border: '1px solid var(--surface-hover)',
                marginBottom: '6rem'
            }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>
                    Need Help Choosing?
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
                    Take our 30-second AI assessment to get a personalized program recommendation tailored exactly to your body type and goals.
                </p>
                <button
                    onClick={() => setIsStarted(true)}
                    className="btn btn-primary"
                    style={{ padding: '16px 40px', fontSize: '1.1rem' }}
                >
                    Start Quiz
                </button>
            </div>
        );
    }

    return (
        <div style={{
            backgroundColor: 'var(--surface-color)',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: '6rem',
            border: '1px solid var(--surface-hover)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="flex justify-between items-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <span style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Step {step + 1} of {questions.length}</span>
                    <div style={{ width: '100px', height: '4px', background: 'var(--bg-color)', borderRadius: '2px' }}>
                        <div style={{
                            width: `${((step + 1) / questions.length) * 100}%`,
                            height: '100%',
                            background: 'var(--primary-color)',
                            transition: 'width 0.3s ease'
                        }} />
                    </div>
                </div>

                <h3 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
                    {questions[step].title}
                </h3>

                <div className="grid gap-md" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                    {questions[step].options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleOptionSelect(option)}
                            style={{
                                padding: '24px',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--surface-hover)',
                                borderRadius: 'var(--radius-md)',
                                color: 'var(--text-primary)',
                                fontSize: '1.1rem',
                                fontWeight: 500,
                                transition: 'all 0.2s',
                                textAlign: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--surface-hover)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuizSection;
