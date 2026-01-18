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
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
        }}>
            {programs.map(program => (
                <ProgramCard key={program.id} program={program} />
            ))}
        </div>
    );
};

export default ProgramList;
