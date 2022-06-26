import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'; //configuring route
// import About from './components/About'; //configuring route
import Navbar from './components/Navbar'; //link
import OrderSummary from './components/OrderSummary'; //progarmmatically navigation
import NoMatch from './components/NoMatch'; // no match routes
import Products from './components/Products';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';
import Profile from './components/Profile';
import { AuthProvider } from './components/auth';
import Login from './components/Login';

const LazyAbout = React.lazy(() => import('./components/About')) // Lazy Loading


function App() {
	return (
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='about' element={
					<React.Suspense fallback='Loading'>
						<LazyAbout/>
					</React.Suspense>} />
				<Route path='order-summary' element={<OrderSummary/>} />
				<Route path='products' element={<Products />} >
					<Route index element={<FeaturedProduct/>} />
					<Route path='featured' element={<FeaturedProduct/>} />
					<Route path='new' element={<NewProduct/>} />
				</Route>
				<Route path='users' element={<Users/>} >
					<Route path=':userId' element={<UserDetails/>} />
					<Route path='admin' element={<Admin/>} />
				</Route>
				<Route path='profile' element = {<Profile />}/>
				<Route path='login' element={<Login />}/>
				<Route path='*' element={<NoMatch/>} />
			</Routes>	
		</AuthProvider>
	);
}

export default App;
