import ContactButton from '@/components/ContactButton';
import Header from '@/components/Header';
import Loader from '@/components/Loader';
import MenuManager from '@/components/Menu/MenuManager';
import { SplitText } from 'gsap/dist/SplitText';
import { gsap } from 'gsap/dist/gsap';
import { useEffect, useRef } from 'react';

function Home() {
  const containerRef = useRef();
  const q = gsap.utils.selector(containerRef);
  useEffect(() => {
    gsap.registerPlugin(SplitText);
    const tl = gsap.timeline();
    const split = new SplitText(q('.hero-text'), {
      type: 'lines,chars',
      linesClass: 'lineChildren',
    });
    const splitParent = new SplitText(q('.hero-text'), {
      type: 'lines',
      linesClass: 'lineParent',
    });
    const brandDescription = new SplitText(q('.brand-description'), {
      type: 'lines,chars',
      linesClass: 'lineChildren',
    });
    const brandDescriptionParent = new SplitText(q('.brand-description'), {
      type: 'lines',
      linesClass: 'lineParent',
    });

    tl.to(q('.loader-indicator'), {
      scaleX: 100,
      duration: 3,
      ease: 'power4.in'
    })
      .to(q('.loader-content'), {
        opacity: 0,
        duration: 1
      })
      .to(q('.loader-container'), {
        yPercent: 100,
        duration: 1,
        ease: "split4.in"
      })
      .from(split.lines, {
        autoAlpha: 0,
        yPercent: 100,
        stagger: 0.3,
        rotate: '3deg',
      })
      .from(
        brandDescription.lines,
        {
          autoAlpha: 0,
          xPercent: 100,
          stagger: 0.1,
        },
        '<'
      )
      .from(q('.contact-button'), {
        yPercent: -50,
      });
  }, [q]);
  return (
    <div ref={containerRef} className='relative'>
      <Loader />
      <MenuManager>
        <Header />
        <div className='main-container' id='main-container'>
          <h1 className='hero-text'>
            {' '}
            Bleu <br /> Blanc <br /> Studio
          </h1>
        </div>
        <ContactButton />
      </MenuManager>
    </div>
  );
}

export default Home;
