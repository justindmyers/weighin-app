import { GetServerSideProps } from 'next';
import { BuiltInProviderType } from 'next-auth/providers';
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react';

const SignIn = ({ providers }: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>) => {
	return (
		<>
			<div className="min-h-screen flex flex-col justify-center align-center py-12 sm:px-6 lg:px-8">
				<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-8 px-4 mx-4 md:mx-0 shadow sm:rounded-lg sm:px-10">
						<div className="sm:mx-auto sm:w-full sm:max-w-md">
							<h2 className="text-center text-xl md:text-3xl font-extrabold text-gray-700">Sign in to your account</h2>
						</div>

						<div className="mt-6">
							<div className="mt-6">
								{Object.values(providers).map((provider) => (
									<div key={provider.name}>
										<button
											className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											onClick={() => signIn(provider.id)}>
											{provider.name}
										</button>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const providers = await getProviders();

	return {
		props: { providers },
	};
};

export default SignIn;
