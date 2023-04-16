import "../styles/TrendingNews.scss";
function TrendingNews(props) {
  return (
    <section className="trending-news-container">

      <section className="news">

        <img src={props.news.urlToImage} alt="" />


          <h4><a href={props.news.url}>{props.news.title}</a></h4>


      </section>


    </section>

  );
}

export default TrendingNews;
