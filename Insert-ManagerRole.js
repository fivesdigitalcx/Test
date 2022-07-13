db = db.getSiblingDB('authorization');
var principalId = "f4b540a4-37dd-4427-ae09-c9f36c770470";// Get this from Keyvloak
var emailId = "lakhwinder.singh@fivesdigital.com";//Email of the user
var name="lakhwinder Singh" ; //Enter Full user name
var organizationId = "FVS"; /*
FVS - FiveS 
SWG - Swiggy
KCR- Kochar
NYK - NYKAA
*/

var managerId= "";
/*Get managers ID from Keycloak OR query for manager name in DB to get this*/

var locationId= "8e92b519-b8e8-49c1-8e36-52d9cc1cd795";
/*
70d2e209-d060-45dc-bceb-400552fc6cf7- FVS HUBLI
8efc1854-a4ac-453d-90a6-9b6b822e00bd - FVS UDAIPUR
09c57ee7-dab0-4317-974d-e4279627092e - Tech Mahindra Ahmedabad
e98d5dc2-e12c-4d61-8eb7-99cdb6859068 - Tech Mahindra Delhi
8916f7b7-2ce5-4c6e-ad62-0fd7c38b22f4 - Kochar Chandigarh
00edabbf-af2a-4853-92a1-eb1862ceae98 - SWIGGY BLR
8e92b519-b8e8-49c1-8e36-52d9cc1cd795  - JSR
f8ca0190-7d50-4b35-b277-f478b317505c -BHL

*/

db.users.insert({
  "principalId": principalId,
  "emailId": emailId,
  "employeeId": "123456778",
  "name": name,
  "clientID": "login-client",
  "organizationId": organizationId,
  "managerId": managerId,
  "locationId": locationId,
  "authorizations": [
    {
      "serviceId": "DMS",
      "subService": "DT",
      "accessLevel": "SUPER",
      "lob": "SWG_DEL"
    },
    {
      "serviceId": "DMS",
      "subService": "DASH",
      "accessLevel": "SUPER",
      "lob": "SWG_DEL"
    }
  ]
})
