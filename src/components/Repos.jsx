import React from "react";

const FetchRepo = ({ repos, loading }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  return (<div>
    Hello Everyone
  </div>);
};

export default FetchRepo;
