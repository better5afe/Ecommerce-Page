const userAvatar = require('../../../assets/images/image-avatar.png');

const NavUser = () => {
	return (
		<a
			href='3'
			className='w-7 h-7 ms-4 border border-transparent rounded-full transition-colors duration-300 hover:border-orange focus:border-orange lg:w-10 lg:h-10 lg:ms-8 lg:border-2'
		>
			<img src={userAvatar} alt={`User's avatar.`} />
		</a>
	);
};

export default NavUser;
