import PropTypes from 'prop-types';
function propsdir(props) {
//Button logic for dynamic props using easy

    const handleclick = () => {    
  props.addclickaction()
}
    return( 
    <div>
    <div>{props.text}</div>
    <div>{props.name}</div> 
    <button onClick={handleclick}>Update</button>
    </div>
)
}
//This is how we are already define my choice
propsdir.propTypes = {
    text:PropTypes.func.isRequired,
    name:PropTypes.string.isRequired,
    address:PropTypes.shape({
        zipcode:PropTypes.string.isRequired,
        city:PropTypes.string.isRequired,
    }).isRequired,
    addclickaction:PropTypes.func.isRequired,
}

export default propsdir;