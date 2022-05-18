// ! FILES
import React from 'react';

const Etapes = () => {
  return (
    <section className='section-etapes'>
      <article className='etapes'>
        <h3>Comment participer à l'Opération #JeSuisOne4All ?</h3>
        <h4>5 étapes essentielles pour une cause commune !</h4>
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
            <a
              href='../../public/document/pancarteOne4All-A4.pdf'
              target='_blank'
              download='pancarteOne4All-A4'
              className='download'
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
              . Une fois le défi relevé, votre participation vous engage à
              entretenir cette chaîne altruiste ! Vous devenez le capitaine
              d’une équipe de 5 personnes sur qui vous devez compter{' '}
              <span className='bold'>#jecomptesurtoi</span>.
            </p>
            <p>
              Le défi est validé lorsque vos{' '}
              <span className='bold'>5 coéquipiers</span> ont posté leur photo
              ou vidéo dans les <span className='bold'>5 jours</span> sur leur
              profil avec le{' '}
              <span className='bold'>hashtag #JeSuisOne4all</span>.
            </p>
            <p>
              <span className='bold'>Assurez-vous</span> que vos coéquipiers
              vous mentionnent dans leur post. Choisissez donc des amis qui
              aiment les défis collectifs et en qui vous avez confiance pour
              vous suivre !
            </p>
          </li>
          <li>
            <p>
              3 - <span className='bold'>Faites</span> un don et{' '}
              <span className='bold'>invitez</span> vos amis à s’engager dans la
              chaîne de solidarité altruiste. A son tour, chaque personne
              nominée a <span className='bold'>5 jours</span> pour réaliser une
              photo ou une vidéo et la poster sur son profil facebook ou
              instagram. Veillez à ce que chacun d’eux{' '}
              <span className='bold'>perpétue la chaîne</span> !!! Si l’un des 5
              challengers n’a pas participé dans les 5 jours, le capitaine de
              l’équipe perd le défi lancé 🙁 et s’engage à verser en gage,{' '}
              <span className='bold'>1€</span> à l’association{' '}
              <span className='one4all-font'>#One4All</span> par challenger non
              comptabilisé.
            </p>
          </li>
          <li>
            <p>
              4 - <span className='bold'>Exprimez</span> votre soutien et{' '}
              <span className='bold'>affichez</span>
              le filtre photo de l’opération sur votre profil{' '}
              <span className='bold'>Facebook</span> ou{' '}
              <span className='bold'>Instagram</span>. (lien filtre)
            </p>
          </li>
          <li>
            <p>
              5 - <span className='bold'>Votre participation</span> vous a donné
              envie de vous <span className='bold'>engager</span> et faire
              partie de l’Histoire ? <span className='bold'>Rejoignez</span> la
              communauté <span className='one4all-font'>#One4all</span> et{' '}
              <span className='bold'>entrez</span>
              au <span className='bold'>Panthéon* des Héros</span> qui auront
              œuvré en faveur de la Paix.
            </p>
            <p>
              Chaque personne ayant effectué un don d’un montant minimum de 20€,
              pourra, s’il le souhaite, voir son nom figurer au panthéon des
              Héros du Liberty Memorial*.
            </p>
          </li>
        </ul>
        <p className='small'>
          *Pour en savoir plus sur le projet du Liberty Memorial{' '}
          <a href='#'>Cliquez ici</a>.
        </p>
      </article>
    </section>
  );
};

export default Etapes;
