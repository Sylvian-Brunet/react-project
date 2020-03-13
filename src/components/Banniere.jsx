import React from 'react';
import './Map.css';

import Context from './context';

const Banniere = ({nbMrkrs}) => {

    const { isDark, update } = React.useContext(Context);

    return (
        <div className={isDark ? 'nbMarkers1' : 'nbMarkers2'}>
            Nombre de markers : {nbMrkrs} <button onClick={() => {update(prev => !prev);}}>Changer Thème</button>
        </div>

    );
};

export default Banniere;