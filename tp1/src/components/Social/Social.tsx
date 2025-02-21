import SocialIcon from "../../ui/socialIcon/socialIcon"

interface SocialProps {
    socials?: {name: string, url: string}[];
    className?: string;
}

export default function Social ({ socials, className }: SocialProps) {

   if (socials == undefined || socials.length == 0) {
       return null;
   }
   
//    Tri pour afficher les réseaux sociaux par ordre alphabétique
   socials.sort((a, b) => a.name.localeCompare(b.name));

   let liste = socials.map((social, index) => (
    <li key={index}>
        <a href={social.url} target="_blank" rel="noreferrer"><SocialIcon name={social.name} /></a>
    </li>
   ));

    
        return <ul className={`flex items-center gap-2 mt-2 ${className}`}>{liste}</ul>;

}

 

