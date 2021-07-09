import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increaseStat, completeTask } from "../game/gameSlice";
import './style.css'

function Computer(){
    const dispatch = useDispatch();

    const taskStat = useSelector(state => state.rootReducer.game.stats.taskStat);
    const tasks = useSelector(state => state.rootReducer.game.totalTasks);

    useEffect(() => {
        let timer;

        if(taskStat < 100 && tasks.length > 0){
            timer = setInterval(()=>{
                dispatch(increaseStat('taskStat'))
            }, 100)  
        }else if(taskStat === 100){
            clearInterval(timer)
            dispatch(completeTask())
        }

        return () => {
            clearInterval(timer)
        }

    }, [taskStat, tasks, dispatch])

    return(
        <div className='computer' >
            <div className='comp-text'> 
                {`
                let dog = 'cute';
                let dogs = ['Maggie', 'Thunder', 'Sombra', 'Luna', 'Beau', 'Paco']
                dogs.forEach(dog=> console.log('What a good boi')
                
                for(let i=0; i<dogs.length; i++){
                    feed(dogs[i]);
                    pet(dogs[i]);
                    walk(dogs[i]);
                    postInstagramPhotoOf(dogs[i]);
                }

                function feed(dog){
                    let tummy = 'full';

                    return(dog + ' is ' + tummy);
                }

                function pet(dog){
                    let ears = 'scratched';

                    return(dog + ' feels loved.');
                }

                function walk(dog){
                    let legs = 'stretched';
                    let poopBag = 'full';

                    trashCan.push(poopBag);

                    return(dog + ' loves going outside.');
                }

                function postInstagramPhotoOf(dog){
                    let photo = 'perfect';

                    posts.push(photo);

                    return('It got 2 million likes!');
                }

                `}
            </div>
        </div>
    )
}

export default Computer