import Card from '../card/card';
import './cardList.css'

const CardList = ({robots}) => {
    const {name, id, email} = robots;
    return(
        <div className='cardList-container'>
            {robots.map(robot => {
                return(
                <Card robot={robot} key={robot.id}/>
                )
            })}   
        </div>
    )
};

export default CardList;