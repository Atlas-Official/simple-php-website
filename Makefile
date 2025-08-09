BRANCH_NAME := $(shell git rev-parse --abbrev-ref HEAD)
ENV := $(if $(filter main,$(BRANCH_NAME)),prod,dev)
GCP_PROJECT_ID = $(if $(filter prod,$(ENV)),gcp-atlas-prod,gcp-atlas-dev-env)

run:
	php -S localhost:8080

push:
	gcloud config set project $(GCP_PROJECT_ID) && \
	docker buildx build --platform linux/amd64 -t gcr.io/$(GCP_PROJECT_ID)/testwebsite-php --push .

deploy:
	make push && \
	gcloud run deploy testwebsite-php \
		--image=gcr.io/$(GCP_PROJECT_ID)/testwebsite-php \
		--region=asia-northeast1 \
		--platform=managed