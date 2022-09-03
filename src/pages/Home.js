import Pets from "../components/Pets"
import petsQuery from '../gql/queries/listPets'

const Home=()=>{    
    const content=(
            
            <div className='relative'>
                <Pets query={petsQuery}/>
            </div>
        )
    return content
}

export default Home