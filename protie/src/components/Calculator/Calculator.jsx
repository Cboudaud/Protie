/* eslint-disable react/no-unescaped-entities */
import './styles.scss'
import salad from '../../assets/healthy-food-salad-svgrepo-com.svg'
import veggies from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { typeVeggie, typeAmount, setProteinResult, setResultText } from '../../actions/calculator';

export default function Calculator() {
  const { veggieInput, amountInput, resultText } = useSelector((state) => state)
  const dispatch = useDispatch();

  const calculateProtein = () => {
    // 1. Trouver l'objet correspondant au légume sélectionné
    const selectedVeggie = veggies.find(veggie => veggie.name === veggieInput);

    if (selectedVeggie) {
      // 2. Extraire le nombre de grammes de protéines
      const proteinPer100g = selectedVeggie.protein;

      // 3. Multiplier par la quantité entrée
      const totalProtein = (proteinPer100g * amountInput) / 100;

     // 4. Mise à jour de l'affichage dans la balise <p> et le state Redux
     dispatch(setResultText(`Vous avez consommé ${totalProtein.toFixed(2)} grammes de protéines !`));
     dispatch(setProteinResult(totalProtein));

    }
  };

  return (
    <div className="input-group">
        <datalist id="veggies">{veggies.map((veggie) => <option key={veggie.id}>{veggie.name} </option>)}</datalist>
        <label htmlFor="veggies">Choisissez l'aliment consommé : </label>
        <input
          className='input-group_food'
          type="text"
          placeholder="L'aliment"
          list='veggies'
          id='veggie' name='veggie'
          size='100'
          autoComplete='off'
          value={veggieInput}
          onChange={(e)=> dispatch(typeVeggie(e.target.value))}
        />

      <div className='input-group_quantity'>
        <input 
          className='input-group_quantity_number' 
          placeholder='La quantité'
          value={amountInput}
          onChange={(e) => dispatch(typeAmount(e.target.value))}
          />
          <span>/grs</span>
      </div>
      <div>
      <button className='calculatorButton' type="button" onClick={calculateProtein}> Je calcule !</button>
      </div>
      <div>
      {resultText && <p id="proteinResult">{resultText}</p>}
      </div>
      <div>
          <img src={salad} className="saladLogo" alt="salad" />
      </div>
  </div>
  )
}
