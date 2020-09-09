import axios from 'axios';
import {environment} from '../Utils/Utils';

class LoginService {
    //Check Tenat on Login
    checkUser(uname,pwd) {
        var url = environment.USER_API_BASE_URL + '/login';
        var params = '?username=' + uname +'&password=' + pwd +'';        
        var finalUrl = url + params;
        let config = { 
			headers:{ 
                'Access-Control-Allow-Origin': '*'
            }
        }
        return axios.post(finalUrl);
    } 
}

export default new LoginService();
