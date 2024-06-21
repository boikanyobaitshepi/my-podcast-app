import React, { useState, useEffect } from "react";
import { Link , useParams} from "react-router-dom";
import styled from "styled-components";

const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const PodcastCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const PodcastImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const PodcastTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const Preview = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams()

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
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
    <PreviewContainer key={id}>
      {podcasts.seasons.map((podcast) => (
        <PodcastCard key={podcast.id}>
          <Link to={`/podcast/${podcast.id}`}>
            <PodcastImage src={podcast.image} alt={podcast.title} />
            <PodcastTitle>{podcast.title}</PodcastTitle>
    
          </Link>
        </PodcastCard>
      ))}
    </PreviewContainer>
  );
};

export default Preview;
