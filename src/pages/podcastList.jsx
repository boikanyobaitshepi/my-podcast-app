import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  margin-left: 250px; /* Adjust based on Sidebar width */
`;

const PodcastItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  React.useEffect(() => {
    fetch('https://podcast-api.netlify.app')
    .then(res => res.json())
    .then(data => setPodcasts(data))
  }, []);
  console.log(podcasts)

  return (
    

    <ListContainer>
      {podcasts.map(podcast => (
        <PodcastItem key={podcast.id}>
          <img src={podcast.image} alt={podcast.title} style={{ height: '50px', marginRight: '16px' }} />
          <div>
            
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
          </div>
        </PodcastItem>
      ))}
    </ListContainer>
  );
};

export default PodcastList;
