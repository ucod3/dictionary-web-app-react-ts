import { useEffect, useId, useState } from 'react';
import useFont from '../../hooks/useFont';

type Phonetic = {
  text: string;
  audio: string;
};

type Definition = {
  definition: string;
  synonyms: string[];
  example: string;
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
};

type WordResult = {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string;
};

type WordDisplayProps = {
  result: WordResult | null;
  setSearchWord: (word: string) => void;
  wordNotFound: boolean;
};

function WordDisplay({
  result,
  setSearchWord,
  wordNotFound,
}: WordDisplayProps) {
  const id = useId();
  const validPhonetics = result.phonetics.filter(
    (phonetic) => phonetic.text && phonetic.audio,
  );

  const [hover, setHover] = useState(false);

  const { font } = useFont();

  const [isSerif, setIsSerif] = useState(false);
  const [isMono, setIsMono] = useState(false);

  useEffect(() => {
    if (font === 'sans') {
      setIsSerif(true);
      setIsMono(false);
    }
    if (font === 'serif') {
      setIsSerif(false);
      setIsMono(false);
    }
    if (font === 'mono') {
      setIsMono(true);
      setIsSerif(false);
    }
  }, [font]);

  if (!result) {
    return null;
  }

  const firstPhonetic = validPhonetics[0];
  function playAudio() {
    const audio = new Audio(firstPhonetic.audio);
    audio.play();
  }

  if (wordNotFound) {
    return (
      <article className='flex flex-col my-8 text-center  md:my-28 w-full max-w-[736px] mx-auto'>
        <h2 className='my-6 font-bold text-md md:text-lg text-primary-foreground'>
          No Definitions Found
        </h2>
        <p className='order-last text-base md:text-md text-secondary-foreground '>
          Sorry pal, we couldn&#39;t find definitions for the word you were
          looking for. You can try the search again at later time or head to the
          web instead.
        </p>
        <p className='order-first text-2xl'>😕</p>
      </article>
    );
  }

  return wordNotFound ? (
    <div className='text-error'>No Definitions Found</div>
  ) : (
    <article>
      <section
        className={`flex items-center justify-between ${hover ? 'hover' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='flex flex-col gap-2'>
          <h2 className='font-bold text-1xl md:text-2xl '>{result.word}</h2>
          {firstPhonetic && (
            <p className='text-md md:text-xl text-primary-accent'>
              {firstPhonetic.text}
            </p>
          )}
        </div>

        {firstPhonetic && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='75'
            height='75'
            viewBox='0 0 75 75'
            className='w-12 h-12 md:w-[75px] md:h-[75px] text-primary-accent'
            onClick={playAudio}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                playAudio();
              }
            }}
          >
            <g fill='currentColor' fillRule='evenodd'>
              <circle className='circle' cx='37.5' cy='37.5' r='37.5' />
              <path className='path' d='M29 27v21l21-10.5z' />
            </g>
          </svg>
        )}
      </section>
      {result.meanings.map((meaning, meaningIndex) => {
        const uniqueMeaningId = `${id}-meaning-${meaningIndex}`;
        const uniquePartOfSpeechId = `${uniqueMeaningId}-part-of-speech`;
        return (
          <section key={uniquePartOfSpeechId}>
            <div className='flex items-center mb-5 mt-7 md:mt-10 md:mb-6'>
              <h3
                className={`text-md md:text-xl font-bold ${
                  isSerif ? 'italic' : 'normal'
                }`}
              >
                {meaning.partOfSpeech}
              </h3>
              <hr className='flex-grow ml-4 border-secondary-accent' />
            </div>
            <section>
              <h3 className='mb-4 text-base md:mb-7 text-secondary-foreground md:text-lg'>
                Meaning
              </h3>
              <ul
                key={uniqueMeaningId}
                className={`text-base-b md:text-md mx-6 md:mx-9 mt-6 list-disc list-outside marker:text-primary-accent ${
                  meaning.synonyms.length > 0 ? 'mb-6 md:mb-10 lg:mb-16' : ''
                }`}
              >
                {meaning.definitions.map((definition, definitionIndex) => {
                  const uniqueDefinitionId = `${uniqueMeaningId}-definition-${definitionIndex}`;

                  return (
                    <li key={uniqueDefinitionId} className=''>
                      {definition.definition}
                      {definition.example && (
                        <blockquote className='text-quote-foreground my-[13px] '>
                          <p className='before:content-["“"] after:content-["”"]'>
                            {definition.example}
                          </p>
                        </blockquote>
                      )}
                    </li>
                  );
                })}
              </ul>
              {meaning.synonyms.length > 0 && (
                <section className='flex gap-6 mb-2 text-base md:text-lg'>
                  <h4 className='mb-2 text-secondary-foreground'>Synonyms</h4>
                  <ul className='flex flex-wrap gap-2 list-disc list-inside '>
                    {meaning.synonyms
                      // .slice(0, 3)
                      .map((synonym, synonymIndex) => {
                        const uniqueSynonymId = `${uniqueMeaningId}-synonym-${synonymIndex}`;
                        return (
                          <li
                            key={uniqueSynonymId}
                            className='mb-1 font-bold list-none text-primary-accent after:content-[","] last:after:content-[""]'
                          >
                            <button
                              type='button'
                              onClick={() => setSearchWord(synonym)}
                            >
                              {synonym}
                            </button>
                          </li>
                        );
                      })}
                  </ul>
                </section>
              )}
            </section>
          </section>
        );
      })}
      <footer className='mt-8 mb-12'>
        <hr className='flex-grow pb-6 md:pb-5 border-secondary-accent' />
        <section className='flex items-end gap-2 md:items-center'>
          <dl
            className={`gap-6 text-sm ${!isMono ? 'underline' : 'no-underline'}
            md:flex underline-offset-4 text-secondary-foreground`}
          >
            <dt className='mb-2 md:mb-0 text-secondary-foreground'>Source</dt>
            <dd className='text-sm text-primary-foreground'>
              <a
                href={`https://en.wiktionary.org/wiki/${result.word}`}
                target='_blank'
                rel='noopener noreferrer'
                title={`Link to ${result.word} on Wiktionary`}
              >
                {result.sourceUrls}{' '}
              </a>
            </dd>
          </dl>
          <a
            href={`https://en.wiktionary.org/wiki/${result.word}`}
            target='_blank'
            rel='noopener noreferrer'
            title={`Link to ${result.word} on Wiktionary`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 14 14'
              aria-hidden='true'
              className='self-center'
            >
              <path
                fill='none'
                stroke='#838383'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5'
              />
            </svg>
            <span className='sr-only'>Link to {result.word} on Wiktionary</span>
          </a>
        </section>
      </footer>
    </article>
  );
}

export default WordDisplay;
