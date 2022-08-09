import { Link, useParams } from 'react-router-dom';
import { Header } from '../../Exports';
import './Goal.css';

export default function Goal() {
    const { type } = useParams();
    return (
        <div>
            <Header title={'HabiPets'} />
            <h1 className="Title">Goal for {type} habit</h1>
            <form className="FormContent">
                <div>
                    <label htmlFor="habit">Habit:</label>
                    <input
                        type={'text'}
                        id="habit"
                        placeholder="Enter your Habit here..."
                    />
                </div>
                <div>
                    <label htmlFor="frequency">Frequency:</label>
                    <select id="frequency">
                        <option>1x</option>
                        <option>2x</option>
                        <option>3x</option>
                        <option>4x</option>
                        <option>5x</option>
                        <option>6x</option>
                        <option>7x</option>
                        <option>8x</option>
                        <option>9x</option>
                        <option>10x</option>
                    </select>
                </div>
                <button type="submit">Create My Habit</button>
            </form>
            <div className="NextPageBox">
                <Link to={`/HabitPage${type}`}>next page</Link>
            </div>
        </div>
    );
}
