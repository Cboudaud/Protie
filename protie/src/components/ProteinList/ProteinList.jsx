/* eslint-disable react/no-unescaped-entities */
import './styles.scss';
import { useSelector } from 'react-redux';

const ProteinList = () => {
  const proteinList = useSelector((state) => state.proteinList);

  return (
    <div>
      <h2>Protéines consommées aujourd'hui :</h2>
      <ul>
        {proteinList && proteinList.map((protein, index) => (
          <li key={index}>{`${protein.toFixed(2)} grammes`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProteinList;