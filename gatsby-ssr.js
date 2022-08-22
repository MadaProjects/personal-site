const React = require('react');
// Adds a class name to the body element

exports.onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' });
  setBodyAttributes({
    className: 'no-js',
    style: {
      visibility: 'hidden',
      opacity: '0',
    },
  });
};
