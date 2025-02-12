import Social from '../social/Social'


export default function Card({somebody}) {

  let mail =  "";
  if (somebody.mail != undefined) {
  mail = <p className='text-emerald-400 text-left hover:underline'>{somebody.mail}</p>;
  }

  let picture = <img src="/assets/pdp/undefined.webp" alt=" Photo de profil" className="Logo w-full rounded-2xl" />
  if (somebody.picture ) {
    picture = <img src={"/assets/pdp/" + somebody.picture} alt=" Photo de profil" className="Logo w-full rounded-2xl" />
  }

  return (
    <>
      <article className="Card w-72 bg-stone-50 p-6 relative">
        {picture}
        <h2 className='text-2xl mt-4 font-medium text-left text-gray-700'>{somebody.firstname} {somebody.lastname}</h2>
        {mail}
        <p className='text-left text-gray-700'>{somebody.desc}</p>
        <Social socials={somebody.socials}/>
      </article>
    </>
  )
}
