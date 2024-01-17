import useSWR from 'swr';

type UseSearchWordProps = {
  searchWord: string;
  setWordNotFound: (wordNotFound: boolean) => void;
};

function useSearchWord({ searchWord, setWordNotFound }: UseSearchWordProps) {
  const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('No Definitions Found');
    }

    const data = await response.json();
    return data[0];
  };

  const { data, isLoading } = useSWR(
    searchWord ? `${api}${searchWord}` : null,
    fetcher,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
      onError: () => setWordNotFound(true),
    },
  );

  return { data, isLoading };
}

export default useSearchWord;
