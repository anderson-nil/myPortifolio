import {useEffect ,useState } from 'react';
import img from 'next/image'
import styles from '../inicio/inicio.module.css'
export default function Inicio(){
    const [nome, setNome] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [completedOn, setCompletedOn] = useState("");
    const [categories, setCategories] = useState("");
    const [link, setLink] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        obterProjetos();
      },[]);
	function abrefecha(elemento) {
		let ex = document.getElementById(elemento);
		ex.classList.toggle("btn-menu-hidden");
	  }

    function obterProjetos(){
        fetch("http://localhost:3000/projetos.json")
        .then(function(resposta){
            resposta.json().then(function(json){
                console.log(json);
                setNome(json.projects[0].name);
                setCreatedBy(json.projects[0].createdBy);
                setCompletedOn(json.projects[0].completedOn);
                setCategories(json.projects[0].categories);
                setLink(json.projects[0].link);
                setDescription(json.projects[0].description);
                console.log(nome);
                console.log(createdBy);
                console.log(completedOn);
                console.log(categories);
                console.log(link);
                console.log(description);
            })
        
        })

    }
    return(
        <>
			<div className="layout">
				<header className={styles.cabecalho}>
					<div className="container">

						<div className="logo wow slideInLeft" data-wow-duration="1s" data-wow-delay="1s">
							<a href="#">
								<p className="logoTopo">#</p>
								<p>A.Luz</p>
							</a>
						</div>

						<div className="links">
							<nav>
								<ul>
									<li><a href="/#ini" onClick={()=>abrefecha("ex1")}>Início</a></li>
									<li><a href="/#sob" onClick={()=>abrefecha("ex2")}>Sobre</a></li>
									<li><a href="/#por" onClick={()=>abrefecha("ex3")}>Portfolio</a></li>
									<li><a href="/#con" onClick={()=>abrefecha("ex4")}>Contato</a></li>
								</ul>
							</nav>
						</div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
						    <p className={styles.descricao} >{nome}</p>
                            <p className={styles.descricao} >{createdBy}</p>
                            <p className={styles.descricao} >{completedOn}</p>
                            <p className={styles.descricao} >{categories}</p>
                            <p className={styles.descricao} ><a>{link}</a></p>
                            <p className={styles.descricao} >{description}</p>
                     </div>

				</header>
            </div>
        </>
    )
}