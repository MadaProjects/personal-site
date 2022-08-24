exports.onClientEntry = () => {
  window.addEventListener('load', () => {
    document.body.removeAttribute('style');
  });
};
