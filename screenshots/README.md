# Screenshots
To help review your infrastructure, please include the following screenshots in this directory::

## Deployment Pipeline
* DockerHub showing containers that you have pushed: ![alt text](DockerHub.png)
* GitHub repository’s  (https://github.com/yamto2304/cloud-developer-project-3)
* Travis CI showing a successful build and deploy job: ![alt text](Travis.png)

## Kubernetes
* To verify Kubernetes pods are deployed properly
```bash
kubectl get pods 
```
![alt text](GetPods.png)
* To verify Kubernetes services are properly set up
```bash
kubectl describe services
```
![alt text](DescribeServices1.png)![alt text](DescribeServices2.png)![alt text](DescribeServices3.png)![alt text](DescribeServices4.png)![alt text](DescribeServices5.png)
* To verify that you have horizontal scaling set against CPU usage
```bash
kubectl describe hpa
```
![alt text](LogHpa.png)
* To verify that you have set up logging with a backend application
```bash
kubectl logs {udagram-frontend}
```
![alt text](LogHpa.png)

Screenshot of Kubernetes services shows a reverse proxy
![alt text](KubectlGetServices.png)