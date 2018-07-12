use EMCdb;

db.createUser({
    'user': 'appuser',
    'pwd': '',
    roles: ['readWrite']
});