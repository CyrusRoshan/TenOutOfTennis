package main

import (
	"fmt"
	"strconv"
	"time"

	"github.com/firstrow/tcp_server"
	"github.com/gin-gonic/gin"
)

var timeStamp int64
var serveType string

var SERVETYPES = map[int64]string{
	0: "Forehand",
}

func mlServer() {
	server := tcp_server.New("localhost:9999")

	server.OnNewClient(func(c *tcp_server.Client) {
		// new client connected
		// c.Send("Hello")
		fmt.Println("Client Connected--------------")
	})
	server.OnNewMessage(func(c *tcp_server.Client, message string) {
		// new message received
		fmt.Println("NEW MESSAGE", message)

		timeStamp = time.Now().UnixNano() / 1000000

		i, err := strconv.ParseInt(message, 10, 32)
		if err != nil {
			fmt.Println(err)
		} else {
			serveType = SERVETYPES[i]
		}
	})
	server.OnClientConnectionClosed(func(c *tcp_server.Client, err error) {
		// connection with client lost
		fmt.Println("Client Disconnected-----------")
	})

	server.Listen()
}

func appServer() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"serveType": serveType,
			"timeStamp": timeStamp,
		})
	})
	r.Run(":80")
}

func main() {
	go mlServer()
	appServer()
}
