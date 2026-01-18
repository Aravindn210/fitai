import React from 'react';

const ProgramFilters = ({ categories, activeCategory, onSelectCategory }) => {
    return (
        <div className="flex gap-sm" style={{ overflowX: 'auto', paddingBottom: '4px', maxWidth: '100%' }}>
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        backgroundColor: activeCategory === cat ? 'var(--primary-color)' : 'transparent',
                        color: activeCategory === cat ? 'var(--text-inverse)' : 'var(--text-secondary)',
                        border: activeCategory === cat ? 'none' : '1px solid var(--surface-hover)',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default ProgramFilters;
