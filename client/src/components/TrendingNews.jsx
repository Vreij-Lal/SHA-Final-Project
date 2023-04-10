import "../styles/TrendingNews.scss";
function TrendingNews(props) {
  return (
    <section className="trending-news-container">

      <section className="news">

        <header>
          <h1>{props.news.title}</h1>
        </header>
    

        <div className="news-container-img">
          <img src={props.news.image_url} />
        </div>

      </section>


    </section>

  );
}

export default TrendingNews;
