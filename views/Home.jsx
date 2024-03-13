const { Link } = ReactRouterDOM


export function Home() {
    return <section className="home">

        <h1 className="welcome-msg" >Welcome to Apssus!!!</h1>
        <div className="post-card">
            <textarea placeholder="What's on your mind?"></textarea>

            <div id="first" className="button-row">
                <button className="upload">
                    Upload
                </button>
                <button className="live-video">
                    <Link to="/mail/inbox" className="home-mail-btn">
                        Mail
                    </Link>
                </button>


                <button className="life-event">
                    Pictures
                </button>
            </div>
            <div id="second" className="button-row">
                <button className="people">
                    People
                </button>
                <button className="location">
                    Note
                </button>
                <button className="feeling">
                    Feeling
                </button>
            </div>
            <button className="post">Sign in <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
        </div>
    </section>
}