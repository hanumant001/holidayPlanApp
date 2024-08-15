
import React from 'react';
import './Content.css';
import JarImage from './Jar.jpg';
 import Arrow from './arrow.png';
 import carring from './carring.jpg';
 function BotContent ({ rowRev }){
    return(
        
        <div className={`content__section ${rowRev ? 'rowRev' : ''}`}>
    <div style={{paddingLeft:'3rem'}}>
    <h3 className="content__subtitle">What is Lorem Ipsum?</h3>
    <p className="content__text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s.
    </p>
    <ul className="content__list">
      <li>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </li>
      <li>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </li>
      <li>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </li>
      <li>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </li>
    </ul>
    </div>
    <div className="content__image-container">
      <img src={rowRev? JarImage : carring} alt="jar" className="content__image" />
    </div>
  </div>
    )
}
function Content() {
    
  return (
    <section className="content">
      <div className="content__sections">
      <div className='Lorem'>
        <img src={Arrow}/>
         <h2>What is Lorem Ipsum?</h2>
         </div>
        <p className="content__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="content__cards">
          <div className="content__card">
            <img src={JarImage} alt="jar" className="content__image" />
            <h3 className="content__card-title">Where does it come from?</h3>
            <p className="content__card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="content__card">
            <img src={JarImage} alt="jar" className="content__image" />
            <h3 className="content__card-title">Where does it come from?</h3>
            <p className="content__card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="content__card">
            <img src={JarImage} alt="jar" className="content__image" />
            <h3 className="content__card-title">Where does it come from?</h3>
            <p className="content__card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <div className='Lorem'>
        <img src={Arrow}/>
         <h2>What is Lorem Ipsum?</h2>
         </div>
         <p className="content__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      <BotContent rowRev={false} />
      <BotContent rowRev={true} />
      
    </section>
  );
}

export default Content;
