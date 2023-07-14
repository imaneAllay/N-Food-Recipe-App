
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='className="flex flex-col gap-y-1  mt-3"'>
       <Link className='text-white font-thin text-sm bg-orange-500 p-4' to='/'>Home</Link>{' '}
      <Link  className='text-white font-thin text-sm bg-orange-500 p-4' to='/add'>Add Recipe</Link>{' '}
      <Link  className='text-white font-thin text-sm bg-orange-500 p-4' to='/list'>My Recipes</Link>{' '}

      
      
    </div>
  );
}

export default Nav;
