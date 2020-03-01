import React from 'react';
import PropTypes from 'prop-types';
import ProfilePostsComponent from '../components/ProfilePostsComponent';
import { profilePersonalPosts } from '../../../mocks';


const onPressDetachedLike = () => {};

const onPressOthers = () => {};

const ProfilePostscontainer = ({
  navigation, 
  t, 
}) => {
  const {
    state: {
      params: {
        parms: { index },
      },
    },
  } = navigation;

  return (
    <ProfilePostsComponent 
      t={t}
      initialScrollIndex={index}
      data={profilePersonalPosts}
      onPressDetachedLike={onPressDetachedLike}
      onPressOthers={onPressOthers}
      />
  );
};

ProfilePostscontainer.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({ params: PropTypes.shape({ index: PropTypes.number.isRequired }) }),

    }),
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default ProfilePostscontainer;