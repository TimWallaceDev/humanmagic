import "./Member.scss"

export function Member({member, className}){

    return (
        <article className={`${className} member`}>
            <img src={member.image} alt="james" className="member__image" />
            <h3 className="member__name">{member.name}</h3>
            <h4 className="member__instrument">{member.instrument}</h4>
        </article>
    )
}