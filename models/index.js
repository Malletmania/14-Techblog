const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
    foreignkey: 'user_id'
});

Project.belongsTo(User, {
    foreignkey: 'user_id'
});

module.exports = { User, Project};