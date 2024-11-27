"use client";
import React, { useState } from 'react'
import ButtonAdd from '@/components/ui/buttonadd'
import ButtonFilter from '@/components/ui/buttonfilter'
import AddProjectModal from '@/components/tools/modalprojectadd';
function headprojet() {
const [isModalOpen, setModalOpen] = useState(false);

return (
<div>
  <div className="relative w-full h-auto bg-pink-100 px-16 py-14">

    <div className="flex items-center justify-arround max-w-7xl mb-10 pt-4 pb-0">

      <div className="flex-1">
        <h1 className="text-5xl w-[650px]  font-bold text-red-600">
          Mes projets <br />
        </h1>
        <h1 className='text-lg mt-3 text-red-600'>
          Consulter la liste de vos projets actifs
        </h1>
      </div>
    </div>

  </div>
  <div className="flex justify-between items-center mb-4 px-16 py-16">
    <h2 className="text-[#BEB8B8] text-lg font-bold"> Toutes les Projets</h2>
    <div className="flex justify-between ">
      

    <button className="text-white bg-[#DA1A31] rounded-lg text-xl mr-5 px-4 py-2 font-bold" onClick={() => setModalOpen(true)}>+ Ajouter Projet</button>

    {/* <ButtonAdd content="+ Ajouter Projet" onClick={() => setModalOpen(true)}/> */}

    <AddProjectModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>

    <ButtonFilter content="Filtrer" />
    </div>
  </div>
</div>
)
}

export default headprojet;


/*

const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Ajouter un projet
      </button>

      <AddProjectModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};


 */