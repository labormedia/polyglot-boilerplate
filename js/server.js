const k8s = require('@kubernetes/client-node');
const express = require('express')
const app = express()
const port = 7000

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

k8sApi.listNamespacedPod('sandbox').then((res) => {
    console.log(res.body);
});

app.get('/', (req, res) => res.send('Hello World! from nodejs'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))