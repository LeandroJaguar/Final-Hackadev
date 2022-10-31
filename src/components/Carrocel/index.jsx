import { useRef } from "react";
import "./styles.css";
import { dados } from "../Data/data";

function Carrocel() {
  const carousel = useRef(null);
  const data = dados;

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <>
      <div className="container">
        <div className="carousel" ref={carousel}>
          {data.map((item) => {
            const { id, nome, precoOriginal, precoDesconto, image } = item;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={image} alt={nome} />
                </div>
                <div className="info">
                  <span className="nome">{nome}</span>
                  <span className="precoOriginal">R$ {precoOriginal}</span>
                  <span className="precoDesconto">R$ {precoDesconto}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img
              src="/static/media/216151_right_chevron_icon.png"
              alt="Scroll Left"
            />
          </button>
          <button onClick={handleRightClick}>
            <img
              src="/static/media/216151_right_chevron_icon.png"
              alt="Scroll Right"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Carrocel;
