import './styles.scss'
import salad from '../../assets/healthy-food-salad-svgrepo-com.svg'
// import veggies from '../../data';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectVeggie, typeAmount } from '../../actions/calculator';

export default function Calculator() {
  // const { veggieSelected, amountInput } = useSelector((state) => state)
  // const dispatch = useDispatch();
  const veggies = [
  
    'Abricot',
    'Ail',
    'Airelle',
    'Amande',
    'Amarante (crue)',
    'Ananas',
    'Artichaut',
    'Asperge',
    'Aubergine',
    'Avocat',
    'Avoine',
    'Bacon végétal',
    'Banane',
    'Betterave',
    'Brocoli',
    'Cacahuètes (arachide)',
    'Carotte',
    'Cassis',
    'Cerise',
    'Champignon blanc',
    'Chanvre (graine)',
    'Chia (graine)',
    'Chicorée (racine)',
    'Chou kale',
    'Chou-fleur',
    'Choux de Bruxelles',
    'Châtaigne',
    'Citron vert',
    'Citron',
    'Citrouille (graine)',
    'Citrouille',
    'Clémentine',
    'Cocombre',
    'Coing',
    'Courgette',
    'Cresson',
    'Céleri branche',
    'Céleri rave',
    'Datte séchée',
    'Edamame',
    'Endive',
    'Epinard',
    'Farine de blé entier',
    'Farine de soja',
    'Fenouil',
    'Fenugrec (graine)',
    'Figue de barbarie',
    'Figue séchée',
    'Figue',
    'Flageolet (haricot)',
    'Flocons d’avoine',
    'Fraise',
    'Framboise',
    'Fruit de la passion',
    'Goji',
    'Goyave',
    'Grenade',
    'Griotte',
    'Groseille',
    'Haricot vert',
    'Kaki',
    'Kiwi',
    'Kumquat',
    'Lait de soja',
    'Laitue iceberg',
    'Lardons végétaux',
    'Lentille (crue)',
    'Levure alimentaire',
    'Litchi',
    'Lupin',
    'Mandarine',
    'Mangue',
    'Manioc',
    'Marron',
    'Maïs entier',
    'Melon',
    'Mirabelle',
    'Morille',
    'Myrtille',
    'Mâche',
    'Navet',
    'Nectarine',
    'Noisette grillée',
    'Noisette',
    'Noix de cajou (crue)',
    'Noix de coco crue',
    'Noix de coco sèche',
    'Noix de macadamia',
    'Noix de pécan',
    'Noix fraîche',
    'Noix séchée (cerneaux)',
    'Oignon',
    'Olive verte',
    'Orange',
    'Orge',
    'Oseille',
    'Pamplemousse',
    'Panais',
    'Papaye',
    'Pastèque',
    'Patate douce',
    'Persil',
    'Petit pois',
    'Pignon de pin',
    'Pistache',
    'Poire',
    'Poireau',
    'Pois-chiche',
    'Poivron',
    'Pomme de terre',
    'Pomme',
    'Potimarron',
    'Potiron',
    'Prune',
    'Pruneau sec',
    'Pâtisson',
    'Pêche',
    'Quinoa cru',
    'Radis',
    'Raisin (cru)',
    'Raisin sec',
    'Rhubarbe',
    'Riz blanc (cru)',
    'Riz complet (cru)',
    'Roquette',
    'Rutabaga',
    'Salsifis (cru)',
    'Sarrasin',
    'Soja (graine)',
    'Son d’avoine',
    'Spiruline crue',
    'Spiruline séchée',
    'Steak végétal',
    'Tamarin (cru)',
    'Tempeh',
    'Tofu (nature)',
    'Tomate',
    'Topinambour',
    'Tournesol (graine)',
    'Wakame (crue)',
    'Wasabi (racine crue)',
    'Échalotte',
    'Épeautre',
    'Whey végétale',
];

  return (
  <div className="input-group">
      <select className='input-group_food'>
        <option>Choisissez l'aliment consommé</option>
        {veggies.map((veggie) => <option key={veggie.toString()}>{veggie}</option>)}
      </select>
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
