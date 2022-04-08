import styled from 'styled-components'

const Gallery = () =>{
    return(
        <div className="container gallery-container">
            <div className="row row-cols-1 row-cols-md-4 g-5">
            <div className="col">
                <div className="card h-100">
                <img src='../images/Gallery_1.jpg' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">
                        small illustration/icon? i made a couple of weeks ago, heavily inspired by 
                        @cha_cha_art_ 's style, hope you like it!</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">20 July 2020</small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="../images/Gallery_2.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">
                        originalcharacter from ma fren @lukugusle.07
                        sorry for the lack of activity, I’ll try to catch up</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">29 November 2018</small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="../images/Gallery_3.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">i hate green.jpg</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">24 March 2017</small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="../images/Gallery_4.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">
                        the hue turns out quite differently in video ;v;
                        Guys is it normal to draw guidelines AFTER you finish your drawing yes or nay</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">14 May 2019</small>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Gallery;