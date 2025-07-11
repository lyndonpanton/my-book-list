import "./Footer.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const developerProfile = [
		["Portfolio", "https://lyndonpanton.co.uk"],
		["Linkedin", "https://www.linkedin.com/in/lyndonpanton/"],
		["Github", "https://github.com/lyndonpanton"]
	];
	const languagesFrameworks = [
		["React", "https://react.dev/"],
		["Spring Boot", "https://spring.io/projects/spring-boot"],
		["MySQL", "https://www.mysql.com/"],
		["CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
	];
	const tools = [
		["Git", "https://git-scm.com/"],
		["Git Bash", "https://git-scm.com/downloads"],
		["Intellij", "https://www.jetbrains.com/idea/"],
		["MySQL Workbench", "https://www.mysql.com/products/workbench/"],
		["Vite", "https://vite.dev/"],
	];
	const moreProjects = [
		["Task List", "https://github.com/lyndonpanton/task-list"],
		["Currency Converter", "https://github.com/lyndonpanton/currency-converter"],
		["Word Counter", "https://github.com/lyndonpanton/word-counter"],
		["Pixel Art Editor", "https://github.com/lyndonpanton/pixel-art-editor"],
	];

	return (
		<footer>
			<section className="footer-profile">
				<ul className="footer-profile-list">
					<li className="footer-profile-list-heading footer-profile-list-item">Developer Profile</li>
					{
						developerProfile.map((profile, index) => {
							return <li key={ index } className="footer-profile-list-item">
										<a href={ profile[1] } target="_blank">
											{ profile[0] }
										</a>
									</li>
						})
					}
				</ul>
				<ul className="footer-profile-list">
					<li className="footer-profile-list-heading footer-profile-list-item">Languages and Frameworks</li>
					{
						languagesFrameworks.map((lf, index) => {
							return <li key={ index } className="footer-profile-list-item">
										<a href={ lf[1]} target="_blank">
											{ lf[0] }
										</a>
									</li>
						})
					}
				</ul>
				<ul className="footer-profile-list">
					<li className="footer-profile-list-heading footer-profile-list-item">Tools</li>
					{
						tools.map((tool, index) => {
							return <li key={ index } className="footer-profile-list-item">
										<a href={ tool[1] } target="_blank">
											{ tool[0] }
										</a>
									</li>
						})
					}
				</ul>
				<ul className="footer-profile-list">
					<li className="footer-profile-list-heading footer-profile-list-item">More Projects</li>
					{
						moreProjects.map((project, index) => {
							return <li key={ index } className="footer-profile-list-item">
										<a href={ project[1] } target="_blank">
											{ project[0] }
										</a>
									</li>
						})
					}
				</ul>
			</section>
			<section className="footer-external">
				<ul className="footer-external-list">
					<li className="footer-external-list-item">
						<a href="" target="_blank" className="footer-external-list-link">
							Privacy Policy
						</a>
					</li>
					<li className="footer-external-list-item">
						<a href="" target="_blank" className="footer-external-list-link">
							Terms and Conditions
						</a>
					</li>
					<li className="footer-external-list-item">
						<a href="" target="_blank" className="footer-external-list-link">
							Cookies
						</a>
					</li>
				</ul>
				<ul className="footer-external-list">
					<li className="footer-external-list-item">
						<a href="" target="_blank" className="footer-external-list-link">
							???
						</a>
					</li>
					<li className="footer-external-list-item">
						<a href="" target="_blank" className="footer-external-list-link">
							???
						</a>
					</li>
					<li className="footer-external-list-item">
						<a href="" target="_blank" className="footer-external-list-link">
							???
						</a>
					</li>
				</ul>
			</section>
			<p className="footer-copyright">
				&copy;
				<span className="footer-copyright-year"> {currentYear} </span>
				Lyndon Mykal Panton | All Rights Reserved
			</p>
		</footer>
	);
};

export default Footer;
