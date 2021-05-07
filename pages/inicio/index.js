import styles from './inicio.module.css'
import img from 'next/image'
export default function Inicio(){
	function abrefecha(elemento) {
		let ex = document.getElementById(elemento);
		ex.classList.toggle("btn-menu-hidden");
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
									<li><a href="#ini" onClick={()=>abrefecha("ex1")}>Início</a></li>
									<li><a href="#sob" onClick={()=>abrefecha("ex2")}>Sobre</a></li>
									<li><a href="#por" onClick={()=>abrefecha("ex3")}>Portfolio</a></li>
									<li><a href="#con" onClick={()=>abrefecha("ex4")}>Contato</a></li>
								</ul>
							</nav>
						</div>

						<h1><strong>Anderson Andrade</strong></h1>

						<p className={styles.descricao}>Code // Share // Reboot</p>

					</div>

				</header>
				<main>
					<div className="menu">
					<a id="ini" onClick={()=>abrefecha("ex1")}>
							<h2 className="tit_menu"> Inicio </h2>
						</a>
						<div id="ex1" className="btn-menu btn-menu-hidden">
							<section className={styles.sobre}>
								<div className="container">
									<div className={styles.itens}>
										<div className={`${styles.foto} wow flipInX`} data-wow-duration="1s" data-wow-delay="5s">
											<img src="/nil.png" width={164} height={162} alt="Foto TAG"/>
										</div>

										<div className={`${styles.iconeLapis} wow flipInX`} data-wow-duration="1s" data-wow-delay="1s">
											<i className="fas fa-user-edit"></i>
										</div>

										<div className={`${styles.iconeCodigo} wow flipInX`} data-wow-duration="1s" data-wow-delay="2s">
											<i className="fa fa-code"></i>
										</div>

										<div className={`${styles.iconeCoracao} wow flipInX`} data-wow-duration="1s" data-wow-delay="3s">
											<i className="fa fa-heart"></i>
										</div>

										<div className={`${styles.iconeCompartilhar} wow flipInX`} data-wow-duration="1s" data-wow-delay="4s">
											<i className="fa fa-share-alt"></i>
										</div>
									</div>

									<div className={styles.textos}>
										<p className={styles.descricao}>
											<strong className="descricao">Não é a linguagem de programação 
											que define o programador, mas sim sua lógica.
											</strong>
										</p>

										<a href="#" className={styles.botaoDescricao}>
											<i className="fa fa-eye">
											</i> Continue Lendo
										</a>
									</div>
								</div>
							</section>
						</div>
						<a id="sob" onClick={()=>abrefecha("ex2")}>
							<h2 className="tit_menu"> Sobre </h2>
						</a>
						<div id="ex2" className="btn-menu btn-menu-hidden">
							<section class="sobre">
					<div class="container">
						<div class="textos">
							<p>Me Chamo <strong>Anderson Andrade,</strong> desde garoto sempre fui talentoso para criar e melhorar ferramentas e arquiteruras.</p>
						</div>

						<ul class="habilidades">
							<li class="habilidade-8">
								<h2>
									<i class="fa fa-html5"></i> <strong>HTML5</strong> // 80%
									<div class="barra"><span></span></div>
								</h2>
							</li>
							<li class="habilidade-5">
								<h2>
									<i class="fa fa-css3"></i> <strong>CSS3</strong> // 50%
									<div class="barra"><span></span></div>
								</h2>
							</li>
							<li class="habilidade-7">
								<h2>
									<i class="fa fa-wordpress"></i> <strong>Android</strong> // 40%
									<div class="barra"><span></span></div>
								</h2>
							</li>
							<li class="habilidade-9">
								<h2>
									<i class="fa fa-git"></i> <strong>Git</strong> // 30%
									<div class="barra"><span></span></div>
								</h2>
							</li>
						</ul>
					</div>
				</section>
						</div>
						<a id="por" onClick={()=>abrefecha("ex3")}>
							<h2 className="tit_menu"> Portfólio </h2>
						</a>
						<div id="ex3" className="btn-menu btn-menu-hidden">
							<section class="portfolio">
								<div class="container">
									<ul>
										<li>
											<figure class="pot_git">
												<img src="https://placekitten.com/430/220" alt="Thumb"/>
												<figcaption>
													<a className="aqui" href="#">
														<h3>Veja como este site foi feito por dentro</h3>
														<p>Click Aqui</p>
													</a>
													<div class="overlay"></div>
												</figcaption>
											</figure>
										</li>

									</ul>
								</div>
							</section>
						</div>
						<a id="con" onClick={()=>abrefecha("ex4")}>
							<h2 className="tit_menu"> Contato </h2>
						</a>
						<div id="ex4" className="btn-menu btn-menu-hidden">
							<section class="contato">
								<div class="container">
									<form>
										<div class="cols">
											<div class="col">
												<div class="form-group">
													<input type="text" placeholder="Nome" required/>
												</div>
											</div>
											
											<div class="col">
												<div class="form-group">
													<input type="email" placeholder="E-mail" required/>
												</div>
											</div>


											<div class="col">
												<div class="form-group">
													<input placeholder="Telefone" type="tel" required/>
												</div>
											</div>
											
											<div class="col">
												<div class="form-group">
													<select required>
														<option>Selecione uma opção</option>
														<option>Orçamento</option>
														<option>Sugestão</option>
														<option>Outras Informações</option>
													</select>
												</div>
											</div>
										</div>

										<div class="form-group">
											<textarea placeholder="Preencha suas dúvidas"></textarea>
										</div>

										<div class="form-group">
											<button class="botao medio"><i class="fa fa-arrow-right"></i> Enviar Contato</button>
										</div>
									</form>
								</div>
							</section>
						</div>
					</div>
				</main>
				<footer>
					<div className="logoRodape">
						<a href="https://thiagoagdev.com/">
						<p className="logoTopo">#</p>
							<p className="rodape">A.Luz</p>
						</a>
						<p className={styles.descricao}>2017 Todos os Direitos Reservados</p>
					</div>
				</footer>
			</div>
        </>
    )

}