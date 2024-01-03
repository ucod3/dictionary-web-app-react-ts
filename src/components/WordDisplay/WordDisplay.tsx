import { useId } from 'react';

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
  return (
    <section className='p-4'>
      <h2 className='mb-4 text-2xl font-bold'>{result.word}</h2>
      {firstPhonetic && (
        <article className='mb-4'>
          <p className='text-lg'>{firstPhonetic.text}</p>
          <audio controls className='mt-2'>
            <source src={firstPhonetic.audio} type='audio/mpeg' />
            <track kind='captions' src='captions.vtt' srcLang='en' />
            Your browser does not support the audio element.
          </audio>
        </article>
      )}

      <h2 className='mb-2 text-2xl font-bold'>Meaning</h2>
      {result.meanings.map((meaning, meaningIndex) => {
        const uniqueMeaningId = `${id}-meaning-${meaningIndex}`;
        return (
          <article key={uniqueMeaningId} className='mb-4'>
            <h3 className='mb-2 text-xl font-bold'>{meaning.partOfSpeech}</h3>
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
          </article>
        );
      })}
    </section>
  );
}

export default WordDisplay;
