import './card.css'

const Card = ({robot}) => {
    const {name, email, id} = robot;
    return(
    <div className='container-card'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
    </div>);
};

export default Card;