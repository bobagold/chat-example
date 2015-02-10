# chat-example

This is the source code for a very simple chat example used for 
the [Getting Started](http://socket.io/get-started/chat/) guide 
of the Socket.IO website.

Please refer to it to learn how to run this application.

# Homework

Here are some ideas to improve the application:

  - Broadcast a message to connected users when someone connects or disconnects
  - Add support for nicknames
  - Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
  - Add “{user} is typing” functionality
  - Show who’s online
  - Add private messaging
  - Share your improvements!

  - Joining users see up to a 100 of latest messages in their personal message boards
  - The message board clearly indicates the authorship of messages by the same user
  - The anonymous user identity is assigned automatically, and it survives browser restarts

# Issues

  - Client: handle server disconnect, do not loose outgoing messages
