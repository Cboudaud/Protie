/* eslint-disable react/no-unescaped-entities */
import './styles.scss';
import salad from '../../assets/healthy-food-salad-svgrepo-com.svg';
import veggies from '../../data';
// import ProteinList from '../ProteinList/ProteinList';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { typeVeggie, typeAmount, setProteinResult, setResultText } from '../../actions/calculator';

export default function Calculator() {
  const { veggieInput, amountInput, resultText } = useSelector((state) => state);
  const [isCalculated, setIsCalculated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const calculateProtein = () => {

    // Gestion erreurs
    if (!veggieInput && !amountInput) {
      setErrorMessage('Veuillez choisir un aliment et la quantité consommée.');
      return;
    }
    if (!veggieInput) {
      setErrorMessage('Choisissez un aliment.');
      return;
    }
    if (!amountInput) {
      setErrorMessage('Choisissez une quantité.');
      return;
    }
    setErrorMessage('');

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

      // 5. Ajouter le résultat à la liste des protéines consommées
      // dispatch(addProteinResult(totalProtein));
      // console.log("Total Protein:", totalProtein);
    }
    setIsCalculated(true);
  };

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;

    // Regex
    const isValidInput = /^\d+(\.\d{0,2})?$/.test(inputValue);

    if (isValidInput) {
      dispatch(typeAmount(inputValue));
    }
  };
  
  const resetCalculator = () => {
    setIsCalculated(false);
    dispatch(typeVeggie('')); 
    dispatch(typeAmount('')); 
    dispatch(setResultText('')); 
  };

  const renderButton = () => {
    if (isCalculated) {
      return (
        <div>
          <button className="calculatorButton" type="button" onClick={resetCalculator}>
            Calculer à nouveau ?
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="calculatorButton" type="button" onClick={calculateProtein}>
            Je calcule !
          </button>
        </div>
      );
    }
  };

  const sortedVeggies = veggies.slice().sort((a, b) => a.name.localeCompare(b.name));


  return (
    <div className="input-group">
        <datalist id="veggies">{sortedVeggies.map((veggie) => <option key={veggie.id}>{veggie.name} </option>)}</datalist>
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
          onChange={handleAmountChange}
          />
          <span>/grs</span>
      </div>
      <div>
        {renderButton()}
      </div>
      <div>
        {errorMessage && <p id="proteinResult">{errorMessage}</p>}
      </div>
      <div>
      {resultText && <p id="proteinResult">{resultText}</p>}
      </div>
      <div className={isCalculated ? 'animatedSalad' : ''}>
        <img src={salad} className="saladLogo" alt="salad" />
      </div>
      {/* <ProteinList proteinList={proteinList} />   */}
      </div>
  )
}
