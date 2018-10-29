import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleModal } from '../../store/actions/auth';

// Components
import Header from '../../components/compounds/Header';
import Button from '../../components/atoms/Button';
import AuthModal from '../../components/compounds/AuthModal';

// Statics
import style from './style.css';

const Landing = (props) => {
  const { toggle } = props;
  return (
    <div className={style.landing}>
      <AuthModal />
      <Header />
      <div className={style.hero}>
        <h2>Harness the power in kindness</h2>
        <p>We will help you get from where you are to where you need to be.</p>
      </div>
      <Button className={style.btn} onClick={() => toggle(false)}>
        FIND A RIDE
      </Button>
    </div>
  );
};

AuthModal.propTypes = {
  toggle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggle: curState => dispatch(toggleModal(curState)),
});

export default connect(null, mapDispatchToProps)(Landing);
