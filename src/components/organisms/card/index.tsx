import { FC } from 'react';
import './styles.scss';
import { FaEdit, FaTrash } from 'react-icons/fa';

type IJournal = {
  title: string;
  description: string;
};

type MyComponentProps = {
  journals: IJournal;
};

const Card: FC<MyComponentProps> = props => (
  <div className="card">
    <div className="card__header">
      <h4 className="card__title">{props?.journals.title}</h4>
      <div>
        {/*<a href={`/queries/${props.queries._id}`}><FaEye /></a>{' '}*/}
        {/*<FaTrash data-testid='del-icon' type='submit' onClick={() => props.onDeleteJournal(props.queries.id)} />{' '}*/}
        <FaTrash data-testid="del-icon" type="submit" /> <FaEdit />
      </div>
    </div>
    <p className="card__desc">{props?.journals.description}</p>
    <div className="card__footer">
      {/*{props.queries.completedAt ? <FaThumbsUp /> : <FaThumbsDown />}*/}
    </div>
  </div>
);

export default Card;
