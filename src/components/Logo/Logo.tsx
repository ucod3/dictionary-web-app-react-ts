function Logo() {
  return (
    <a
      href='https://ucod3.github.io/dictionary-web-app-react-ts/'
      aria-label='Home'
      className='focus-visible:outline-none  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-accent data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-primary-accent cursor-pointer'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='34'
        height='38'
        viewBox='0 0 34 38'
        className='h-8 transition-colors duration-300 w-7 md:h-9 md:w-8 hover:text-primary-accent text-[#838383] '
      >
        <g
          fill='none'
          fillRule='evenodd'
          stroke='currentColor'
          strokeLinecap='round'
          strokeWidth='1.5'
        >
          <path d='M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28' />
          <path strokeLinejoin='round' d='M5 37a4 4 0 1 1 0-8' />
          <path d='M11 9h12' />
        </g>
      </svg>
    </a>
  );
}

export default Logo;
