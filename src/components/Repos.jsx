import React from "react";

const Repos = (props) => {
  const { repos } = props;
  // console.log("repos is: ", repos);

  const reposList =
    repos.length !== 0 ? (
      repos.map((repo) => 
        <ul key={repo.id} className="w-80 p-4 text-gray-500 m-2 bg-blue-800">
        <li className="truncate">Repo Name: <a href={repo.html_url} className="hover:text-gray-300">{repo.name}</a></li>
        <li className="truncate">Language: {repo.language}</li>
        <li className="truncate">Visibility: {repo.visibility}</li>
        <li className="truncate">ID: {repo.id}</li>
        </ul>
      )
    ) : (
      <li>No Repos Found</li>
    );

  return (
      <div className="flex justify-evenly flex-wrap p-4">{reposList}</div>

  );
};

export default Repos;
