import type { NextPage } from 'next';
import Head from 'next/head';
import LoginButton from '../components/login-button/login-button';

const Home: NextPage = () => {
	return (
		<div className="min-h-screen">
			<Head>
				<title>Weigh-in App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<LoginButton />
			</main>
		</div>
	);
};

export default Home;
