import "./Footer.css";

const Footer = () => {


	return (
		<footer>
			<section className="footer-developer">

			</section>
			<section className="footer-external">

			</section>
			<p className="footer-copyright">
				&copy;
				<span className="footer-copyright-year"> {new Date().getFullYear()} </span>
				Lyndon Mykal Panton | All Rights Reserved
			</p>
		</footer>
	);
};

export default Footer;
