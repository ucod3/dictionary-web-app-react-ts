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
  return (
    <section className='p-4'>
      <h2 className='mb-4 text-2xl font-bold'>{result.word}</h2>
      {result.phonetics.map((phonetic, index) => {
        const uniquePhoneticId = `${id}-phonetic-${index}`;
        return (
          <article key={uniquePhoneticId} className='mb-4'>
            <p className='text-lg'>{phonetic.text}</p>
            {phonetic.audio && (
              <audio controls className='mt-2'>
                <source src={phonetic.audio} type='audio/mpeg' />
                <track kind='captions' src='captions.vtt' srcLang='en' />
                Your browser does not support the audio element.
              </audio>
            )}
          </article>
        );
      })}
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
                  {definition.synonyms && (
                    <p className='mt-2'>
                      <span className='font-bold'>Synonyms: </span>
                      {definition.synonyms.join(', ')}
                    </p>
                  )}
                </article>
              );
            })}
          </article>
        );
      })}
    </section>
  );
}

export default WordDisplay;
