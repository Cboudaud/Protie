import './styles.scss'
import salad from '../../assets/healthy-food-salad-svgrepo-com.svg'


export default function Calculator() {

  return (
<div className="input-group">
    <input className='input-group_food' placeholder='L&#39;aliment que vous avez consommé'/>
    <div className='input-group_quantity'>
      <input className='input-group_quantity_number' placeholder='La quantité'/><span>/grs</span>
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
