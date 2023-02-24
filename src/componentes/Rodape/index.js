
import './rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
       <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/hugo-rocha-a1606b219/" target="_blank">
                        <img src="/imagens/linkedin.png" alt="Linkedin do Hugo" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Hugoalves98" target="_blank">
                        <img src="/imagens/github.png" alt="Github do Hugo" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/alves_hugo98" target="_blank">
                        <img src="/imagens/instagram.png" alt="Instagram do Hugo" />
                    </a>
                </li>
            </ul>
       </section>
       <section>
        <img src="/imagens/logo.png" alt="organograma" />
       </section>
       <section>
        <p>
            Desenvolvido por Hugo.
        </p>
       </section>
    </footer>)
}

export default Rodape