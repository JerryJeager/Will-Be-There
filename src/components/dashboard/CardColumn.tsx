import React from 'react';

interface CardColumnProps {
    icon: React.ReactNode;
    title: string | number;
    subtitle: string;
    alignItems: 'start' | 'center' | 'end';
}

export const CardColumn: React.FC<CardColumnProps> = ({icon, title, subtitle, alignItems }) => {
    
    return (
        <div className={`w-full md:w-1/3 flex flex-col items-center justify-center`} style={{ alignItems: `${alignItems}`}}>
            <div className="flex flex-row gap-2 items-center">{icon} {title}</div>
            <small className="text-xs">
                {subtitle}
            </small>
        </div>
    )
};