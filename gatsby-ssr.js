const React = require('react');
// Adds a class name to the body element

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: 'no-js',
    style: {
      visibility: 'hidden',
      opacity: '0',
    },
  });
};
