export const Typewriter = ({ staticText, dynamicText }) => {
  return (
    <div data-testid='typewriter'>
      <p>{staticText}</p>
      <p>{dynamicText}</p>
    </div>
  );
};
