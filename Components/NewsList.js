import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ category }) => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_GNEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?token=${apiKey}&topic=${category}`);
        const data = await response.json();

        if (response.ok) {
          setNewsItems(data.articles);
        } else {
          setError('Error fetching news');
        }
      } catch (error) {
        setError('Error fetching news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey, category]);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="news-list">
      {newsItems.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
