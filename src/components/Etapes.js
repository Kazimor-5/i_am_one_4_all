// ! FILES
import React from 'react';

const Etapes = () => {
  return (
    <section className='section-etapes'>
      <article className='etapes'>
        <h3>Comment participer à l’Opération #JeSuisOne4all en 5 étapes ?</h3>
        <ul>
          <li>
            <p>
              1 - <span className='bold'>Téléchargez</span> la pancarte de
              soutien de l’opération :{' '}
              <span className='bold'>
                #JeSuisOne4all ou créez votre propre pancarte
              </span>{' '}
              (un dessin personnalisé aux couleurs de #One4all ainsi que la
              mention : #JeSuisOne4all sont indispensables)
            </p>
          </li>
          <li>
            <a
              href='./document/pancarteOne4All-A4.pdf'
              download='pancarteOne4All-A4'
              className='btn'
            >
              Télécharger la pancarte
            </a>
          </li>
          <li>
            <p>
              2 - <span className='bold'>Réalisez une photo</span> et/ou{' '}
              <span className='bold'>vidéo</span> originale avec votre pancarte
              en inscrivant votre pseudonyme et votre lieu de résidence.{' '}
              <span className='bold'>Postez-là</span> sur vos réseaux sociaux et{' '}
              <span className='bold'>
                challengez 5 amis à relever le défi en 5 jours
              </span>
              .
            </p>
            <p>
              Vous devenez le capitaine d’une équipe de 5 personnes sur qui vous
              devez compter <span className='bold'>#jecomptesurtoi</span>.
            </p>
            <p>
              Le défi est validé uniquemen lorsque vos{' '}
              <span className='bold'>5 coéquipiers</span> ont eux aussi
              participé au Challenge dans les{' '}
              <span className='bold'>5 jours</span> sur leur profil.
            </p>
            <p>
              <span className='bold'>Veillez</span> à ce que chacun d’eux{' '}
              <span className='bold'>perpétue la chaîne</span> !!!
            </p>
            <p>
              Si l’un des <span className='bold'>5 challengers</span> n’a pas
              participé dans les <span className='bold'>5 jours</span>, le
              capitaine de l’équipe perd le défi 🙁 et s’engage à verser en
              gage, <span className='bold'>1€</span> à l’association{' '}
              <span className='one4all-font'>#One4all</span> par challenger non
              comptabilisé
            </p>
          </li>
          <li>
            <p>
              3 - <span className='bold'>Faites</span> un don et{' '}
              <span className='bold'>invitez</span> vos amis à vous suivre dans
              la chaîne de solidarité Altruiste.
            </p>
          </li>
          <li>
            <a href='#' className='btn'>
              Faire un don
            </a>
          </li>
          <li>
            <p>
              4 - <span className='bold'>Exprimez</span> votre soutien et{' '}
              <span className='bold'>affichez</span> le filtre photo de
              l’opération sur votre profil{' '}
              <span className='bold'>Facebook</span> ou{' '}
              <span className='bold'>Instagram</span>. (lien filtre)
            </p>
          </li>
          <li>
            <p>
              5 - <span className='bold'>Rejoignez</span> la communauté{' '}
              <span className='one4all-font'>#One4All</span> et{' '}
              <span className='bold'>relayez</span> le message de Paix du{' '}
              <span className='bold'>Mouvement Altruiste</span> au plus grand
              nombre.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Etapes;
