import Card from "../card/Card";

export default function Cards({somebodies}) {
    return (
        <>
            <section className="Cards grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {somebodies.map((somebody, index) => (
                    <Card key={index} somebody={somebody}/>
                ))}
            </section>
        </>
    )
}