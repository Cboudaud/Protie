/* eslint-disable react/no-unescaped-entities */
import './styles.scss';
import salad from '../../assets/healthy-food-salad-svgrepo-com.svg';
import veggiesData from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'; // Add useEffect to use the API
import { typeVeggie, typeAmount, setProteinResult, setResultText } from '../../actions/calculator';

// const API_BASE_URL = 'http://localhost:3001';

export default function Calculator() {
  const { veggieInput, amountInput, resultText } = useSelector((state) => state);
  const [isCalculated, setIsCalculated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const [veggies, setVeggies] = useState([]);
  // const [apiError, setApiError] = useState(false);
  const dispatch = useDispatch();

  // Decomment to use with API

  // useEffect(() => {
  //   // Get all veggies from API
  //   fetch(`${API_BASE_URL}/veggies`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVeggies(data);
  //       setApiError(false);
  //     })
  //     .catch((error) => {
  //       console.error('Erreur lors du chargement des veggies', error);
  //       setApiError(true);
  //     });
  // }, []);

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

    // // Check if veggies list is available
    // if (veggies.length === 0 && !apiError) {
    //   // You might want to display an error message or handle this case differently
    //   console.error('List of veggies is empty. Please wait for the data to load.');
    //   return;
    // }

    // 1. Find the right object (veggie) which is selected + modify this line to use the API, remplace veggiesData by veggies
    const selectedVeggie = veggiesData.find((veggie) => veggie.name === veggieInput);

    console.log('selectedVeggie:', selectedVeggie);


    if (!selectedVeggie) {
      setErrorMessage("Veuillez choisir un aliment de la liste.");
      return;
    }

    setErrorMessage('');

    // 2. Get the number of protein
    const proteinPer100g = selectedVeggie.protein;

    // 3. Multiply by the amount
    const totalProtein = (proteinPer100g * amountInput) / 100;

    // 4. Display the result
    dispatch(setResultText(`Vous avez consommé ${totalProtein.toFixed(2)} grammes de protéines !`));
    dispatch(setProteinResult(totalProtein));

    setIsCalculated(true);
  };

  const handleAmountChange = (e) => {
    let inputValue = e.target.value;
  
    // Regex to control the amount input
    const isValidInput = /^\d{0,4}(\.\d{0,2})?$/.test(inputValue);
  
    if (isValidInput) {
      // Supprimer le dernier chiffre s'il y a plus de 4 chiffres avant la virgule
      const parts = inputValue.split('.');
      if (parts[0].length > 4) {
        inputValue = inputValue.slice(0, -1);
      }
  
      dispatch(typeAmount(inputValue));
    }
  };
  
  const resetCalculator = () => {
    setIsCalculated(false);
    dispatch(typeVeggie(''));
    dispatch(typeAmount(''));
    dispatch(setResultText(''));
    setErrorMessage('');
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

  // Decomment the line under and remplace veggiesData by veggiesToDisplay
  // const veggiesToDisplay = apiError ? veggiesData : veggies;
  const sortedVeggies = veggiesData.slice().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="input-group">
    <label htmlFor="veggie">Choisissez l'aliment consommé : </label>
    <select
      className="input-group_food"
      id="veggie"
      name="veggie"
      value={veggieInput}
      onChange={(e) => dispatch(typeVeggie(e.target.value))}
    >
      <option value="" disabled>L'aliment</option>
      {sortedVeggies.map((veggie) => (
        <option key={veggie.id} value={veggie.name}>{veggie.name}</option>
      ))}
    </select>
    <div className="input-group_quantity">
      <input
        className="input-group_quantity_number"
        placeholder="La quantité"
        value={amountInput}
        onChange={handleAmountChange}
      />
      <span>/grs</span>
    </div>
    <div>{renderButton()}</div>
    <div>{errorMessage && <p id="proteinResult">{errorMessage}</p>}</div>
    <div>{resultText && <p id="proteinResult">{resultText}</p>}</div>
    <div className={isCalculated ? 'animatedSalad' : ''}>
      <img src={salad} className="saladLogo" alt="salad" />
    </div>
      {/* <ProteinList proteinList={proteinList} /> */}
    </div>
  );
}
