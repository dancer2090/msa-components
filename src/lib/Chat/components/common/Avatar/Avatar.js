import React from 'react';
import PropTypes from 'prop-types';
import IconUsers from '../Icons/UsersIcon';
import Style from './styles';

const Avatar = ({ imageUrl, username = '...', size, type = 'user' }) => (
  <Style.Wrapper size={size}>
    {type === 'user' && imageUrl && <Style.Image src={imageUrl} alt={username} />}
    {type === 'user' && !imageUrl && <Style.UserName>{username}</Style.UserName>}
    {type === 'group' && <IconUsers size={32} />}
  </Style.Wrapper>
);

Avatar.defaultProps = {
  size: 'md',
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['user', 'group']),
  username: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default Avatar;
