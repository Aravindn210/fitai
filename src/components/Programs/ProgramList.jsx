import React from 'react';
import ProgramCard from './ProgramCard';

const ProgramList = ({ programs }) => {
    if (programs.length === 0) {
        return (
            <div className="flex justify-center items-center" style={{ height: '200px', color: 'var(--text-secondary)' }}>
                <p>No programs found matching your criteria.</p>
            </div>
        );
    }

    return (
        <div className="grid gap-lg" style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            width: '100%'
        }}>
            {programs.map(program => (
                <div key={program.id} style={{
                    gridColumn: program.gridSpan ? `span ${program.gridSpan}` : 'auto',
                    // Responsive fix: On smaller screens, force span 1 (handled via media query usually, but inline style is tricky.
                    // Ideally we'd use a class, but for now let's hope the auto-fill handles it or use a media query in style tag)
                    minWidth: 0 // Prevent grid blowout
                }} className={program.gridSpan ? 'col-span-2-md' : ''}>
                    <ProgramCard program={program} />
                </div>
            ))}
            <style>{`
                @media (max-width: 768px) {
                  .col-span-2-md { grid-column: auto !important; }
                }
            `}</style>
        </div>
    );
};

export default ProgramList;
