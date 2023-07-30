import React from 'react';

export function Experience({ experience }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Experiencia</h2>
      {experience.map((item, index) => (
        <div key={index} className="mb-2">
          <p><strong>Compañia:</strong> {item.company}</p>
          <p><strong>Titulo Profesional</strong> {item.jobTitle}</p>
          <p><strong>Inicio:</strong> {item.startDate}</p>
          <p><strong>Finalizacion:</strong> {item.endDate}</p>
          <p><strong>Descripcion del Trabajo:</strong> {item.jobDescription}</p>
        </div>
      ))}
    </div>
  );
};