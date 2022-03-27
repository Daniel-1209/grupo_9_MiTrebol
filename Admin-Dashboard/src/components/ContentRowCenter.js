import React from 'react';
import LastMovieInDb from './LastUserAndProductInDb';
import GenresInDb from './totalOfCategories/GenresInDbOne';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GenresInDb />

        </div>
    )
}

export default ContentRowCenter;