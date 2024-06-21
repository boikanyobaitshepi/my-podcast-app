import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import Loading from '../../loading';

const DetailContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ShowCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 300px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ShowImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const PodcastDetail = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then(res => res.json())
      .then(data => {
        setPodcasts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <DetailContainer>
      {podcasts.map(show => (
        <NavLink to={`/show/${show.id}`}>
        <ShowCard key={show.id}>
          <ShowImage src={show.image} alt={show.title} />
          <div>
            <h3>{show.title}</h3>
          
          </div>
        </ShowCard>
        </NavLink>
      ))}
    </DetailContainer>
  );
};

export default PodcastDetail;
