import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import Profiles from './Profiles';

const initialNavigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Users', href: '/users', current: false },
  { name: 'Profile', href: '/profiles', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavigationMenu() {
  const [navigation, setNavigation] = useState(initialNavigation);
  const navigate = useNavigate();

  const onClick = (selectedItem) => {
    navigate(selectedItem.href); 

    setNavigation((prevNavigation) =>
      prevNavigation.map(item =>
        item.name === selectedItem.name 
        ? { ...item, current: true }
        : { ...item, current: false }
      )
    );
  };

  return (
    <div className="bg-lime-900 p-4">
      <ul className="flex space-x-4">
        {navigation.map((item) => (
          <li
            onClick={() => onClick(item)} 
            key={item.name}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current
                ? 'bg-lime-950 text-white'
                : 'text-gray-300 hover:bg-lime-950 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
            )}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
