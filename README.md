API Definition Server
=====================

A simple Node.JS application that serves API Descriptors.
---------------------------------------------------------

Say what you will about SOAP as an API style, the one thing it unquestionably got right was the WSDL. A valid WSDL allows a client library in just about any language to dynamically generate the stub code necessary to access the API in the client's native programming language.

The biggest complaint about the WSDL, however, is its bloat - too often, the entire API is documented in a single WSDL, which means downloading it is a tremendous hassle.

Several attempts have been made to replicate the functionality fo the WSDL in RESTful API architectures (WADL, WDDL, etc.) but none have really taken hold. However, RESTful APIs are often described using one or many descriptor languages (Swagger, I/O Docs, RAML, etc.) for the purposes of interactive documentation. But they can be used for so much more.

This simple system takes API definitions described using a flavor of JSON-Schema and serves them on a resource-by-resource basis. This has a number of benefits:

* The payload for each description is limited solely to the resource being described
* The payload is also limited to the specifically requested representation of that resource
* This particular flavor of JSON-Schema (designed by Rob Zazueta) describes both API requests AND responses to allow for a more completely build dynamic client.

### How to use

In your RESTful API responses, you should define a specific profile for the data being returned. For example, if you're sending back a JSON representation of a User resource, you may consider sending back the following header in your response:

> Content-Type: application/json; profile=http://www.example.com/definitions?profile=vnd.example.user+v1

This indicates to the client that they should look to the URL "http://www.example.com/definitions?profile=vnd.example.user+v1" to retrieve the descriptor for the given resource to help them figure out how to programatically parse it. 

### Dependencies
* Express JS
* Couch DB

### TODO: Implement these features
* Caching support
* In-band essaging for deprecated versions
* Support for descriptor formats others than JSON-Schema