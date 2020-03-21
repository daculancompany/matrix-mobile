import axios from 'axios';
import { config } from '../helpers/global';

export default class Service {

    // static test(parameters = {})
    // {  
    //     return "test";
    //     // return axios({
    //     //     method: 'get',
    //     //     url: UrlLink+ 'stations/'+parameters+'/shows',
    //     // });
    // }

    static testApi() {
        return axios({
            method: 'post',
            url: 'http://api.imatrix.io/api/v1/users/register',
            data: {
                name: "niel",
                email: "niel.daculan@gmail.com",
                phone: "+09355663729",
            }
        });

    }
    static lockUp(parameters = {}) {
        return axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/users`,
        });

    }


    static checkLogin(parameters = {}) {
        let grant_type = 'password';
        let username = parameters.username;
        let password = parameters.password;

        return axios({
            method: 'get',
            url: 'https://api.imatrix.io/oauth/v2/token?grant_type=' + grant_type + '&username=' + username + '&password=' + password + '&client_id=' + config.apiClientId + '&client_secret=' + config.apiClientSecret + '',
        });
        //url: 'https://api.imatrix.io/oauth/v2/token?grant_type=password&username=logicbase.daculan@gmail.com&password=Daculan1992&client_id=2_nfok9ntu8z4sco0cco0s44oogck8sc88ksgo08skokwcc48kg&client_secret=4krbgvyraayokk4wgoskwoswoc44088swkcs444c4wg4wc4ocs',
    }

    static register(parameters = {}) {
        return axios({
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            url: 'https://api.imatrix.io/api/v1/users/register',
            data: {

                name: parameters.name,
                phone: parameters.phone,
                organization: {
                    name: 'mobile'+Math.random().toString(36).substring(2),
                    address:  'mobile'+Math.random().toString(36).substring(2),

                },
                email: parameters.email,
                username: 'mobile'+Math.random().toString(36).substring(2),
                plainPassword: {
                    first: parameters.password,
                    second: parameters.password,
                },
                serviceDescriptionAccepted: true,
                serviceAgreementAccepted: true,
            }
        });

    }





}