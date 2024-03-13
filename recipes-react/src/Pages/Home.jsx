import Card from "../components/Card/Card";
import Image from "../components/Image/Image";
// import ButtonView from "../components/Button/ButtonView";
import { Link } from "react-router-dom";

import { recipes } from "../data";
import style from "../App.module.css";

const Home = () => {
  const list = recipes.map((recipe) => (
    <Card key={recipe.id}>
      <div>
        <Image
          src={`/img/${recipe.image}`}
          alt={recipe.image}
          size="100%"></Image>
        <div className={style.text}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
        </div>
      </div>
      <Link to={`/recipes/${recipe.id}`} className={style.button}>
        View Recipe
      </Link>
    </Card>
  ));

  return (
    <div className={style.app}>
      <h1>List Recipes</h1>
      <div className={style.card}>{list}</div>
    </div>
  );
};

export default Home;
