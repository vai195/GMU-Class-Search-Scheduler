# The build stage
FROM golang:1.22 as builder
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o api ./cmd/main.go

# The run stage
FROM scratch as build-release-stage
WORKDIR /app
COPY --from=builder /app/api ./
EXPOSE 8080
CMD ["./api"]