import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = ({ id, title, isFavorite }) => {

	const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleCardFavorite(id, isFavorite));
  }
	return (
	  <li className={styles.card}>{title}
		  <button onClick={toggle} className={clsx(styles.star_button, isFavorite && styles.active)}>
				<span className='fa fa-star-o' />
			</button>
		</li>
	);
};

export default Card;