import { useId, useState } from 'react';

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
  result: WordResult;
};

function WordDisplay({ result }: WordDisplayProps) {
  const id = useId();
  const validPhonetics = result.phonetics.filter(
    (phonetic) => phonetic.text && phonetic.audio,
  );
  const firstPhonetic = validPhonetics[0];
  function playAudio() {
    const audio = new Audio(firstPhonetic.audio);
    audio.play();
  }
  const [hover, setHover] = useState(false);

  return (
    <article>
      <section
        className={`flex items-center justify-between ${hover ? 'hover' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-bold md:text-2xl '>{result.word}</h2>
          {firstPhonetic && (
            <p className='text-base md:text-xl text-primary-accent'>
              {firstPhonetic.text}
            </p>
          )}
        </div>
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
      </section>
      {result.meanings.map((meaning, meaningIndex) => {
        const uniqueMeaningId = `${id}-meaning-${meaningIndex}`;
        const uniquePartOfSpeechId = `${uniqueMeaningId}-part-of-speech`;
        return (
          <section key={uniquePartOfSpeechId}>
            <div className='flex items-center mb-5 mt-7 md:mt-10 md:mb-6'>
              <h3 className='text-xl font-bold'>{meaning.partOfSpeech}</h3>
              <hr className='flex-grow ml-4 border-secondary-accent' />
            </div>

            <h3 className='mb-2 font-bold text-l'>Meaning</h3>
            <ul
              key={uniqueMeaningId}
              className={`mx-6 md:mx-9 mt-6 list-disc list-outside marker:text-primary-accent ${
                meaning.synonyms.length > 0 ? 'mb-6 md:mb-10 lg:mb-16' : ''
              }`}
            >
              {meaning.definitions.map((definition, definitionIndex) => {
                const uniqueDefinitionId = `${uniqueMeaningId}-definition-${definitionIndex}`;
                return (
                  <li
                    key={uniqueDefinitionId}
                    className='mb-[13px] text-base-b md:text-md '
                  >
                    {definition.definition}
                    {definition.example && (
                      <blockquote className='text-base-b md:text-md  text-quote-foreground my-[13px] before:content-["“"] after:content-["”"]'>
                        {definition.example}
                      </blockquote>
                    )}
                  </li>
                );
              })}
            </ul>

            {meaning.synonyms.length > 0 && (
              <section className='mb-2'>
                <h4 className='mb-2 text-lg font-bold'>Synonyms</h4>
                <ul className='list-disc list-inside'>
                  {meaning.synonyms.slice(0, 3).map((synonym, synonymIndex) => {
                    const uniqueSynonymId = `${uniqueMeaningId}-synonym-${synonymIndex}`;
                    return (
                      <li key={uniqueSynonymId} className='mb-1 list-none'>
                        {synonym}
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}
          </section>
        );
      })}
      <footer className='mt-8'>
        <hr className='flex-grow border-secondary-accent' />
        <p>Source: {result.sourceUrls} </p>
      </footer>
    </article>
  );
}

export default WordDisplay;
