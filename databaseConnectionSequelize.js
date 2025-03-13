const is_hosted = process.env.IS_HOSTED || false;
const dbConfigHosted = "mysql://avnadmin:AVNS_5cAAyUss2odGFczuPcs@mysql-1f9e04c9-my-e658.g.aivencloud.com:14386/defaultdb?ssl-mode=REQUIRED";
const dbConfigLocal = "mysql://root:Password@localhost/lab_example";
if (is_hosted) {
var databaseConnectionString = dbConfigHosted;
}
else {
var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;