import axois from 'axios'


class HelloWorldService {
    executeHelloWorldService() {
        console.log('executed service');
        return axois.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService() {
        console.log('executed service');
        return axois.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathService(name) {
        console.log('executed service');

        // let username = "user";
        // let password = "123";
        //
        // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);

        return axois.get(`http://localhost:8080/hello-world/path-variable/${name}`,
            // {
            //     headers: {
            //         authentication: basicAuthHeader
            //     }
            // }
        );
    }
}

export default new HelloWorldService();
