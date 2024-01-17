type NotFoundProps = {
  wordNotFound: boolean;
};

function NotFound({ wordNotFound }: NotFoundProps) {
  if (!wordNotFound) {
    return null;
  }
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

export default NotFound;
