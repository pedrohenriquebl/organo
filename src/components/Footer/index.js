import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <section className="social-media">
                <a href="https://www.instagram.com.br">
                    <img src="/imagens/ig.png" alt="instagram" />
                </a>
                <a href="https://www.twitter.com.br">
                    <img src="/imagens/tw.png" alt="twitter" />
                </a>
                <a href="https://www.facebook.com.br">
                    <img src="/imagens/fb.png" alt="facebook" />
                </a>
            </section>
            <section className="logo">
                <img src="/imagens/logo.png" alt="logo" />
            </section>
            <section className="copyright">
                <span>Desenvolvido por PHBL</span>
            </section>
        </footer>
    )
}

export default Footer