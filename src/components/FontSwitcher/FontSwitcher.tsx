function FontSwitcher() {
  return (
    <>
      <label htmlFor='location' className='sr-only'>
        Location
      </label>
      <select
        id='location'
        name='location'
        className='font-serif border-0 text-primary-foreground bg-primary focus:ring-0 focus:outline-primary-accent'
        defaultValue='Sans Serif'
      >
        <option>Sans Serif</option>
        <option>Serif</option>
        <option>Mono</option>
      </select>
    </>
  );
}

export default FontSwitcher;
