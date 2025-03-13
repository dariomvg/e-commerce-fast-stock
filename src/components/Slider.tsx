import "../styles/slider.css";
import iconLeft from "../assets/arrow-left.svg";
import iconRight from "../assets/arrow-right.svg";
import { PropsSlider } from "@/types/types";
import { useEffect, useState } from "react";

export const Slider = ({ products }: PropsSlider) => {
  const [index, setIndex] = useState<number>(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % products.length);
  };
  const prev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="slider">
      <div className="container-slider">
        <div className="container-slide">
          {products.map(
            ({ id, picture, title, details }) =>
              id === index + 1 && (
                <div key={id} className="card-slider">
                  <img
                    src={picture}
                    alt={title}
                    width={400}
                    height={350}
                    className="image-slide"
                    loading="lazy"
                  />
                  <a className="link-card-slider" href={`/product/${id}?product=${title}`}>
                    {title}
                  </a>
                  <p>{details}</p>
                </div>
              )
          )}
        </div>

        <div className="container-buttons">
          <button className="btn-slider" onClick={prev}>
            <img src={iconLeft.src} alt="arrow left" width={20} height={20} />
          </button>
          <button className="btn-slider" onClick={next}>
            <img src={iconRight.src} alt="arrow right" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
