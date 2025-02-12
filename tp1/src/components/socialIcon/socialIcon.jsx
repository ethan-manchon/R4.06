export default function SocialIcon({name}) {

    const icons = {
        Instagram: "/assets/instagram.png",
        Github: "/assets/github.png",
        Meta: "/assets/meta.png",
        Undefined: "/assets/undefined.webp"
        // Add more socials here
    }

    if (!icons[name]) {
        return <img src={icons.Undefined} alt={"Logo de " + name} className="Logo cursor-pointer w-6" />}
    else {
        return <img src={icons[name]} alt={"Logo de " + name} className="Logo cursor-pointer w-6" />
    }
}