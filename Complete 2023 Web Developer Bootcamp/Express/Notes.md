# Creating an Express server
1. Create directory
2. Create index.js file
3. Initialize NPM
4. Install the Express package
5. Write server application in index.js
6. Start server
## HTTP
Hyper Text Transfer Protocol
## Request Vocabulary
### GET
Request resource from server.
* Retrieves information from the specified resource, and should only be used to request data (not modify it).
### POST
Sending resource to server.
* Sends data to the server for processing, usually resulting in a change in the server state or side effects on the server.
### PUT
Replace a resource.
* Updates a current resource or creates it if it doesn't exist, with the client providing a complete and updated copy of the resource.
### PATCH
Patch up a resource.
* Updates parts of an existing resources, with the client providing only the parts of the resource that need to be updated.
### DELETE
Delete resource from server (request from client-side computer to server-side computer).
* Removes the specified resource from the server.
## HTTP Response Status Codes
1. Informational responses (100 - 199)
2. Successful responses (200 - 299)
3. Redirection messages (300 - 399)
4. Client error responses (400 - 499)
5. Server error responses (500 - 599)
## Postman
