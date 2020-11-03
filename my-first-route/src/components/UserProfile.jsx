import React from 'react';

const UserProfile = (props) => {
  const params = props.match.params;
  return (
    <div>
      <h2>
        {params.githubLogin} Github Profile
      </h2>
    </div>
  );
};

export default UserProfile;