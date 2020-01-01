import { connect } from 'react-redux'
import Header from '../components/Header'
const mapToProps = state => {
  return {
    themeColor: state.themeColor
  };
};
export default connect(mapToProps)(Header);