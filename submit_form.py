# process_form.py
import cgi

form = cgi.FieldStorage()

if "username" in form:
    username = form["username"].value
    with open("usernames.txt", "a") as file:
        file.write(username + "\n")
        print(f"Username '{username}' submitted successfully.")
else:
    print("Error: Username not provided.")
