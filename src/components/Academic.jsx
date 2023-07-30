import React from 'react';

export function Academic({ academic }) {
  return (
    <div className="bg-green-200 rounded-lg shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-1">Antecedentes Academicos</h2>
      {academic.map((item, index) => (
        <div key={index} className="mb-2">
          <p><strong>Grado:</strong> {item.degree}</p>
          <p><strong>Descripcion:</strong> {item.description}</p>
          <p><strong>Inicio:</strong> {item.startDate}</p>
          <p><strong>Finalizacion:</strong> {item.endDate}</p>
          <p><strong>Institucion:</strong> {item.institution}</p>
        </div>
      ))}
    </div>
  );
};