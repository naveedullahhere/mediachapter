import { useState, useEffect } from "react";
import Slider from "react-slick";



export const Testimonials = () => {

    const [data, setData] = useState([]);
    const [img, setImg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://eliteblue.net/webcms/public/api/testimonials`)
            .then((response) => response.json())
            .then((actualData) => { setData(actualData.data); setImg(actualData.media_path) })
            .catch((err) => {
                setData([]);
            });
    }, []);

    console.log(data);
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
    };
    return (
        <>
            {
                data.length >= 1 &&

                <div className="sec py-5">
                    <Slider {...settings}>
                        {data.map((item) => {

                            return <div className="main" key={item.id}>
                                <div className="testimonials row">
                                    <div className="col-lg-6 col-md-8 col-12 mx-auto">
                                        <div className="testimonialImg">
                                            <img className='testImg' src={`${img}/${item.image}`} alt="clients" />
                                        </div>
                                        <div className="testimonialsContent my-4">
                                            <p className="text-muted"><i>{item.comment}</i></p>
                                        </div>
                                        <div className="testimonialsFooter">
                                            <p className="fw-bold mb-2"><i>{item.name}</i></p>
                                            <p className="text-muted"><i>{item.designation}</i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        })}
                    </Slider>
                </div>
            }
        </>
    )
}
