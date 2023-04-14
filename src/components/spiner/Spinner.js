/*const Spinner = () => {
    return (
        <h1 >
            Cargando ...
        </h1>
    )
} */

import { Spinner } from 'reactstrap'

function Spiner() {
    return (
        <div>
            <Spinner animation="border" variant="success" />
        </div>
    )

}

export default Spiner