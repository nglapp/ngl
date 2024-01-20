#!/usr/bin/env python3

import cgi

# Get form data
form = cgi.FieldStorage()
username = form.getvalue("username")

# Write the username to the file
with open("usernames.txt", "a") as file:
    file.write(username + "\n")

# Respond to the client (optional)
print("Content-type: text/html\n")
print(f"Username '{username}' submitted successfully.")
