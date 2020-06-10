delete:
	microk8s.kubectl delete -f deployment.yaml,service.yaml

apply:
	microk8s.kubectl apply -f deployment.yaml,service.yaml

build-all: build-go build-py

push-all: push-go push-py

build-go:
	cd go && docker build -t localhost:5000/helloworld-go .

push-go:
	docker push localhost:5000/helloworld-go:latest

build-py:
	cd py && docker build -t localhost:5000/helloworld-py .

push-py:
	docker push localhost:5000/helloworld-py:latest