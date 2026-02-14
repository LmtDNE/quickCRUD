import profileThumbnail from '../assets/profile-thumbnail.png';

export default function TestimonialCard({
	name = '',
	handle = '',
	quote,
	avatarSrc = profileThumbnail,
}) {
	return (
		<article className='max-w-[340px] h-[233px] bg-white rounded-lg p-6'>
			<header className='flex flex-row gap-3 max-w-[292px] max-h-[49px]'>
				<img className='h-12 w-12' src={avatarSrc} alt={`${name} profile`} />
				<div className='min-w-0'>
					<h2 className='text-neutral-900 text-lg'>{name}</h2>
					<p className='text-neutral-600 text-sm'>{handle}</p>
				</div>
			</header>
			<p className='text-neutral-600 text-base'>“{quote}”</p>
		</article>
	);
}
