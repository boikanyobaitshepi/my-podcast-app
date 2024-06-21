import React from 'react';

const Seasons = ({ shows, season }) => {
  const filteredShows = shows.filter((show) => {
    if (!season) {
     
      return true;
    }
    return show.season === season; 
  });

  return (
    <div>
      {filteredShows.map((show) => (
        <div key={show.id}> 
          <h2>{show.name}</h2>
          <p>Season {show.season}</p>
        </div>
      ))}
    </div>
  );
};

export default Seasons;
