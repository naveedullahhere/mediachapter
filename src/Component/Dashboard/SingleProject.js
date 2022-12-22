import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import { Error } from '../Error';
import { Spinner } from '../Spinner';

export const SingleProject = () => {

    const { URL, userId } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsError] = useState(false);

    const params = useParams();
    const [data, setData] = useState([]);
    const [img, setImg] = useState(null);
    const singleProject = params.singleProject;


    useEffect(() => {
        fetch(`${URL}api/single-project/${singleProject}?token=${userId}`)
            .then((response) => response.json())
            .then((actualData) => { setData(actualData.data); setIsLoading(false); })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
                setData([]);
            });
    }, []);

    return (
        <div className='sec py-5'>
            <div className="contaienr">
                <div className="row">

                    {data &&
                        <div div className="col-12">
                            <h1 className="heading fs-4">{data.name}</h1>
                            <p className="para-sm text-muted" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                        </div>
                    }
                    {isLoading &&
                        <Spinner />
                    }
                    {isErr &&
                        <Error />
                    }
                </div>
            </div>
        </div >
    )
}
