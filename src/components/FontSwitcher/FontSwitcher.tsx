function FontSwitcher() {
  return (
    <div>
      <label htmlFor='location' className='sr-only'>
        Location
      </label>
      <select
        id='location'
        name='location'
        className='border-0 text-primary-foreground-700 bg-primary'
        defaultValue='Sans Serif'
      >
        <option>Sans Serif</option>
        <option>Serif</option>
        <option>Mono</option>
      </select>
    </div>
  );
}

export default FontSwitcher;
