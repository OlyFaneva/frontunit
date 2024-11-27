import React from 'react';
import CardProjet from '@/components/ui/cardprojet';

const projectlistes: React.FC = () => {
// Tableau contenant les données des 12 projets
const projects = [
{ title: 'Bar', details: 'Un bar pour les peuples du bloc A de Townsville' },
{ title: 'Bar', details: 'Un bar pour les peuples du bloc A de Townsville' },
{ title: 'Bar', details: 'Un bar pour lespeuples du bloc A de Townsville' },
{ title: 'Bar', details: 'Un bar pour les peuples du bloc A de Townsville' },
{ title:'Bar', details: 'Un bar pour les peuples du bloc A de Townsville' },
{ title: 'Bar', details: 'Un bar pour les peuples dubloc A de Townsville' },
{ title: 'Bar', details: 'Un bar pour les peuples du bloc A de Townsville' },
{ title: 'Bar',details: 'Un bar pour les peuples du bloc A de Townsville' },
{ title: 'Bar', details: 'Un bar pour les peuples du bloc Ade Townsville' },
{ title: 'Bar', details: 'Un bar pour les peuples du bloc A de Townsville' },
{ title: 'Bar', details:'Un bar pour les peuples du bloc A de Townsville' },
{ title: 'Bar', details: 'Un bar pour les peuples du bloc A deTownsville' }, 
];

return (
<div className="px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {projects.map((project, index) => (
    <CardProjet title={project.title} 
        details={project.details} />
    ))}
</div>
);
};

export default projectlistes;