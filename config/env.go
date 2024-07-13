package config

import (
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	MongoLink string
	Port      string
	Host      string
}

var Envs = initConfig()

func initConfig() Config {
	godotenv.Load(".env")
	return Config{
		MongoLink: getEnv("MONGO_URI", "mongodb://localhost:27017"),
		Port:      getEnv("PORT", "8080"),
		Host:      getEnv("HOST", "http://localhost"),
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}
