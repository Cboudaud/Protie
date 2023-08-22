import './styles.scss'
import salad from '../../assets/healthy-food-salad-svgrepo-com.svg'
import veggies from '../../data';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectVeggie, typeAmount } from '../../actions/calculator';

export default function Calculator() {
  // const { veggieSelected, amountInput } = useSelector((state) => state)
  // const dispatch = useDispatch();

  return (
  <div className="input-group">
      <datalist id="veggies">{veggies.map((veggie) => <option key={veggie.id}>{veggie.name}</option>)}</datalist>
      <label htmlFor="veggies">Choisissez l'aliment consommé</label>
      <input
        className='input-group_food'
        type="text"
        list='veggies'
        id='veggie' name='veggie'
        size='144'
        autoComplete='off'
      />
      {/* Select option */}
      {/* <select className='input-group_food'>
        <option>Choisissez l'aliment consommé</option>
        {veggies.map((veggie) => <option key={veggie.id}>{veggie.name}</option>)}
      </select> */}
  <div className='input-group_quantity'>
      <input 
        className='input-group_quantity_number' 
        placeholder='La quantité'
        // value={amountInput}
        // onChange={(e) => dispatch(typeAmount(e.target.value))}
        />
        <span>/grs</span>
    </div>
    <div>
      <button className='calculatorButton' type="button">Je calcule !</button>
    </div>
    <div>
        <img src={salad} className="saladLogo" alt="salad" />
    </div>
</div>
  )
}
