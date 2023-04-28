import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import nero1 from '../components/immagini/nero1.jpg';
import nero2 from '../components/immagini/nero2.jpg';
import nero3 from '../components/immagini/nero3.jpg';
import nero4 from '../components/immagini/nero4.jpg';
import nero5 from '../components/immagini/nero5.jpg';
import bar1 from '../components/immagini/bar1.jpg';
import bar2 from '../components/immagini/bar2.jpg';
import bar3 from '../components/immagini/bar3.jpg';
import bar4 from '../components/immagini/bar4.jpg';
import bar5 from '../components/immagini/bar5.jpg';
import bar6 from '../components/immagini/bar6.jpg';
import bar7 from '../components/immagini/bar7.jpg';
import ganc1 from '../components/immagini/ganc1.jpeg';
import ganc2 from '../components/immagini/ganc2.jpg';
import ganc3 from '../components/immagini/ganc3.jpg';
import ganc4 from '../components/immagini/ganc4.jpg';
import ganc5 from '../components/immagini/ganc5.jpg';
import ganc6 from '../components/immagini/ganc6.jpg';
import blu1 from '../components/immagini/blu1.jpg';
import blu2 from '../components/immagini/blu2.jpg';
import blu3 from '../components/immagini/blu3.jpg';
import blu4 from '../components/immagini/blu4.jpg';
import blu5 from '../components/immagini/blu5.jpg';
import cin1 from '../components/immagini/cin1.jpg';
import cin2 from '../components/immagini/cin2.jpg';
import cin3 from '../components/immagini/cin3.jpg';
import cin4 from '../components/immagini/cin4.jpg';
import cin5 from '../components/immagini/cin5.jpg';
import cin6 from '../components/immagini/cin6.jpg';
import cin7 from '../components/immagini/cin7.jpg';
import tav1 from '../components/immagini/tav1.jpg';
import tav2 from '../components/immagini/tav2.jpg';
import tav3 from '../components/immagini/tav3.jpg';
import tav4 from '../components/immagini/tav4.jpg';
import tav5 from '../components/immagini/tav5.jpg';
import tav6 from '../components/immagini/tav6.jpg';


