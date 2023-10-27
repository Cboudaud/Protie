/* eslint-disable react/no-unescaped-entities */
import './styles.scss';
import salad from '../../assets/healthy-food-salad-svgrepo-com.svg';
import veggiesData from '../../data';
// import ProteinList from '../ProteinList/ProteinList';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { typeVeggie, typeAmount, setProteinResult, setResultText } from '../../actions/calculator';

const API_BASE_URL = 'http://localhost:3001';

export default function Calculator() {
  const { veggieInput, amountInput, resultText } = useSelector((state) => state);
  const [isCalculated, setIsCalculated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [veggies, setVeggies] = useState([]);
  const [apiError, setApiError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get all veggies from API
    fetch(`${API_BASE_URL}/veggies`)
      .then((response) => response.json())
      .then((data) => {
        setVeggies(data);
        setApiError(false); 
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des veggies', error);
        setApiError(true); 
      });
  }, []);

  const calculateProtein = () => {

    // Management of errors if input are empty before clic on calculate button
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

    // 1. Find the right object (veggie) which is selected
    const selectedVeggie = veggies.find(veggie => veggie.name === veggieInput);

    if (selectedVeggie) {
      // 2. Get the number of protein
      const proteinPer100g = selectedVeggie.protein;

      // 3. Multiply by the amount
      const totalProtein = (proteinPer100g * amountInput) / 100;

      // 4. Display the result
      dispatch(setResultText(`Vous avez consommé ${totalProtein.toFixed(2)} grammes de protéines !`));
      dispatch(setProteinResult(totalProtein));

      // 5. Add result to the list of veggies eaten (in stand by)
      // dispatch(addProteinResult(totalProtein));
      // console.log("Total Protein:", totalProtein);
    }
    setIsCalculated(true);
  };

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;

    // Regex to control the amount input
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

  const veggiesToDisplay = apiError ? veggiesData : veggies;
  const sortedVeggies = veggiesToDisplay.slice().sort((a, b) => a.name.localeCompare(b.name));

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
