import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
function Home() {
	const navigate = useNavigate();
	const [user, setUser] = useState();
	const cookies = new Cookies();

	// Check IF User has already logged in identified
	useEffect(() => {
		const id = localStorage.getItem('id');
		if (id !== null) {
			const getdata = async (id) => {
				try {
					const { data, status } = await axios.get(
						`http://144.126.145.81:8888/api/datauser/${id}`,
					);
					if (status === 200) {
						localStorage.removeItem('id');
						cookies.set('access_token', data.token.access_token, {
							expires: data.token.expires_in,
						});
						cookies.set('refresh_token', data.token.refresh_token);
						setUser(data);
					}
				} catch (error) {
					console.log(error);
				}
			};
			getdata(id);
		}
	}, []);

	useEffect(() => {
		const access_token = cookies.get('access_token');
		const refresh_token = cookies.get('refresh_token');
		if (access_token !== undefined) {
			try {
				const getUser = async (access_token) => {
					try {
						const { data, status } = await axios.get(
							`http://144.126.145.81:8888/api/getusers/${access_token}`,
						);
						if (status === 200) {
							return setUser(data);
						}
					} catch (error) {
						return console.log(error);
					}
				};
				return getUser(access_token);
			} catch (error) {
				return console.log(error);
			}
		} else if (access_token === undefined && refresh_token !== undefined) {
			try {
				const getUser = async (refresh_token) => {
					try {
						const { data, status } = await axios.get(
							`http://144.126.145.81:8888/api/refresh/${refresh_token}`,
						);
						if (status === 200) {
							return setUser(data);
						}
					} catch (error) {
						return console.log(error);
					}
				};
				return getUser(refresh_token);
			} catch (error) {
				return console.log(error);
			}
		}
	}, []);

	// Check user isLogin
	useEffect(() => {
		const interval = setInterval(() => {
			const id = localStorage.getItem('id');
			if (id === null) {
				return navigate('/');
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [navigate]);

	return (
		<div>
			<div className="flex  pt-6 w-100% gap-20">
				<div className="bg-blue-700 px-8 h-20 flex-col  pt-5  w-full  mx-8 rounded-lg border-1  ">
					<div className="flex flex-row items-center w-full gap-10 ">
						<div>
							<h2 className="">TECHNOLOGY</h2>
						</div>
						<div className=" w-full ">
							<p className="text-end ">UserName</p>
						</div>
						<div>
							<p>{user?.user && user?.user.global_name}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="justify-center items-center grid grid-cols-5 gap-5 ">
				{user?.guilds.length > 0 &&
					user?.guilds.map((v) => {
						return (
							<div
								className="flex flex-col border border-indigo-600 rounded-md bg-slate-600 p-8 justify-center items-center cursor-pointer"
								key={v.id}
								onClick={() => navigate(`/dashboard/${v.id}`)}>
								<div>
									<img
										src={`https://cdn.discordapp.com/icons/${v.id}/${v.icon}.png`}
										alt={`${v.icon}`}
									/>
								</div>
								<div>
									<a href="">
										<p>{v.name}</p>
									</a>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Home;
