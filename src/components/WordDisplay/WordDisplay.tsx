import { useId, useState } from 'react';

type Phonetic = {
  text: string;
  audio: string;
};

type Definition = {
  definition: string;
  synonyms: string[];
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
    <section>
      <article
        className={`flex items-center justify-between ${hover ? 'hover' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h2 className='text-xl font-bold md:text-2xl '>{result.word}</h2>
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
      </article>

      {firstPhonetic && (
        <p className='text-md md:text-xl text-primary-accent'>
          {firstPhonetic.text}
        </p>
      )}
      {result.meanings.map((meaning, meaningIndex) => {
        const uniqueMeaningId = `${id}-meaning-${meaningIndex}`;
        return (
          <article key={uniqueMeaningId} className='mb-4'>
            <h3 className='mb-2 font-bold text-1xl'>{meaning.partOfSpeech}</h3>
            <h3 className='mb-2 font-bold text-l'>Meaning</h3>
            {meaning.definitions.map((definition, definitionIndex) => {
              const uniqueDefinitionId = `${uniqueMeaningId}-definition-${definitionIndex}`;
              return (
                <article key={uniqueDefinitionId} className='mb-2'>
                  <p className='text-lg'>{definition.definition}</p>
                </article>
              );
            })}

            {meaning.synonyms.length > 0 && (
              <article className='mb-2'>
                <h4 className='mb-2 text-lg font-bold'>Synonyms</h4>
                <ul className='list-disc list-inside'>
                  {meaning.synonyms.map((synonym, synonymIndex) => {
                    const uniqueSynonymId = `${uniqueMeaningId}-synonym-${synonymIndex}`;
                    return (
                      <li key={uniqueSynonymId} className='mb-1'>
                        {synonym}
                      </li>
                    );
                  })}
                </ul>
              </article>
            )}
            <p>Source: {result.sourceUrls} </p>
          </article>
        );
      })}
    </section>
  );
}

export default WordDisplay;
