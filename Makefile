build:
	@go build -o bin/gogmuclassdb cmd/main.go

test:
	@go test -v ./...

run: build
	@./bin/gogmuclassdb