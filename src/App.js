import { useState, useEffect } from 'react'
import NavInshort from "./components/NavInshot";
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apiKey from './data/config'
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  const [category, setCategory] = useState('general');
  const [newsResults, setNewsResults] = useState([]);
  const [dataTotal, setDataTotal] = useState();
  const [loadMore, setLoadMore] = useState(20)


  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`);
      setNewsResults(news.data.articles);
      setDataTotal(news.data.totalResults);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    newsApi(); // eslint-disable-next-line
  }, [dataTotal, category, loadMore]);

  return (
    <div className="App">
      <NavInshort setCategory={setCategory} />
      <NewsContent
        newsResults={newsResults}
        dataTotal={dataTotal}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
