import footerStyle from "./footer.module.css"

function Footer() {
    return (
        <>
            <footer className={footerStyle.footer}>
                <p>Mitt intresse inom Pokémon korts samling</p>
                <p>Hanin Farhan</p>
                <p>hafa2300@studenter.miun.se</p>
                <p>DT210G - Fördjupad frontend-utveckling</p>
                <p>Webbutveckling 120hp</p>
                <p>Mittuniversitet</p>
            </footer>
        </>
    )
}

export default Footer