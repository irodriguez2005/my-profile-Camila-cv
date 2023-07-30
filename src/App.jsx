import React from 'react';

import img from './components/img/Camila_copia.jpg'; // Ruta de la imagen estática

import {Header} from './components/Header';
import {Profile} from './components/Profile';
import {Academic} from './components/Academic';
import {Experience} from './components/Experience';
import {Skills} from './components/Skills';
import {Interests} from './components/Interests';
import {Languages} from './components/Languages';

function App() {
  const profileData = {
      name: "Ingrid Camila Rodriguez Hormaza ",
      profession: "FrontEnd Developer",
      address: "Armenia, Colombia.",
      email: "CamilaR29j04@gmail.com",
      website: "",
      phone: "3243792680",
      avatar: img,
      profile: "Persona con capacidad de resolver problemas, con habilidad de un aprendizaje de manera rapida,  enérgica, analítica, amigable, imaginativa, honesta y capaz de realizar las tareas que se me asignan, con mentalidad emprendedora, interesada en aprender cosas nuevas. Siempre estoy buscando nuevos retos para mejorar mi desempeño ",
    academic: [
      {
        degree: "Tecnologo en Analisis y Desarrollo de Software.",
        description: "Mi estudio incluye Desarrollo de Software, Bases de Datos y Diseño de Interfaces.",
        institution: "Sena",
        startDate: "Julio 2021",
        endDate: "Presente"
      }
    ],
    experience: [
      {
        company: "Sena",
        endDate: "Presente",
        jobDescription: "Colaboración con el equipo de desarrollo para mejorar la eficiencia y la calidad del código.",
        jobTitle: "Frontend",
        startDate: "Julio 2021"
      }
    ],
    skills: [
      {
        name: "React",
        percentage: "50%"
      }
    ],
    interest: ["React", "frontend"],
    languages: [
      {
        name: "Spanish",
        percentage: "100%"
      },
      {
        name: "English",
        percentage: "55%"
      }
    ]
  };


  return (
    <div className="container mx-auto p-4 bg-blue-200">
      <Header
        name={profileData.name}
        profession={profileData.profession}
        avatar={profileData.avatar} 
        address={profileData.address}
        email={profileData.email}
        website={profileData.website}
        phone={profileData.phone}
      />  
      <Profile profile={profileData.profile} />
      <Experience experience={profileData.experience} />

      <div className="flex w-full">
        <div className="w-1/2 pr-4">
          <Academic academic={profileData.academic} />
          <Interests interests={profileData.interest} />
        </div>
        
        <div className="w-1/2 pr-4">
          <Languages languages={profileData.languages} />
          <Skills skills={profileData.skills} />
        </div>
      </div>

    </div>
  );
}

export default App;