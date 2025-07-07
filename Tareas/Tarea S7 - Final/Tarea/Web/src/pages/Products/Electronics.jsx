import {useContext, useEffect} from 'react';
import {ContextoGlobal} from '../../Context/DataContext'

const Electronics = () => {
    const { info, setInfo } = useContext(ContextoGlobal);

    

    return (
        <div>
            <h2>Productos Electronicos</h2>
            <span>{info}</span>
        </div>
    );
};

export default Electronics;
