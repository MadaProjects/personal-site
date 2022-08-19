const React = require('react');

exports.onClientEntry = () => {
  window.addEventListener('load', () => {
    document.body.removeAttribute('style');
    document.body.className = document.body.className.replace(
      /\bno-js\b/,
      ''
    );
  });
};
