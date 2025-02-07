import Capa from "../../assets/Tela Login/Imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"

function Login(){
    return(
        <main>
        <section>
            <p>Reservado para imagem</p>
        </section>

        <section>
            <img src={Logo} alt="Logo SISPAR"/>
            <h1>Boas vindas ao Novo Portal SISPAR</h1>
            <p>Sistema de Emissão de Boletos e Parcelamento</p>


            <form action="">
            <input type="email" name="email" id="email" placeholder="Email" />

            <input type="password" name="password" id="password" placeholder="Senha" />

            

            <a href="">Esqueci minha senha</a>
            
            <div>
            <button>Entrar</button>
            <button>Criar conta</button>
            </div>

            </form>

        </section>
        </main>
    )
}
export default Login;