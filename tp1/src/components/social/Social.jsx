import SocialIcon from "../socialIcon/socialIcon"

export default function Social ({ socials }) {

    let liste = socials.map( (s, index) => (
        <li key={index}><a href={s.url} target="_blank"><SocialIcon name={s.name}/></a></li>
    ))

    return (
        <>
            <ul className='flex items-center gap-2 mt-2'>
                {liste}
            </ul>
        </>
    )
}


