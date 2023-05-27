import React from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

const LogoText = ({ children }: { children: ReactNode }) => {
  return <span className={'text-primary font-extrabold text-[16vw]'}>{children}</span>;
};

function scroll2() {
  const { scrollYProgress } = useScroll({ offset: ['0vh', '100vh'] });
  const ref = useRef(null);
  const isInView = useInView(ref);
  const x1 = useTransform(scrollYProgress, [0, 0.75], ['15%', '80%']);
  const x2 = useTransform(scrollYProgress, [0, 0.75], ['10%', '0%']);
  const opacity = useTransform(scrollYProgress, [0.75, 1], ['100%', '0%']);

  return (
    <main>
      <img src="https://source.unsplash.com/random/?europe" />
      <div className="container" style={{ display: 'flex' }}>
        <div
          className="left-content"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '40vw',
            background: 'pink'
          }}
        >
          <h1>HELLO</h1>
        </div>
        <div
          className="right-content"
          style={{ flex: 1, height: '100vh', overflowY: 'auto' }}
        >
          <img src="https://source.unsplash.com/random/?london" />
          Sint occaecat id consequat nulla in dolor nisi aliquip aute aliqua
          reprehenderit. Ad minim aliquip qui labore sint sunt ea exercitation est
          consectetur esse. Dolore pariatur enim minim voluptate enim fugiat ex ad qui et.
          Irure Lorem laborum quis proident nulla elit. Cillum officia nulla do dolore est
          consequat. Eu amet magna ex occaecat voluptate laborum mollit reprehenderit
          deserunt. Sunt esse ea velit ex pariatur ipsum. Aute ea quis cupidatat
          consectetur sit. Cillum exercitation laborum consectetur aliquip ut anim mollit
          voluptate dolor do fugiat do pariatur sint. Reprehenderit ut reprehenderit
          ullamco ipsum sit cupidatat tempor quis. Lorem in id eiusmod cupidatat occaecat.
          Exercitation ut pariatur officia do aliqua qui commodo adipisicing esse. Non
          officia laborum esse laboris consectetur cillum ad mollit cupidatat proident do
          in ex aliqua. Esse sunt est ipsum aute non commodo nulla ullamco nulla. Ad
          deserunt enim irure ullamco anim cupidatat Lorem. Duis ad aute aute eu veniam
          esse deserunt in consequat elit deserunt excepteur cupidatat. Ipsum occaecat id
          consequat irure magna tempor consectetur reprehenderit. Anim anim sint sint
          nulla laborum velit aute voluptate adipisicing ullamco. Aliqua nostrud dolore
          qui cupidatat ad quis aliquip pariatur ipsum. Esse aliquip proident excepteur
          velit incididunt. Sint commodo est adipisicing ut. Commodo sit culpa nisi qui
          ullamco enim et ea duis. Cillum qui ad eu exercitation officia consequat
          consectetur. Aliquip culpa adipisicing ad pariatur cillum consectetur non nisi
          anim aliqua aute irure cupidatat. Deserunt laborum amet officia tempor et. Ex
          aute culpa nisi et proident minim esse labore amet aliquip. In labore duis
          nostrud nulla incididunt proident sunt sit. Tempor Lorem velit quis nostrud et
          Lorem eu aute esse est officia deserunt duis. Consequat excepteur deserunt
          cupidatat cupidatat nostrud ipsum proident amet nisi fugiat cillum amet magna
          tempor. Nulla excepteur et mollit eu magna incididunt elit et pariatur irure ea
          sint do et. Dolore nulla in velit aute ad ad in aute. Excepteur reprehenderit
          consectetur eiusmod eu anim eu proident est laborum ex culpa deserunt do dolore.
          Ullamco veniam aliqua duis dolore deserunt esse aliqua minim excepteur commodo
          elit occaecat culpa ad. Anim sit anim irure enim mollit esse irure sit sit
          commodo qui. Ullamco eiusmod ea enim tempor labore consequat est ipsum cillum
          fugiat eiusmod commodo. Enim nisi pariatur amet dolore officia labore culpa.
          Ullamco dolore laborum laboris voluptate velit consequat consectetur cillum
          cillum reprehenderit nulla aliquip Lorem. Labore non consectetur minim occaecat
          sit nulla nulla elit laboris eiusmod veniam excepteur dolore. Deserunt ullamco
          magna eu occaecat elit ipsum. Exercitation commodo deserunt sint anim laboris
          sint ullamco nostrud anim. Ullamco culpa commodo adipisicing ut exercitation do
          voluptate ad dolore est irure excepteur aliqua adipisicing. Ex dolore aute nulla
          mollit anim occaecat cupidatat. Fugiat enim exercitation ut esse adipisicing non
          officia voluptate. Officia laborum voluptate irure sunt Lorem ea proident qui do
          pariatur. Consequat sint enim fugiat reprehenderit laboris cupidatat eiusmod
          eiusmod incididunt excepteur quis commodo. Est qui sint ut adipisicing
          incididunt. Ad consequat eiusmod aliquip elit.
        </div>
      </div>
      <img src="https://source.unsplash.com/random/?asia" />
    </main>
  );
}

export default scroll2;
