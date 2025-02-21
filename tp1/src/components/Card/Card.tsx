import Social from '../Social/Social'
import Avatar from '../../ui/Avatar/Avatar';
import Citation from '../../ui/Citation/Citation';
import Email from '../../ui/Email/Email';

interface CardProps {
  picture?: string;
  firstname: string;
  lastname: string;
  mail?: string;
  citation?: string;
  socials: {name: string, url: string}[];
  className?: string;
}



export default function Card(somebody : CardProps) {

  let alt = somebody.firstname + " " + somebody.lastname + " profile picture";
  return (
      <div className="Card bg-stone-50 p-6 relative h-112">
        <Avatar className='card__avatar h-64 w-64 object-cover' src={somebody.picture ?? ''} alt={alt}></Avatar>
        <h4 className='card__name'>{somebody.firstname} {somebody.lastname}</h4>
        <Email className='card__email'>{somebody.mail}</Email> 
        <Citation className='card__citation'>{somebody.citation}</Citation> 
        <Social socials={somebody.socials} />
      </div>
  );
}
