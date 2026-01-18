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
        <div className="flex flex-wrap justify-center gap-lg">
            {programs.map(program => (
                <div key={program.id} style={{ width: '350px', maxWidth: '100%' }}>
                    <ProgramCard program={program} />
                </div>
            ))}
        </div>
    );
};

export default ProgramList;
