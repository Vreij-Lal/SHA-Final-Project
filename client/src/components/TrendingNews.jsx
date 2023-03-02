import "../styles/TrendingNews.scss";
function TrendingNews(props) {
  return (
    <div className="news">
      <h1>{props.news.title}</h1>
      <div className="news-container-img">
        <img src={props.news.image_url} />
      </div>
    </div>
  );
}

export default TrendingNews;
