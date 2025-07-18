import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'


const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  //use of useImperativeHandle hook
  useImperativeHandle(refs, () => {
    return {
        //now we can access toggleVisibility from the parent component
        toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className='togglableContent'>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
      <br/>
      <br/>
    </div>
  )
});
//component name is used for debugging purposes
Togglable.displayName = 'Togglable'
Togglable.propTypes ={
    buttonLabel: PropTypes.string.isRequired,
}

export default Togglable