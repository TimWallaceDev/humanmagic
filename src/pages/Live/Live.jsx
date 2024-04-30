import "./Live.scss"

export function Live() {

    return (
        <main className="live">
            <h1 className="live__heading">Videos</h1>
            <hr className="hr hr--top" />
            <div className="live__content">

                <article className="live__item">
                    <iframe className="live__iframe" src="https://www.youtube.com/embed/XbAIRE7iE0M?si=QOZKvSX8LmtuzH2r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h4 className="live__title">Slap Leather (Live)</h4>
                    <h5 className="live__venue">3030 Dundas, Toronto</h5>
                </article>

                <hr className="hr hr--mobile"></hr>

                <article className="live__item">
                    <iframe className="live__iframe" src="https://www.youtube.com/embed/IYgZ6unmi6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 className="live__title">Cold Blooded (Live)</h4>
                    <h5 className="live__venue">Longboat, Toronto</h5>
                </article>

                <hr className="hr hr--mobile"></hr>

                <article className="live__item">
                    <iframe className="live__iframe" src="https://www.youtube.com/embed/9N-6KZYgHEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 className="live__title">Colorful (Live)</h4>
                    <h5 className="live__venue">Longboat, Toronto</h5>
                </article>

                <hr className="hr hr--mobile"></hr>

                <article className="live__item">
                    <iframe className="live__iframe" src="https://www.youtube.com/embed/TGmrn_8EM0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 className="live__title">Overjoy (Live)</h4>
                    <h5 className="live__venue">Longboat, Toronto</h5>
                </article>

                <hr className="hr hr--mobile"></hr>

                <article className="live__item">
                    <iframe className="live__iframe" src="https://www.youtube.com/embed/LgojJmJJ_JI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 className="live__title">Slap Leather (Live)</h4>
                    <h5 className="live__venue">Longboat, Toronto</h5>
                </article>

                <hr className="hr hr--mobile"></hr>

                <article className="live__item">
                    <iframe className="live__iframe" src="https://www.youtube.com/embed/x5xoNPzDLs4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 className="live__title">It's Our Magic (Live)</h4>
                    <h5 className="live__venue">Lee's Palace, Toronto</h5>
                </article>

                <hr className="hr hr--mobile"></hr>

                <article className="live__item">
                    <iframe className="live__iframe" src="https://www.youtube.com/embed/L_uoa1T8euA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h4 className="live__title">Cold Blooded (Live)</h4>
                    <h5 className="live__venue">Lee's Palace, Toronto</h5>
                </article>

            </div>
            <hr className="hr hr--bottom-top" />
            <hr className="hr hr--bottom-bottom" />
        </main>
    )
}