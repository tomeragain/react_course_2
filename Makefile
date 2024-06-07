
.PHONY: build
build:
	docker-compose up -d --build

.PHONY: serve
serve:
	docker-compose up -d

.PHONY: terminal
terminal:
	docker-compose exec vite_docker sh

stop:
	docker-compose stop