import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Button from 'react-bootstrap/Button';

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "sticky",
      height: "70vh",
      width: "50%",
      display: "flex",
      flex: 14,
    };
  }

  static get CARD_STYLE() {
    return {

      height: "450px",
      width: "450px",
      color: "#FFF",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }
  /* function app MyCarousel() {
    const [cart,setCart] = useState([]);
    const [product] = useState([
  
      {
        name: "guanto nero",
        price: "12.50",
        image: "http://nero1,jpg",
      },
      {
        name: "barra",
        price: "36.90",
        image: "http://bar1,jpg",
      },
      {
        name: "guanto blu",
        price: "12.50",
        image: "http://blu1,jpg",
      },
      {
        name: "gancio",
        price: "19.90",
        image: "http://ganc1,jpg",
      },
      {
        name: "cintura",
        price: "20.90",
        image: "http://cin1,jpg",
      },
      {
        name: "tavola",
        price: "19.90",
        image: "http://tav1,jpg",
      }
    ]);
  
    const addToCart = (product) => {
      console.log("aggiunto");
      setCart ([...cart, product]);
  }
  */
  render() {
    return (

      <>
        <div className="row">
          <div class="col-12 col-md-6" style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
              <img src={nero1} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={nero2} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={nero3} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={nero4} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={nero5} alt="..." style={MyCarousel.CARD_STYLE} />
            </ReactCardCarousel>
          </div>

          <div class="col-12 col-md-6">
            <ToastContainer className="p-3" style={{
              display: "flex",
              alignItems: "center",
              height: "67%", marginLeft: "150px", marginTop: "20px",
            }}>
              <Toast>
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt="" />
                  <strong className="me-auto" style={{ fontSize: "30px" }}>Descrizione</strong>

                </Toast.Header>
                <Toast.Body style={{ fontSize: "15px" }}> <b>Guanti Crossfit Paracalli </b>con Polsiere per Palestra, Colore Nero, Taglia M.<br />
                  MATERIALE:
                  I guanti SamSam sono realizzati in fibra di neoprene elasticizzato che garantisce un comfort elevato
                  al tatto e massima vestibilità.Il palmo è dotato di una
                  zona gommata in silicone utile a garantire un'eccellente presa durante le sedute di sollevamento
                  pesi ed evitare la formazione di fastidiosi calli sul palmo della mano.Il materiale usato per la
                  realizzazione dei nostri guanti fornito il lavaggio in lavatrice ad alte temperature senza subire
                  cambiamenti.Il dorso della mano rimane scoperto e il contatto con l'ambiente e il polso viene saldamente
                  supportato dalla fascia elastica.<br />
                  <br />
                  <div style={{ fontSize: "30px" }}>Prezzo:    <b> € 12,50  </b>         </div>
                  <br />
                  <Button  variant="primary">Compralo Subito</Button>{' '}
                  <Button /*onClick={() => addToCart(product)} */ variant="info">Aggiungi al carrello</Button>{' '}


                </Toast.Body>

              </Toast>

            </ToastContainer>

          </div>
        </div>
        <hr />
        <div className="row">

          <div class="col-12 col-md-6">
            <ToastContainer className="p-3" style={{
              display: "flex",
              alignItems: "center",
              height: "67%", marginLeft: "150px"
            }}>
              <Toast>
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt="" />
                  <strong className="me-auto" style={{ fontSize: "30px" }}>Descrizione</strong>

                </Toast.Header>
                <Toast.Body style={{ fontSize: "15px" }}> <b>Guanti Crossfit Paracalli </b>con Polsiere per Palestra, Colore Blu, Taglia M.<br />
                  MATERIALE:
                  I guanti SamSam sono realizzati in fibra di neoprene elasticizzato che garantisce un comfort elevato
                  al tatto e massima vestibilità.Il palmo è dotato di una
                  zona gommata in silicone utile a garantire un'eccellente presa durante le sedute di sollevamento
                  pesi ed evitare la formazione di fastidiosi calli sul palmo della mano.Il materiale usato per la
                  realizzazione dei nostri guanti fornito il lavaggio in lavatrice ad alte temperature senza subire
                  cambiamenti.Il dorso della mano rimane scoperto e il contatto con l'ambiente e il polso viene saldamente
                  supportato dalla fascia elastica.<br />
                  <br />
                  <div style={{ fontSize: "30px" }}>Prezzo:    <b> € 12,50  </b>         </div>
                  <br />
                  <Button variant="primary">Compralo Subito</Button>{' '}
                  <Button variant="info">Aggiungi al carrello</Button>{' '}


                </Toast.Body>

              </Toast>

            </ToastContainer>
          </div>
          <div class="col-12 col-md-6" style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
              <img src={blu1} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={blu2} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={blu3} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={blu4} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={blu5} alt="..." style={MyCarousel.CARD_STYLE} />
            </ReactCardCarousel>
          </div>
        </div>
        <hr />
        <div className="row">
          <div class="col-12 col-md-6" style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
              <img src={bar1} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={bar2} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={bar3} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={bar4} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={bar5} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={bar6} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={bar7} alt="..." style={MyCarousel.CARD_STYLE} />

            </ReactCardCarousel>
          </div>
          <div class="col-12 col-md-6">
            <ToastContainer className="p-3" style={{
              display: "flex",
              alignItems: "center",
              height: "67%", marginLeft: "150px"
            }}>
              <Toast>
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt="" />
                  <strong className="me-auto" style={{ fontSize: "30px" }}>Descrizione</strong>

                </Toast.Header>
                <Toast.Body style={{ fontSize: "15px" }}>
                  <b>Uso:</b>  barra per trazioni allargabile a 2 vie per il telaio interno della porta
                  Utilizzabile senza viti né fori: è sufficiente fissarla e allenarsi. Nella confezione sono compresi anche due posizionatori con viti opzionali per bloccare la barra in un punto fisso e aumentarne la portata.
                  Caratteristiche: Comoda impugnatura di diametro 3,5cm imbottita e antiscivolo per garantire una presa sicura e comoda. Dotata di estremità in gomma a destra e a sinistra che evitano di lasciare segni sgradevoli nel telaio della porta. Facile da montare grazie al sistema telescopico.
                  Lunghezza: 66-100 cm
                  Adatta per tutti gli atleti, peso supportato fino a 100 kg.<br />
                  <br />
                  <div style={{ fontSize: "30px" }}>Prezzo:    <b> € 36,90  </b>         </div>
                  <br />
                  <Button variant="primary">Compralo Subito</Button>{' '}
                  <Button variant="info">Aggiungi al carrello</Button>{' '}


                </Toast.Body>

              </Toast>

            </ToastContainer>
          </div>
        </div>
        <hr />
        <div className="row">

          <div class="col-12 col-md-6">
            <ToastContainer className="p-3" style={{
              display: "flex",
              alignItems: "center",
              height: "67%", marginLeft: "150px"
            }}>
              <Toast>
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt="" />
                  <strong className="me-auto" style={{ fontSize: "30px" }}>Descrizione</strong>

                </Toast.Header>
                <Toast.Body style={{ fontSize: "15px" }}> Comodo e massimo supporto: il cinturino da polso è foderato in comodo neoprene imbottito e extra largo per darti una maggiore stabilità.
                  Cinghie di sollevamento realizzate in resistente tessuto a base di cotone
                  Gancio in acciaio solido: ganci in acciaio massiccio rivestiti con materiale antiscivolo Cinghie di sollevamento rinforzate
                  Taglia unica: a differenza di altre cinghie di sollevamento, le nostre fasce sui nostri ganci di sollevamento possono essere regolate per adattarsi perfettamente a qualsiasi uomo o donna e utilizzano l'imbottitura in neoprene per tenere le tue scritte in posizione. Extra forte ti offre una sicurezza completa.
                  <br />
                  <br />
                  <div style={{ fontSize: "30px" }}>Prezzo:    <b> € 19,90  </b>         </div>
                  <br />
                  <Button variant="primary">Compralo Subito</Button>{' '}
                  <Button variant="info">Aggiungi al carrello</Button>{' '}


                </Toast.Body>

              </Toast>

            </ToastContainer>
          </div>
          <div class="col-12 col-md-6" style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
              <img src={ganc1} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={ganc2} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={ganc3} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={ganc4} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={ganc5} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={ganc6} alt="..." style={MyCarousel.CARD_STYLE} />

            </ReactCardCarousel>
          </div>
        </div>
        <hr />
        <div className="row">
          <div class="col-12 col-md-6" style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
              <img src={cin1} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={cin2} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={cin3} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={cin4} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={cin5} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={cin6} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={cin7} alt="..." style={MyCarousel.CARD_STYLE} />

            </ReactCardCarousel>
          </div>
          <div class="col-12 col-md-6">
            <ToastContainer className="p-3" style={{
              display: "flex",
              alignItems: "center",
              height: "67%", marginLeft: "150px"
            }}>
              <Toast>
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt="" />
                  <strong className="me-auto" style={{ fontSize: "30px" }}>Descrizione</strong>

                </Toast.Header>
                <Toast.Body style={{ fontSize: "15px" }}> <b>Materiale:</b> La cintura di sollevamento pesi è realizzata in pelle di alta qualità, comoda e resistente all'abrasione. Fodera interna in pelle scamosciata comfort e imbottitura extra progettata per sostenere la schiena e il nucleo mentre sollevi pesi.
                  <b>Supporto per la schiena:</b> Una fodera in pelle scamosciata da 4 "sulla schiena e un supporto imbottito in schiuma ti offrono un ottimo supporto durante gli allenamenti mentre danno cuscino e comfort alla colonna lombare e prevengono lo sforzo sui muscoli della schiena.
                  <b>Taglia:</b> La lunghezza totale della cintura nera è di 110 cm, adatta a persone con una circonferenza della vita di circa 70-85 cm.
                  <br />
                  <br />
                  <div style={{ fontSize: "30px" }}>Prezzo:    <b> € 20,99  </b>         </div>
                  <br />
                  <Button variant="primary">Compralo Subito</Button>{' '}
                  <Button variant="info">Aggiungi al carrello</Button>{' '}


                </Toast.Body>

              </Toast>

            </ToastContainer>
          </div>
        </div>
        <hr />
        <div className="row">

          <div class="col-12 col-md-6">
            <ToastContainer className="p-3" style={{
              display: "flex",
              alignItems: "center",
              height: "67%", marginLeft: "150px"
            }}>
              <Toast>
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt="" />
                  <strong className="me-auto" style={{ fontSize: "30px" }}>Descrizione</strong>

                </Toast.Header>
                <Toast.Body style={{ fontSize: "15px" }}> <b>SPECIFICHE TECNICHE :</b>

                  Antiscivolo, pieghevole. La nuova tavola push up è aggiornata con maniglie in gomma antiscivolo per una
                  sensazione confortevole. Il pannello è realizzato in materiale in fibra di carbonio ecologico di migliore qualità e la
                  capacità di carico è fino a 120 kg. Con adesivi antiscivolo per impedire allo scivolo durante l'allenamento
                  Funzionamento semplice. Il prodotto è accompagnato da istruzioni per l'uso. Che tu sia un uomo o una donna,
                  un principiante o un esperto di fitness, i push up possono soddisfare le tue esigenze di allenamento e farti completare
                  il push up standard.Proteggi i tuoi polsi. Usa esercizi push up per evitare la pressione diretta del palmo a terra
                  <br />
                  <br />
                  <div style={{ fontSize: "30px" }}>Prezzo:    <b> € 19,90  </b>         </div>          <br />

                  <Button variant="primary">Compralo Subito</Button>{' '}
                  <Button variant="info">Aggiungi al carrello</Button>{' '}


                </Toast.Body>

              </Toast>

            </ToastContainer>

          </div>
          <div class="col-12 col-md-6" style={MyCarousel.CONTAINER_STYLE}>
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
              <img src={tav1} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={tav2} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={tav3} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={tav4} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={tav5} alt="..." style={MyCarousel.CARD_STYLE} />
              <img src={tav6} alt="..." style={MyCarousel.CARD_STYLE} />
            </ReactCardCarousel>
          </div>
        </div>










      </>

    );
  }
  
}




const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);




export default MyCarousel;