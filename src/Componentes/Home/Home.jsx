import React from 'react';

function Home() {
  return (
    <section id="home">
        <div className="edrea_hero">

            <div className="overlay">
                <div className="overlay_image" data-img-url="assets/img/Banner2.png"></div>
            </div>
            <div className="overlay_color"></div>

            <div className="content">
                <div className="container">
                    <div className="content_in">

                        <h3 className="title">
                            <span>
                                Full-Stack Junior Developer
                            </span>
                            <br/>
                            Web
                            <br/>
                            RPA
                        </h3>
                        <p className="description">
                            Universitario en formacion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Home;