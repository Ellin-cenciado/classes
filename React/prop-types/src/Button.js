import PropTypes from 'prop-types';

export function Button({text, name}) {
  return <button onClick={ function () { 
    console.log('click');
  }}>
    {text} - {name}
  </button>;
}

Button.propTypes = {
  text: PropTypes.string
}
Button.defaultProps ={
  name: 'Some user'
}