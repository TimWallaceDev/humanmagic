
import "./Album.scss"

export function Album({ album }) {

    return (
        <section className={"album-container" + ` album-container--${album.name}`}>
            <hr className="album__hr album__hr--top"></hr>

            <div className="album">

                <div className="album__cover-wrapper">
                    <img src={album.cover} className="album__cover" alt="brightness album cover" />
                </div>

                <div className="album__information">
                    <p className="album__presents">Human Magic <br></br>Presents...</p>
                    <h2 className={"album__heading" + ` album__heading--${album.name}`}>{album.name}</h2>
                    <table className="album__tracks">
                        <tbody>

                            {album.tracks.map((track, index) => {
                                return (
                                    <tr className="album__track" key={index}>
                                        <td className="album__track--number">{index + 1}</td>
                                        <td className="album__track--name">{track}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>

                    <p className="album__release-date">{album.date}</p>

                    <a href={album.link}>
                        <button className={"album__button" + ` album__button--${album.name}`}>
                            Listen Here
                        </button>
                    </a>
                </div>

            </div>

            <hr className="album__hr album__hr--bottom"></hr>
        </section>

    )
}