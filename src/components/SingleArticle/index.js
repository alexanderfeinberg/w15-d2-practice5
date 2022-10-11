import "./SingleArticle.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleArticle = () => {
  let { id: articleId } = useParams();
  let article = useSelector((state) => {
    let articles = state["articleState"]["entries"];

    let [selectedArticle] = articles.filter((info) => info.id === articleId);
    return selectedArticle;
  });
  console.log(article);
  return (
    <div className="singleArticle">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt="home" />
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
