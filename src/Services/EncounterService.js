import axios from 'axios';
import {environment} from '../Utils/Utils';

class EncounterService {
    //Check Tenat on Login
    async getEncounter() {
        var url = environment.USER_API_BASE_URL + '/patient';        
        let config = {
			headers:{ 
               'Authorization':'Bearer asdfasdfasdasfdsc' }
		}
       return await axios.get(url,config);
   
    } 
}

export default new EncounterService();
