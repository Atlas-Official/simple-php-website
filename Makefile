BRANCH_NAME := $(shell git rev-parse --abbrev-ref HEAD)
ENV := $(if $(filter main,$(BRANCH_NAME)),prod,$(if $(filter staging,$(BRANCH_NAME)),staging,dev))
GCP_PROJECT_ID = $(if $(filter prod,$(ENV)),gcp-atlas-prod,$(if $(filter staging,$(ENV)),gcp-atlas-staging,gcp-atlas-dev-env))

run:
	php -S localhost:8080

push:
	gcloud config set project $(GCP_PROJECT_ID) && \
	docker buildx build --platform linux/amd64 -t gcr.io/$(GCP_PROJECT_ID)/testwebsite-php --push .

deploy:
	make push && \
	gcloud run services update testwebsite-php --region=asia-northeast1 --image=gcr.io/$(GCP_PROJECT_ID)/testwebsite-php