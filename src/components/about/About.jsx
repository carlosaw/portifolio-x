import './about.css';
import Award from '../../img/award.png';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Sobre mim</h1>
        <p className="a-sub">
        Sou apaixonado pelo mundo das artes e do digital. Procuro inspiração nos meus clientes e no mundo que me rodeia. Fiquem à vontade para conhecer um pouco da minha trajetória profissional.
        </p>
        <p className="a-desc">
        Desenvolvimento de layouts gráficos para websites / Desenvolvimento frontend (HTML 5, CSS3, jQuery) / Domínio da framework Bootstrap / Desenvolvimento de websites utilizando o CMS WordPress (lojas online, sites institucionais).
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
            O International Design Awards é um grupo de prêmios que reconhece, celebra e promove visionários do design e talentos emergentes em arquitetura, interiores, produtos, design gráfico e moda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;