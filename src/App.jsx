import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TailWind from './Tailwind';
import Home from './Home';
import About from './About';
import Users from './Users';
import { FlagIcon } from '@heroicons/react/24/outline';

const initialNavigation  = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Users', href: '/users', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  const [navigation, setNavigation] = useState(initialNavigation);

  const onClick = (selectedItem) => {
    setNavigation((prevNavigation) => 
      prevNavigation.map(item =>
        item.name === selectedItem.name 
        ? {...item, current: true}
        : {...item, current: false}
      )
    )
  }

  return (
    <Router>
      <div className="bg-lime-900 p-4">
        <ul className="flex space-x-4" >
          {navigation.map((item) => (
            <li
              // onClick={()=> console.log("e")}
              onClick={() => onClick(item)}
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-lime-950 text-white'
                  : 'text-gray-300 hover:bg-lime-950 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
            >
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
