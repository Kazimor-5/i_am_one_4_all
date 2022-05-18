//  ! FILES
import React from 'react';

const Challenge = () => {
  return (
    <section className='section-challenge'>
      <article className='challenge'>
        <h3>Vous aimez les challenges ?</h3>
        <p>
          <span className='bold'>
            Devenez les acteurs d’une vaste chaîne mondiale de solidarité
          </span>{' '}
          qui permettra à chacun de participer à l’effort de Paix.
        </p>
        <p>
          Ensemble, gagnons le combat contre la guerre et ses conséquences
          sociales &amp; économiques.
        </p>
        <p className='bold italic'>
          « La coopération altruiste est la clé du problème dans lequel chacun
          de nous est enfermé.»
        </p>
        <div className='img-container'>
          <img src='./assets/don_vebole.png' alt='Don Vebole' className='img' />
        </div>
      </article>
    </section>
  );
};

export default Challenge;
