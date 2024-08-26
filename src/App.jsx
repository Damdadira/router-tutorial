import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TailWind from './Tailwind';
import Home from './Home';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Users', href: '/users', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  return (
    <Router>
      <div className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          {navigation.map((item) => (
            <li
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
      <div className="fixed bottom-0">
        <TailWind></TailWind>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
