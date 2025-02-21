interface SocialIconProps {
    name: string;
}

export default function SocialIcon({ name }: SocialIconProps) {
    const icons = {
        instagram: "/assets/instagram.png",
        github: "/assets/github.png",
        meta: "/assets/meta.png",
        undefined: "/assets/undefined.webp"
        // Add more socials here
    };

    let media = name.toLowerCase() as keyof typeof icons;
    const icon = icons[media] !== undefined ? icons[media] : icons.undefined;

    return <li><img className="Logo cursor-pointer w-6" src={icon} alt={name}/></li>;
}