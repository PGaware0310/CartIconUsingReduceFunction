
import Card from "../UI/Card";
import MealsItem from "./MealsItem";
const dummy_meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsAvailable = (props) => {
  return (
    <section>
      <Card>
        <ul>
          {dummy_meals.map((meal) => (
            <MealsItem 
            key={meal.id}
             name={meal.name}
             description={meal.description}
             price={meal.price}
             />
            
            ))}
            
        </ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
