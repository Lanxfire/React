import {useContext, useEffect} from 'react';
import {ContextoGlobal} from '../../Context/DataContext'

const Clothes = () => {
    const { info, setInfo } = useContext(ContextoGlobal);

    useEffect(() => {
        setInfo('Context2: Segunda Estapa del context o sera la 1era, quien sabe!!!!!'
        );
    }, [setInfo]);

    return (
        <div>
            <h2>Productos de Ropa</h2>
            <span>{info}</span>
        </div>
    );
};

export default Clothes;
