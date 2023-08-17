import arm from '../../assets/muscles-arm-svgrepo-com.svg'
import './styles.scss'

export default function App() {

  return (
    <>
      <div>
        <img src={arm} className="armLogo" alt="muscled arm" />
      </div>
      <h1 className='title'>Protie, l&#39;allié des veggies !</h1>
        <div className="description">
          <p>Le site qui vous permet facilement de calculer votre apport en protéine !</p>
        </div>
    </>
  )
}
