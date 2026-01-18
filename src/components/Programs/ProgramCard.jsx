import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, ArrowRight } from 'lucide-react';

const ProgramCard = ({ program }) => {
    return (
        <div className="program-card" style={{
            backgroundColor: 'var(--surface-color)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid transparent'
        }}>
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: `url(${program.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.8)',
                    transition: 'transform 0.5s ease'
                }} className="card-image-bg" />
                <div style={{
                    position: 'absolute',
                    top: 10, right: 10,
                    background: 'rgba(0,0,0,0.7)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--primary-color)'
                }}>
                    {program.category}
                </div>
            </div>

            <div style={{ padding: 'var(--spacing-md)' }}>
                <div className="flex justify-between items-start">
                    <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>{program.title}</h3>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-color)' }}>{program.price}</span>
                </div>

                <div className="flex gap-md" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }}>
                    <div className="flex items-center gap-sm">
                        <Clock size={16} />
                        <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-sm">
                        <BarChart size={16} />
                        <span>{program.level}</span>
                    </div>
                </div>

                <Link to={`/program/${program.id}`} className="btn btn-primary" style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    View Details <ArrowRight size={18} />
                </Link>
            </div>
            <style>{`
        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-glow);
          border-color: var(--primary-color);
        }
        .program-card:hover .card-image-bg {
          transform: scale(1.05);
        }
      `}</style>
        </div>
    );
};

export default ProgramCard;
