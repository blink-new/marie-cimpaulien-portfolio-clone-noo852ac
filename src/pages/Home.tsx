import React from 'react';
import { Leaf, Home, Shield, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-primary text-foreground min-h-screen flex items-center justify-center py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 pr-8">
            <h2 className="font-display text-secondary text-3xl md:text-4xl mb-4">L'avenir avec fierté et Audace</h2>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-2">Menton</h1>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Florent Champion</h1>
            <p className="text-lg mb-8">Votre candidat pour un renouveau municipal. Ensemble, construisons une ville moderne, écologique et solidaire. Menton mérite une politique ambitieuse et citoyenne.</p>
            <button className="bg-secondary text-primary font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity">Découvrir le programme</button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://www.mariecimpaulien.fr/wp-content/uploads/2023/12/Florent-Champion-Menton-scaled.jpg" alt="Florent Champion" className="w-full max-w-sm rounded-lg shadow-lg"/>
          </div>
        </div>
      </section>

      {/* Four Engagements Section */}
      <section className="bg-background text-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-12">Quatre engagements pour Menton</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Engagement Card 1: Écologie urbaine */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-secondary text-4xl mb-4 flex justify-center"><Leaf size={40} /></div>
              <h3 className="font-serif text-xl font-semibold mb-2">Écologie urbaine</h3>
              <p className="text-sm">Espaces verts et mobilité durable</p>
            </div>

            {/* Engagement Card 2: Logement accessible */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-secondary text-4xl mb-4 flex justify-center"><Home size={40} /></div>
              <h3 className="font-serif text-xl font-semibold mb-2">Logement accessible</h3>
              <p className="text-sm">Du logement pour tous les Mentonnais</p>
            </div>

            {/* Engagement Card 3: Sécurité citoyenne */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-secondary text-4xl mb-4 flex justify-center"><Shield size={40} /></div>
              <h3 className="font-serif text-xl font-semibold mb-2">Sécurité citoyenne</h3>
              <p className="text-sm">Une ville sûre et apaisée</p>
            </div>

            {/* Engagement Card 4: Jeunesse active */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-secondary text-4xl mb-4 flex justify-center"><Users size={40} /></div>
              <h3 className="font-serif text-xl font-semibold mb-2">Jeunesse active</h3>
              <p className="text-sm">Accompagner nos jeunes vers l'avenir</p>
            </div>
          </div>
           <button className="mt-8 bg-primary text-secondary font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity">Découvrir tous nos engagements</button>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-primary text-foreground py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
           <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 pr-8">
             <h2 className="font-serif text-4xl font-bold mb-6">Une ville moderne et humaine</h2>
             <p className="text-lg mb-4">Menton a tous les atouts pour devenir une référence sur la Côte d'Azur: patrimoine exceptionnel, situation géographique privilégiée, richesse culturelle. Il nous faut maintenant une vision politique à la hauteur de ces atouts.</p>
             <ul className="list-disc list-inside text-lg mb-6">
               <li>Développement durable et écologie urbaine</li>
               <li>Participation citoyenne et démocratie locale</li>
               <li>Innovation et modernisation des services</li>
             </ul>
             <button className="bg-secondary text-primary font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity">En savoir plus sur notre projet</button>
           </div>
           <div className="md:w-1/2 flex justify-center">
             <div className="bg-white text-primary p-8 rounded-lg shadow-md italic border-l-4 border-secondary">
               <p className="text-xl mb-4">"Menton mérite une politique ambitieuse qui concilie développement économique, qualité de vie et respect de l'environnement."</p>
               <p className="text-right font-semibold">Florent Champion</p>
             </div>
           </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="bg-secondary text-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Rejoignez le mouvement</h2>
          <p className="text-lg mb-8">Votre engagement fait la différence. Ensemble, nous pouvons transformer Menton et construire l'avenir que notre ville mérite.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary text-secondary font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity">Rejoindre l'équipe</button>
            <button className="border border-primary text-primary font-bold py-3 px-6 rounded-md hover:bg-primary hover:text-secondary transition-colors">Contact</button>
          </div>
        </div>
      </section>

      {/* Footer */}
       <footer className="bg-primary text-foreground py-8">
         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
           <div className="mb-8 md:mb-0 text-center md:text-left">
             <h3 className="font-serif text-xl font-bold mb-4">Contact</h3>
             <p className="text-sm mb-2">contact@florentchampion.fr</p>
             <p className="text-sm mb-2">06 12 34 56 78</p>
             <p className="text-sm">Permanence: 12 Avenue Félix Faure, 06500 Menton</p>
           </div>
           <div className="mb-8 md:mb-0 text-center md:text-left">
             <h3 className="font-serif text-xl font-bold mb-4">Navigation</h3>
             <ul>
               <li className="mb-2"><a href="#" className="hover:underline">À propos</a></li>
               <li className="mb-2"><a href="#" className="hover:underline">Engagements</a></li>
               <li className="mb-2"><a href="#" className="hover:underline">Actualités</a></li>
               <li><a href="#" className="hover:underline">Contact</a></li>
             </ul>
           </div>
           <div className="text-center md:text-left">
             <h3 className="font-serif text-xl font-bold mb-4">Suivez-nous</h3>
             <ul>
               <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
               <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
               <li><a href="#" className="hover:underline">Instagram</a></li>
             </ul>
           </div>
         </div>
         <div className="mt-8 text-center text-sm">
           <p>2024 Florent Champion - Candidat aux élections municipales de Menton</p>
           <p><a href="#" className="hover:underline">Mentions légales</a></p>
         </div>
       </footer>
    </div>
  );
};

export default Home;