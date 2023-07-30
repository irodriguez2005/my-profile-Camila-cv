import React from 'react';

export function Header({ name, profession, avatar, address, email, website, phone }) {
  return (
    <div className="#bae6fd text-black p-4 mb-4 flex items-center">
      <img className="rounded w-32 h-31 mr-6" src={avatar} alt="Profile Avatar" />
      <div>
        <h1 className="text-4xl font-bold">{name}</h1>
        <h2 className="text-xl">{profession}</h2>
      </div>
      <div className="ml-auto p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Informacion del Contacto</h2>
        <p><strong>Direccion:</strong> {address}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Sitio Web :</strong> <a href={website} className="text-black-500">{website}</a></p>
        <p><strong>Numero:</strong> {phone}</p>
      </div>
    </div>
  );
}
