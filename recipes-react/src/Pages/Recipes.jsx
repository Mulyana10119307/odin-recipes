// Recipes.jsx
import { useParams } from "react-router-dom";
import { recipes } from "../data";
import { Link } from "react-router-dom";
import style from "../App.module.css";

const Recipes = () => {
  // Get the recipe ID from the URL using useParams
  const { id } = useParams();

  // Find the recipe with the corresponding ID
  const recipe = recipes.find((r) => r.id === parseInt(id, 10));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <div>
        <img src={`/img/${recipe.image}`} alt={recipe.image} />
        <h2>Description</h2>
        <p>{recipe.description}</p>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Steps</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <Link to={"/"} className={style.button}>
        Back to Home
      </Link>
    </div>
  );
};

export default Recipes;
